<template>
    <div>
        <Header />
        <!-- <NavBar /> -->

        <Contact />
    </div>
</template>

<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'

import Contact from '@/components/Contact'
export default {
    components: {
        Header,
        Contact,
        NavBar,
    },
}
</script>

<style lang="scss" scoped></style>
