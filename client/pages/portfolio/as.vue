<template>
    <div class="AboutEmployeePage">
        <div class="AboutEmployeePage__color_bar" />
        <nuxt-child :portfolio="currentPortfolio" />
    </div>
</template>

<script>
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
import portfolioMixin from '../../mixins/portfolioMixin'

export default {
    components: {
        UiEmployeeContainer,
    },

    mixins: [portfolioMixin],
    data() {
        return {
            currentId: this.$route.params.id,
            currentPortfolio: {},
        }
    },
    methods: {
        getCurrentPortfolio() {
            return this.portfolioList.filter((portfolio) => {
                return portfolio.id === this.currentId
            })
        },
    },

    created() {
        this.currentPortfolio = this.getCurrentPortfolio()[0]
    },
}
</script>

<style lang="scss" scoped>
.AboutEmployeePage {
    min-height: 100vh;
    background: $mainGreen;

    &__color_bar {
        background: $mainBlue;
        height: 35px;
    }
}
</style>
