<template>
    <div class="workflow" id="workflow">
        <div class="workflow__background">
            <img :src="require('@/static/images/serviceBackground.png')" alt="" srcset="" />
        </div>

        <WorkflowSlide :curentDetailId="currentAnimate" />

        <div class="workflow__detail">
            <WorkflowDetail :curentDetailId="currentAnimate" />
        </div>
    </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
import OverflowImage from '@/components/OverflowImage'
import WorkflowStepTitle from '@/components/WorkflowStepTitle'
import WorkflowIcon from '@/components/WorkflowIcon'
import WorkflowSlide from '@/components/WorkflowSlide'
import WorkflowDetail from '@/components/WorkflowDetail'
import workflowMixin from '@/mixins/workflowMixin'

export default {
    components: {
        ProgressBar,
        OverflowImage,
        WorkflowStepTitle,
        WorkflowIcon,
        WorkflowSlide,
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
                triggerElement: '.workflow',
                offset: 0,
                triggerHook: 0,
                duration: 2000,
            })
            .setPin('.workflow')
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
.workflow {
    background: $mainGreen;
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__background {
        position: absolute;
        top: 0;
        right: 0;
        width: 56vw;
        img {
            width: 100%;
        }
    }

    .workflow-slide {
        position: relative;
        margin-bottom: 67px;
    }

    &__detail {
        position: absolute;

        bottom: 9vh;
        @include atLarge {
            bottom: 7%;
            left: 10%;
        }
    }
}
</style>
