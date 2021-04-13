<template>
    <div class="workflow-slide">
        <div class="workflow-slide__ruler" :style="currentRulerPosition">
            <div class="workflow-slide__ruler_center" />
            <div
                v-for="workflow in workflowList"
                :key="workflow.id"
                class="workflow-slide__ruler_degree"
                :class="{ current: workflow.id + 1 === curentDetailId }"
            >
                <div class="workflow-slide__icon" :class="{ isFocused: workflow.id + 1 === curentDetailId }">
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
        curentDetailId: Number,
        isRequired: true,
        default: () => {
            return 0
        },
    },

    computed: {
        currentRulerPosition() {
            const degreeMove = this.curentDetailId === 0 ? 0 : this.curentDetailId - 1
            return { left: `calc(50% - ((100% - 36px) / 4) * ${degreeMove})` }
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
                opacity: 1;
                width: 74px;
                top: -100px;
                transition: all 0.5s ease-in-out;
            }
        }
    }
}
</style>
