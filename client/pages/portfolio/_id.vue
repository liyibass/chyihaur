<template>
    <div class="AboutEmployeePage">
        <NavBar />
        <Header />
        <div class="AboutEmployeePage__color_bar" />
        <nuxt-child :employee="currentEmployee" />
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
    data() {
        return {
            currentId: parseInt(this.$route.params.id),
            currentEmployee: {},
        }
    },
    methods: {
        getCurrentEmployee() {
            return this.employeeList.filter((employee) => {
                return employee.id === this.currentId
            })
        },
    },

    mounted() {
        this.currentEmployee = this.getCurrentEmployee()[0]
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
