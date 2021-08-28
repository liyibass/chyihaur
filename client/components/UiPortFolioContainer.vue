<template>
    <div class="UiPortfolioContainer">
        <div class="UiPortfolioContainer__wrapper">
            <UiPortfolioCard v-for="portfolio in portfolioList" :key="portfolio.id" :portfolio="portfolio" />
        </div>
    </div>
</template>

<script>
import UiPortfolioCard from '@/components/UiPortfolioCard'

export default {
    props: {
        portfolioList: {
            type: Array,
            isRequired: true,
        },
    },
    component: {
        UiPortfolioCard,
    },
}
</script>

<style lang="scss" scoped>
.UiPortfolioContainer {
    background: $mainGreen;
    width: 100%;
    min-height: 100vh;

    &__wrapper {
        position: relative;
        max-width: 900px;
        margin: auto;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        padding: 20px;

        @include atSmall {
            flex-direction: row;
        }
    }
}
</style>
