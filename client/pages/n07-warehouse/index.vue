<template>
    <div class="warehouse-page">
        <div class="warehouse-page__content">
            <ApiDataHandler :apiData="description" />
        </div>
    </div>
</template>

<script>
import { fetchWarehouse } from '~/apollo/queries/warehouse.gql'
import ApiDataHandler from '@/components/ApiDataHandler'
export default {
    component: {
        ApiDataHandler,
    },
    apollo: {
        warehouse: {
            query: fetchWarehouse,
            update: (data) => {
                const description = data.allWarehouses[0]
                return description
            },
        },
    },
    computed: {
        coverPhoto() {
            return this.portfolio?.coverPhoto?.urlOriginal || require('@/static/images/logo_small.png')
        },
        description() {
            const description = this.warehouse?.descriptionApiData
            return description ? JSON.parse(description) : []
        },
    },
    mounted() {
        // console.log(description)
    },
}
</script>

<style lang="scss" scoped>
.warehouse-page {
    color: $mainWhite;
    text-align: center;
    padding: 100px;
    position: relative;
    background: $mainGreen;
}
</style>
