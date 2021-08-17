<template>
    <div class="openwarehouse-page">
        <!-- <YoutubeEmbedByIframeApi :videoId="youtubeId || ''" /> -->
    </div>
</template>

<script>
import YoutubeEmbedByIframeApi from '@/components/YoutubeEmbedByIframeApi.vue'
import { fetchYoutube } from '~/apollo/queries/warehouse.gql'
export default {
    component: {
        YoutubeEmbedByIframeApi,
    },
    apollo: {
        description: {
            query: fetchYoutube,
            update: (data) => {
                console.log(data)
                return ''
                // const urlArray = data.allWareshouses[0].url.split('?v=')
                // return urlArray[urlArray.length - 1] || ''
            },
        },
    },
    mounted() {
        // console.log(description)
    },
}
</script>

<style lang="scss" scoped>
.openwarehouse-page {
    padding: 100px;
    position: relative;
}
</style>
