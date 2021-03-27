<template>
    <div class="UiEmployeeContainer">
        <!-- <UiEmployeeCard vfor/> -->
        <!-- <h1 v-for="(position, index) in positionList" :key="index">{{ position }}</h1> -->
    </div>
</template>

<script>
import UiEmployeeCard from '@/components/UiEmployeeCard'
import _ from 'lodash'
const employeeList = [
    {
        id: 0,
        position: 'OPERATION',
        title: 'AA',
    },
    {
        id: 1,
        position: 'DESIGN',
        title: 'BB',
    },
    {
        id: 2,
        position: 'DESIGN',
        title: 'CC',
    },
    {
        id: 3,
        position: 'OPERATION',
        title: 'DD',
    },
]

export default {
    // props: {
    //     employeeList: {
    //         type: Array,
    //         isRequired: true,
    //         defaultValue: [],
    //     },
    // },
    components: {
        UiEmployeeCard,
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
    mounted() {
        this.positionList()
    },
}
</script>

<style lang="scss" scoped>
.UiEmployeeContainer {
}
</style>
