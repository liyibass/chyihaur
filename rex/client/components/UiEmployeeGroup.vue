<template>
    <div class="UiEmployeeGroup">
        <div class="UiEmployeeGroup__title">
            {{ employeeGroup.title }}
        </div>

        <div class="UiEmployeeGroup__container">
            <UiEmployeeCard v-for="employee in employeeGroup.child" :key="employee.id" :employee="employee" />
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
            defaultValue: {
                id: 0,
                position: 'OPERATION',
                name: 'AA',
                snapshotUrl:
                    'https://cdn.neard.com/t/51e479/f/640x0/filters:extract_cover()/https://attachment-storage.neard.com/9cea60fd3cbfd0f5149a785feda81c98.jpg',
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.UiEmployeeGroup {
    width: 100%;
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
