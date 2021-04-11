<template>
    <div class="PortfolioPage">
        <div class="color_bar" />

        <UiPortfolioContainer :portfolioList="portfolioList" />
    </div>
</template>

<script>
import UiPortfolioContainer from '@/components/UiPortfolioContainer'
import portfolioMixin from '../../mixins/portfolioMixin'

export default {
    components: {
        UiPortfolioContainer,
    },
    mixins: [portfolioMixin],
    data() {
        return {}
    },

    mounted() {},
}
</script>

<style lang="scss" scoped>
.PortfolioPage {
    background: $mainGreen;
}
.color_bar {
    background: $mainBlue;
    height: 35px;
    margin-bottom: 70px;
}
</style>
