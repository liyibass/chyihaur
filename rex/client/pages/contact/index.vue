<template>
    <div>
        <Main />
        <!-- <NavBar /> -->

        <Contact />
    </div>
</template>

<script>
import Main from '@/components/Main'
import NavBar from '@/components/NavBar'

import Contact from '@/components/Contact'
export default {
    components: {
        Main,
        Contact,
        NavBar,
    },
}
</script>

<style lang="scss" scoped></style>
