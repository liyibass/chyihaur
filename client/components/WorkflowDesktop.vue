<template>
    <div class="workflow-desktop">
        <div class="workflow-desktop__wrapper">
            <WorkflowDesktopContainer
                class="workflow-desktop__up"
                :currentAnimate="currentAnimate"
                :cardArray="upContainer"
            />
            <WorkflowDesktopContainer
                class="workflow-desktop__column"
                :currentAnimate="currentAnimate"
                :cardArray="columnContainer"
                :column="true"
            />
            <WorkflowDesktopContainer
                class="workflow-desktop__bottom"
                :currentAnimate="currentAnimate"
                :cardArray="bottomContainer"
            />
        </div>
    </div>
</template>

<script>
import workflowMixin from '@/mixins/workflowMixin'
import WorkflowDesktopContainer from '@/components/WorkflowDesktopContainer'

export default {
    mixins: [workflowMixin],
    components: {
        WorkflowDesktopContainer,
    },
    props: {
        currentAnimate: {
            type: Number,
            isRequired: true,
            default: () => {
                return 0
            },
        },
    },
    computed: {
        upContainer() {
            return [this.workflowList[0], this.workflowList[1]]
        },
        columnContainer() {
            return [this.workflowList[2]]
        },
        bottomContainer() {
            return [this.workflowList[3], this.workflowList[4], this.workflowList[5]]
        },
    },
}
</script>

<style lang="scss" scoped>
.workflow-desktop {
    position: relative;
    width: 100%;
    height: 100%;
    display: none;
    @include atLarge {
        display: block;
    }

    &__wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    &__up {
        width: 35.458%;
        // height: 173px;
        // background: gold;
        position: absolute;
        top: 0;
        left: 0;
    }

    &__bottom {
        width: 68.557%;
        // height: 173px;
        // background: gold;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    &__column {
        position: absolute;
        top: -23px;
        left: calc(35.458% - 30px);
    }
}
</style>
