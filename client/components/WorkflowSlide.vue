<template>
    <div class="workflow-slide">
        <div class="workflow-slide__ruler" :class="currentRulerPosition">
            <div class="workflow-slide__ruler_center" />
            <div
                v-for="workflow in workflowList"
                :key="workflow.id"
                class="workflow-slide__ruler_degree"
                :class="{ current: workflow.id + 1 === currentId }"
            >
                <div class="workflow-slide__icon" :class="{ isFocused: workflow.id + 1 === currentId }">
                    <WorkflowIcon :icon="workflow.icon" />

                    <div class="workflow-slide__icon_title">
                        {{ workflow.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import workflowMixin from '@/mixins/workflowMixin'
import WorkflowStepTitle from '@/components/WorkflowStepTitle'
import WorkflowIcon from '@/components/WorkflowIcon'

export default {
    mixins: [workflowMixin],
    components: {
        WorkflowStepTitle,
        WorkflowIcon,
    },
    props: {
        currentId: Number,
        isRequired: true,
        default: () => {
            return 0
        },
    },

    computed: {
        currentRulerPosition() {
            const degreeMove = this.currentId === 0 ? 0 : this.currentId - 1
            // return { left: `calc(50% - ((100% - 36px) / 4) * ${degreeMove})` }
            return `move${this.currentId}`
        },
    },
}
</script>

<style lang="scss" scoped>
.workflow-slide {
    position: relative;
    width: 100%;
    height: 177px;
    overflow: hidden;
    margin-bottom: 67px;

    @include atLarge {
        display: none;
    }

    &__ruler {
        position: absolute;
        bottom: 0;
        left: calc(50% - ((100% - 36px) / 6) * 0);
        transition: left 0.5s ease-in-out;
        width: calc((100% - 36px) / 4 * 6);
        height: 50px;
        display: flex;
        align-items: center;

        &_degree {
            position: relative;
            flex: 1;
            height: 23px;
            border-left: 2px solid $mainWhite;
            transition: height 0.5s ease-in-out;

            &.current {
                height: 50px;
                border-left: 3px solid $mainWhite;
            }

            &_last {
                height: 23px;
                border-right: 2px solid $mainWhite;
            }
        }

        &_center {
            position: absolute;
            top: 50%;
            left: 0;
            width: 300%;
            height: 7px;
            transform: translate(-50%, -50%);
            background: $mainWhite;
        }
    }
    &__icon {
        position: absolute;
        top: -55px;
        left: 0;
        transform: translate(-50%, 0);

        &_title {
            opacity: 0;
            color: $mainWhite;
            text-align: center;

            // transition: all 0.5s ease-in-out;
        }

        .workflow-icon {
            width: 49px;
            opacity: 0.2;
            transition: opacity 0.5s ease;
        }

        &.isFocused {
            top: -120px;
            .workflow-slide__icon_title {
                opacity: 1;
            }

            .workflow-icon {
                margin-bottom: 10px;
                opacity: 1;
                width: 74px;
                top: -100px;
                transition: all 0.5s ease-in-out;
            }
        }
    }

    .move1 {
        left: calc(50% - ((100% - 36px) / 4) * 0);
    }
    .move2 {
        left: calc(50% - ((100% - 36px) / 4) * 1);
    }
    .move3 {
        left: calc(50% - ((100% - 36px) / 4) * 2);
    }
    .move4 {
        left: calc(50% - ((100% - 36px) / 4) * 3);
    }
    .move5 {
        left: calc(50% - ((100% - 36px) / 4) * 4);
    }
    .move6 {
        left: calc(50% - ((100% - 36px) / 4) * 5);
    }
}
</style>
