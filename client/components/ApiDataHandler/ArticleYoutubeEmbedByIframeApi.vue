<template>
    <div class="YoutubeVideo">
        <iframe
            width="640"
            height="360"
            :src="
                `https://www.youtube.com/embed/${videoId}?autoplay=0&loop=0&controls=1&rel=1`
            "
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    props: {
        videoId: {
            type: String,
            required: true,
        },
        enableAutoplay: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="scss" scoped>
.YoutubeVideo {
    z-index: 20;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
