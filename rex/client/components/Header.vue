<template>
    <div class="Header">
        <HeaderTop />
        <div class="Header__title">
            <img :src="require('@/static/images/title.png')" alt="" />
        </div>
    </div>
</template>

<script>
import HeaderTop from './HeaderTop'
import HeaderNav from './HeaderNav'
export default {
    components: {
        HeaderTop,
        HeaderNav,
    },
}
</script>

<style lang="scss" scoped>
.Header {
    width: 100%;
    position: relative;
    padding: 30px 20px 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-bottom: 16px;

    @include atSmall {
        padding: 50px 54px 0;
    }

    &__title {
        width: 50%;
        // height: 30px;

        img {
            width: 100%;
            box-sizing: border-box;
        }

        @include atSmall {
            width: 60%;
        }

        @include atLarge {
            width: 560px;
        }
    }
}
</style>
