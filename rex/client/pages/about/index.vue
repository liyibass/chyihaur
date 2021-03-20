<template>
    <div class="AboutPage">
        <NavBar />
        <Main />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Main from '@/components/Main'
export default {
    components: {
        NavBar,
        Main,
    },
    data() {
        return {
            employees: [
                {
                    id: 0,
                    name: 'POP REX',
                    engName: '',
                    position: '總監/新手爸爸',
                    detail: '<p>我要錢<br/>我要錢<br/>我要錢<br/>我要錢<br/></p>',
                    snapshotUrl: '',
                    headerUrl: '',
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
