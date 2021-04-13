<template>
    <div class="workflow-slide">
        <div class="workflow-slide__ruler" :style="currentRulerPosition">
            <div class="workflow-slide__ruler_center" />
            <div
                v-for="workflow in workflowList"
                :key="workflow.id"
                class="workflow-slide__ruler_degree"
                :class="{ current: workflow.id + 1 === curentDetailId }"
            />
            <!-- <div class="workflow-slide__ruler_degree_last" /> -->
        </div>
    </div>
</template>

<script>
import workflowMixin from '@/mixins/workflowMixin'

export default {
    mixins: [workflowMixin],

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
            return { left: `calc(50% - (100% / 6) * ${degreeMove})` }
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
        left: calc(50% - (100% / 6) * 0);
        transition: left 0.5s ease-in-out;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;

        &_degree {
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
}
</style>
