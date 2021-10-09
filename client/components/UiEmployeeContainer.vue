<template>
    <div class="UiEmployeeContainer">
        <UiEmployeeGroup
            v-for="employeeGroup in allPositions"
            :key="employeeGroup.name"
            :employeeGroup="employeeGroup"
        />
    </div>
</template>

<script>
import _ from 'lodash'
import UiEmployeeGroup from '@/components/UiEmployeeGroup'

export default {
    props: {
        allPositions: {
            type: Array,
            isRequired: true,
        },
    },
    components: {
        UiEmployeeGroup,
    },
}
</script>

<style lang="scss" scoped>
.UiEmployeeContainer {
    background: $mainGreen;

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
