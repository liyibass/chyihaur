<template>
    <div class="Header">
        <HeaderRuler />
        <div class="Header__title">
            <img :src="require('@/static/images/title.png')" alt="" />
        </div>
        <HeaderNav />
    </div>
</template>

<script>
import HeaderRuler from './HeaderRuler'
import HeaderNav from './HeaderNav'
export default {
    components: {
        HeaderRuler,
        HeaderNav,
    },
}
</script>

<style lang="scss" scoped>
.Header {
    position: relative;
    padding: 50px 54px 0;
    height: 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__title {
        width: 560px;
        height: 30px;

        img {
            width: 100%;
        }
    }
}
</style>
