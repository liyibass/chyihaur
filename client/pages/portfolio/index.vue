<template>
    <div class="PortfolioPage">
        <div class="color_bar" />

        <UiPortfolioContainer :portfolioList="portfolioList" />
    </div>
</template>

<script>
import UiPortfolioContainer from '@/components/UiPortfolioContainer'
import portfolioMixin from '../../mixins/portfolioMixin'
import { fetchPortfolios } from '~/apollo/queries/portfolio.gql'
export default {
    components: {
        UiPortfolioContainer,
    },
    mixins: [portfolioMixin],
    data() {
        return {
            isLoading: false,
            portfolioList: [],
        }
    },
    apollo: {
        portfolioList: {
            query: fetchPortfolios,
            variables() {
                return {
                    first: 10,
                    skip: 0,
                }
            },
            update: (data) => {
                return data?.allPortfolios || []
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.PortfolioPage {
    width: 100%;
    background: $mainGreen;
}
.color_bar {
    background: $mainBlue;
    height: 35px;
    margin-bottom: 70px;
}
</style>
