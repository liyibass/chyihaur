<template>
    <div class="PortfolioPage">
        <div class="color_bar" />

        <!-- <div class="PortfolioPage__title">
            <img :src="require('@/static/images/portfolio/title.png')" alt="" srcset="" />
        </div> -->
        <UiMainTitle title="作品範例" engTitle="PORTFOLIO" />

        <UiPortfolioContainer :portfolioList="portfolioList" />
    </div>
</template>

<script>
import UiPortfolioContainer from '@/components/UiPortfolioContainer'
import portfolioMixin from '../../mixins/portfolioMixin'
import { fetchPortfolios } from '~/apollo/queries/portfolio.gql'
import UiMainTitle from '@/components/UiMainTitle'
export default {
    components: {
        UiPortfolioContainer,
        UiMainTitle,
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
                    first: 100,
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
        max-width: 900px;
        margin: auto;
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
