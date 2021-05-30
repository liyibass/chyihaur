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
    methods: {
        positionList() {
            // // fetch every list child's position value
            // // make them as a new position type array
            // // [OPERATION,DESIGN,TECHNICIAN]
            // let positionTypeList = employeeList.map((employee) => {
            //     return employee.position
            // })
            // positionTypeList = _.uniq(positionTypeList)
            // const positionList = []
            // positionTypeList.forEach((type) => {
            //     const newPosition = {
            //         title: type,
            //         child: this.filterArrayByKey(employeeList, type),
            //     }
            //     positionList.push(newPosition)
            // })
            // console.log(positionTypeList)
            // console.log(positionList)
        },
        filterArrayByKey(array, key) {
            return _.filter(array, (o) => {
                return o.position === key
            })
        },
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
