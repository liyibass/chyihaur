<template>
    <div class="Main">
        <Header />
    </div>
</template>

<script>
import Header from './Header'
export default {
    component: {
        Header,
    },
}
</script>

<style lang="scss" scoped>
.Main {
    background: $mainGreen;
    height: 100vh;
    width: 100%;
    @include atSmall {
    }
}
</style>
