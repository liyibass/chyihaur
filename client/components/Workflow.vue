<template>
    <div class="Workflow" id="workflow">
        <div class="Workflow__background">
            <img :src="require('@/static/images/serviceBackground.png')" alt="" srcset="" />
        </div>
        <!-- <div class="Workflow__wrapper">
            <div class="Workflow__title">
                <h6 v-if="currentAnimate > 0">
                    {{ workflowList[currentAnimate - 1].name }}
                </h6>
            </div>

            <div class="Workflow__steps">
                <div class="Workflow__steps_wrapper">
                    <WorkflowStepTitle
                        v-for="(step, index) in workflowList"
                        :key="index"
                        :step="step"
                        :isFocused="index <= currentAnimate - 1 ? true : false"
                    />
                </div>
            </div>

            <div class="Workflow__icons">
                <WorkflowIcon
                    v-for="(step, index) in workflowList"
                    :key="index"
                    :step="step"
                    :isFocused="index <= currentAnimate - 1 ? true : false"
                />
            </div>
        </div> -->

        <div class="Workflow__detail">
            <WorkflowDetail :curentDetailId="currentAnimate" />
        </div>
        <!-- <div class="Workflow__big_title">
            <img :src="require('@/static/images/title2.png')" alt="" />
        </div> -->
    </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
import OverflowImage from '@/components/OverflowImage'
import WorkflowStepTitle from '@/components/WorkflowStepTitle'
import WorkflowIcon from '@/components/WorkflowIcon'
import WorkflowDetail from '@/components/WorkflowDetail'
import workflowMixin from '@/mixins/workflowMixin'

export default {
    components: {
        ProgressBar,
        OverflowImage,
        WorkflowStepTitle,
        WorkflowIcon,
        WorkflowDetail,
    },
    mixins: [workflowMixin],
    data() {
        return {
            currentAnimate: 0,
        }
    },
    computed: {
        generatePercentage() {
            console.log(this.currentAnimate * 16)
            return this.currentAnimate * 16 < 96 ? this.currentAnimate * 16 : 100
        },
    },

    mounted() {
        const workflowScene = this.$scrollmagic
            .scene({
                triggerElement: '.Workflow',
                offset: 0,
                triggerHook: 0,
                duration: 2000,
            })
            .setPin('.Workflow')
            .on('enter', () => {})

            .on('leave', () => {})

            .on('progress', (e) => {
                if (e.progress < 0.01) {
                    this.currentAnimate = 0
                } else if (e.progress > 0.01 && e.progress < 0.16) {
                    this.currentAnimate = 1
                } else if (e.progress > 0.16 && e.progress < 0.32) {
                    this.currentAnimate = 2
                } else if (e.progress > 0.32 && e.progress < 0.48) {
                    this.currentAnimate = 3
                } else if (e.progress > 0.48 && e.progress < 0.64) {
                    this.currentAnimate = 4
                } else if (e.progress > 0.64 && e.progress < 0.8) {
                    this.currentAnimate = 5
                } else if (e.progress > 0.8) {
                    this.currentAnimate = 6
                }
            })
        // .addIndicators({ name: 'workflowScene' })
        this.$scrollmagic.addScene([workflowScene])
    },
}
</script>

<style lang="scss" scoped>
.Workflow {
    background: $workflowGray;
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__background {
        position: absolute;
        top: 0;
        right: 0;
        width: 56vw;
        img {
            width: 100%;
        }
    }

    &__detail {
        position: absolute;
        bottom: 10%;
        left: 0;

        @include atLarge {
            left: 10%;
        }
    }
}
</style>
