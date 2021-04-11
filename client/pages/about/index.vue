<template>
    <div class="AboutPage">
        <div class="AboutPage__color_bar" />

        <UiEmployeeContainer :employeeList="newEmployeeList" />
    </div>
</template>

<script>
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
import employeeMixin from '../../mixins/employeeMixin'

export default {
    components: {
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
