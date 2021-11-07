<template>
    <div class="video" ref="video">
        <video class="video__player" :src="videoSrc" loop muted playsinline></video>
    </div>
</template>

<script>
import 'intersection-observer'
export default {
    data() {
        return {
            isMobile: true,
            video: {
                url: require('@/static/videos/1.mp4'),
            },
        }
    },
    created() {
        if (document.body.clientWidth > 480) {
            this.isMobile = false
        }
    },

    computed: {
        videoSrc() {
            if (this.isMobile) {
                return require('@/static/videos/mobile_1.mp4')
            } else {
                return require('@/static/videos/1.mp4')
            }
        },
    },

    mounted() {
        const videoDOM = document.querySelector('.video__player')
        videoDOM.addEventListener('loadeddata', () => {
            videoDOM.play()
        })
        const videoScene = this.$scrollmagic
            .scene({
                triggerElement: '.video__player',
                offset: 0,
                triggerHook: 0.2,
                duration: '100%',
            })
            .on('enter', () => {
                const videoDOM = document.querySelector('.video__player')
                videoDOM.play()
            })

            .on('leave', () => {
                const videoDOM = document.querySelector('.video__player')
                videoDOM.pause()
            })

            .on('progress', (e) => {})
        // .addIndicators({ name: 'workflowScene' })
        this.$scrollmagic.addScene([videoScene])
        this.videoScene = videoScene
    },
    destroyed() {
        this.$scrollmagic.removeScene([this.videoScene])
    },
}
</script>

<style lang="scss" scoped>
.video {
    background: black;
    height: 100vh;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>
