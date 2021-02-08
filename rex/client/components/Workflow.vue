<template>
    <div class="Workflow" id="workflow">
        <OverflowImage />

        <div class="Workflow__wrapper">
            <ProgressBar :nextProgress="generatePercentage" />

            <div class="Workflow__title">
                <h6 v-if="currentAnimate > 0">
                    {{ workflowList[currentAnimate - 1].name }}
                </h6>
            </div>

            <div class="Workflow__steps">
                <div class="Workflow__steps_wrapper">
                    <Workflowstep
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
                    :isFocused="index <= currentAnimate - 1 ? true : false"
                />
            </div>
        </div>

        <div class="Workflow__big_title">
            <img :src="require('@/static/images/title2.png')" alt="" />
        </div>

        <Carousel />
    </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
import OverflowImage from '@/components/OverflowImage'
import Workflowstep from '@/components/Workflowstep'
import WorkflowIcon from '@/components/WorkflowIcon'
import Carousel from '@/components/Carousel'
import workflowMixin from '@/mixins/workflowMixin'

export default {
    components: {
        ProgressBar,
        OverflowImage,
        Carousel,
        Workflowstep,
        WorkflowIcon,
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
    background: $mainGray;
    width: 100%;
    // height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__wrapper {
        width: 100%;
        max-width: 800px;
    }

    &__title {
        padding: 10px 0 30px;
        color: $mainGreen;
        text-align: center;
    }

    &__steps {
        position: relative;
        width: 100%;
        height: 36px;
        overflow: hidden;
        &_wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            // right: -18px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    &__big_title {
        width: 37px;
        position: absolute;
        top: 0;
        left: 10px;
        transform: translateY(-49%);

        opacity: 0.3;
        img {
            width: 100%;
        }
    }
}

.Workflow__icons {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &_icon {
        width: calc(100% / 6 - 10px);
        margin-bottom: 22px;
        img {
            width: 100%;
        }
    }
}
</style>
