<template>
    <div class="default">
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    components: {
        NavBar,
        Header,
        Footer,
    },
}
</script>

<style lang="scss">
.default {
    position: relative;
    padding-top: 42px;
    min-height: calc(100vh);
    background: $mainGreen;

    @include atMedium {
        padding-top: 100px;
    }

    .Footer {
        z-index: 100;
        position: relative;
    }
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
