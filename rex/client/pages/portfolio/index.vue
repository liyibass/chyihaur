<template>
    <div class="PortfolioPage">
        <NavBar />
        <Header />
        <div class="color_bar" />

        <UiPortfolioContainer :employeeList="newEmployeeList" />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import UiPortfolioContainer from '@/components/UiPortfolioContainer'
import employeeMixin from '../../mixins/employeeMixin'

export default {
    components: {
        NavBar,
        Header,
        UiPortfolioContainer,
    },
    mixins: [employeeMixin],
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
