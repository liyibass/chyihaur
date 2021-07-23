<template>
    <div class="openwarehouse-page">
        <YoutubeEmbedByIframeApi :videoId="videoId" />
    </div>
</template>

<script>
import YoutubeEmbedByIframeApi from '@/components/YoutubeEmbedByIframeApi.vue'
export default {
    component: {
        YoutubeEmbedByIframeApi,
    },
    data() {
        return {
            videoId: 'dVHdUakiEo4',
        }
    },
}
</script>

<style lang="scss" scoped>
.openwarehouse-page {
    padding: 100px;
    position: relative;
}
</style>
