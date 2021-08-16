<template>
    <div class="AboutPage">
        <div class="AboutPage__color_bar" />

        <UiEmployeeContainer :employeeGroupObject="employeeGroupObject" />
    </div>
</template>

<script>
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
import employeeMixin from '../../mixins/employeeMixin'
import { fetchEmployees } from '~/apollo/queries/employee.gql'

export default {
    components: {
        UiEmployeeContainer,
    },
    mixins: [employeeMixin],
    data() {
        return {
            employeeGroupObject: {},
        }
    },
    apollo: {
        employeeGroupObject: {
            query: fetchEmployees,
            variables() {
                return {
                    first: 10,
                    skip: 0,
                }
            },
            update: (data) => {
                console.log(data)
                const employeeList = data?.allEmployees
                let groupList = {}

                employeeList.forEach((employee) => {
                    const position = employee.position.engName
                    const prevChild = groupList[position]?.child || []

                    const child = [...prevChild, employee]

                    groupList[position] = {
                        title: position,
                        child,
                    }
                })

                return groupList
            },
        },
    },
    watch: {
        employeeGroupObject: function(val) {
            console.log(val)
        },
    },
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
