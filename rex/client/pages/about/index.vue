<template>
    <div class="AboutPage">
        <NavBar />
        <Header />
        <div class="AboutPage__color_bar" />

        <UiEmployeeContainer :employeeList="newEmployeeList" />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
import employeeMixin from '../../mixins/employeeMixin'

export default {
    components: {
        NavBar,
        Header,
        UiEmployeeContainer,
    },
    mixins: [employeeMixin],
}
</script>

<style lang="scss" scoped>
.AboutPage {
    background: $mainGreen;

    &__color_bar {
        background: $mainBlue;
        height: 35px;
        margin-bottom: 70px;
    }
}
</style>
