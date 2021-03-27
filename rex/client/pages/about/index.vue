<template>
    <div class="AboutPage">
        <NavBar />
        <Main />
        <UiEmployeeContainer :employeeList="employeeList" />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Main from '@/components/Main'
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
export default {
    components: {
        NavBar,
        Main,
        UiEmployeeContainer,
    },
    data() {
        return {
            employeeList: [
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
            ],
            newEmployeeList: [
                {
                    title: 'OPERATION',
                    child: [
                        {
                            id: 0,
                            position: 'OPERATION',
                            title: 'AA',
                        },
                        {
                            id: 1,
                            position: 'OPERATION',
                            title: 'BB',
                        },
                    ],
                },
                {
                    title: 'DESIGN',
                    child: [
                        {
                            id: 2,
                            position: 'DESIGN',
                            title: 'CC',
                        },
                        {
                            id: 3,
                            position: 'DESIGN',
                            title: 'DD',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.AboutPage {
}
</style>
