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
    mounted() {
        console.log(this.apiData)
    },
}
</script>

<style lang="scss" scoped>
.article {
    width: 100%;
}
</style>
