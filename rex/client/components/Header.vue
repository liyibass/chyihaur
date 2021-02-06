<template>
    <div class="Header">
        <HeaderRuler />
        <div class="Header__title">
            <img :src="require('@/static/images/title.png')" alt="" />
        </div>
    </div>
</template>

<script>
import HeaderRuler from './HeaderRuler'
export default {
    components: {
        HeaderRuler,
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
