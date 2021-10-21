<template>
    <div class="AboutPage">
        <div class="AboutPage__color_bar" />

        <UiEmployeeContainer :allPositions="allPositions" />
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
        allPositions: {
            query: fetchAllPositions,
            update: (data) => {
                const allPositions = data?.allPositions

                return allPositions
            },
        },
    },
    data() {
        return {
            allPositions: [],
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
