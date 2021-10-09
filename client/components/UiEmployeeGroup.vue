<template>
    <div class="UiEmployeeGroup">
        <div class="UiEmployeeGroup__title">
            {{ employeeGroup.name }}
        </div>

        <div class="UiEmployeeGroup__container">
            <UiEmployeeCard v-for="employee in employeeGroup.employee" :key="employee.id" :employee="employee" />
        </div>
    </div>
</template>

<script>
import UiEmployeeCard from '@/components/UiEmployeeCard'

export default {
    components: {
        UiEmployeeCard,
    },
    props: {
        employeeGroup: {
            type: Object,
            isRequired: true,
            default: () => {
                return {
                    name: '',
                    engName: '',
                    employee: [],
                }
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.UiEmployeeGroup {
    width: 100%;
    max-width: 800px;

    margin-bottom: 50px;

    &__title {
        font-size: 30px;
        color: $mainWhite;
        font-family: Broadwell;
        text-align: center;
        margin-bottom: 30px;
    }

    &__container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
}
</style>
