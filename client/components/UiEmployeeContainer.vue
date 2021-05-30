<template>
    <div class="UiEmployeeContainer">
            <UiEmployeeGroup  :employeeGroup="employeeGroupObject['OPERATION']" />
            <UiEmployeeGroup  :employeeGroup="employeeGroupObject['DESIGN']" />
            <UiEmployeeGroup  :employeeGroup="employeeGroupObject['TECHNICIAN']" />
            <UiEmployeeGroup  :employeeGroup="employeeGroupObject['MARKETING']" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import UiEmployeeGroup from '@/components/UiEmployeeGroup'

export default {
    props: {
        employeeGroupObject: {
            type: Object,
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
