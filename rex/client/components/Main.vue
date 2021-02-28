<template>
    <div class="Main">
        <Header />
        <HeaderNav />
    </div>
</template>

<script>
import Header from './Header'
import HeaderNav from './HeaderNav'

export default {
    component: {
        Header,
        HeaderNav,
    },
}
</script>

<style lang="scss" scoped>
.Main {
    background: $mainGreen;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @include atSmall {
        align-items: flex-end;
    }
}
</style>
