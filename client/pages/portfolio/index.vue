<template>
    <div class="PortfolioPage">
        <div class="color_bar" />

        <!-- <div class="PortfolioPage__title">
            <img :src="require('@/static/images/portfolio/title.png')" alt="" srcset="" />
        </div> -->
        <UiMainTitle title="作品範例" engTitle="PORTFOLIO" />

        <UiPortfolioContainer :portfolioList="portfolioList" />

        <!-- <div class="PortfolioPage__loadmore" @click="fetchPortfolioList">Load More</div> -->
        <div class="loadmore-anchor" />
    </div>
</template>

<script>
import UiPortfolioContainer from '@/components/UiPortfolioContainer'
import portfolioMixin from '../../mixins/portfolioMixin'
import { fetchPortfolios, fetchPortfolioMetaCount } from '~/apollo/queries/portfolio.gql'
import UiMainTitle from '@/components/UiMainTitle'

const PAGE_SIZE = 12

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
            portfolioListMetaCount: 0,
            portfolioListScene: {},
        }
    },
    apollo: {
        portfolioList: {
            query: fetchPortfolios,
            variables() {
                return {
                    first: PAGE_SIZE,
                    skip: 0,
                }
            },
            update: (data) => {
                return data?.allPortfolios || []
            },
        },
        portfolioListMetaCount: {
            query: fetchPortfolioMetaCount,

            update: (data) => {
                return data?._allPortfoliosMeta?.count || 0
            },
        },
    },
    methods: {
        async fetchPortfolioList() {
            if (this.portfolioList.length >= this.portfolioListMetaCount) return

            await this.$apollo.queries.portfolioList.fetchMore({
                variables: {
                    first: PAGE_SIZE,
                    skip: this.portfolioList.length,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    return {
                        allPortfolios: [...previousResult?.allPortfolios, ...fetchMoreResult?.allPortfolios],
                    }
                },
            })
        },
    },
    mounted() {
        this.portfolioListScene = this.$scrollmagic
            .scene({
                triggerElement: '.loadmore-anchor',
                offset: 1,
                triggerHook: 0.9,
                duration: 100,
            })
            // .addIndicators({ name: 'portfolioListScene' })
            .on('enter', () => {
                this.fetchPortfolioList()
            })
        this.$scrollmagic.addScene([this.portfolioListScene])
    },
    destroyed() {
        this.$scrollmagic.removeScene([this.portfolioListScene])
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

    &__loadmore {
        margin: auto;
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
