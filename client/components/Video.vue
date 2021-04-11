<template>
    <div class="video">
        <video class="video__player" :src="video.url" loop></video>
    </div>
</template>

<script>
export default {
    data() {
        return {
            video: {
                url: require('@/static/videos/0.mp4'),
            },
        }
    },
    mounted() {
        const videoDOM = document.querySelector('.video__player')
        videoDOM.addEventListener('loadeddata', () => {
            console.log(videoDOM)
            videoDOM.play()
        })
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
