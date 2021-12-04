<template>
    <div class="AboutPage">
        <div class="AboutPage__color_bar" />

        <UiEmployeeContainer :allEmployees="allEmployees" />
    </div>
</template>

<script>
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
import employeeMixin from '../../mixins/employeeMixin'
import { fetchEmployees } from '~/apollo/queries/employee.gql'
import { fetchAllPositions } from '~/apollo/queries/position.gql'

export default {
    components: {
        UiEmployeeContainer,
    },
    mixins: [employeeMixin],
    apollo: {
        allEmployees: {
            query: fetchAllPositions,
            update: (data) => {
                const allPositions = data?.allPositions

                let employees = []
                allPositions.forEach((position) => {
                    employees = employees.concat(position.employee)
                })
                console.log(employees)
                return employees
            },
        },
    },
    data() {
        return {
            allEmployees: [],
        }
    },
}
</script>

<style lang="scss" scoped>
.AboutPage {
    background: $mainGreen;
    min-height: 90vh;

    &__color_bar {
        background: $mainBlue;
        height: 35px;
        margin-bottom: 70px;
    }
}
</style>
