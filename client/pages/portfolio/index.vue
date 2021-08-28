<template>
    <div class="PortfolioPage">
        <div class="color_bar" />

        <div class="PortfolioPage__title">
            <img :src="require('@/static/images/portfolio/title.png')" alt="" srcset="" />
        </div>

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
                console.log(data)
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

    &__title {
        width: 100%;
        padding: 20px;
        img {
            width: 100%;
        }
    }
}
.color_bar {
    background: $mainBlue;
    height: 35px;
}
.logo-bar {
    margin-bottom: 70px;
}
</style>
