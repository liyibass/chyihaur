<template>
    <div class="article">
        <ArticleHandler
            v-for="block in apiData"
            :key="block.id"
            :block="block"
        />
    </div>
</template>

<script>
import ArticleHandler from './ArticleHandler.vue'
export default {
    components: {
        ArticleHandler,
    },
    props: {
        apiData: {
            type: Array,
            isRequired: true,
            default: () => [],
        },
    },
}
</script>

<style lang="scss">
.article {
    width: 100%;
}
</style>
