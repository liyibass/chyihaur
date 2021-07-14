<template>
    <div class="default">
        <Header />
        <Nuxt />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
export default {
    components: {
        NavBar,
        Header,
    },
}
</script>

<style lang="scss">
.default {
    margin-top: 42px;
    background: $mainGreen;

    @include atMedium {
        margin-top: 100px;
    }
}
html {
    background: $mainGreen;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
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
