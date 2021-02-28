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
    width: 100%;
    position: relative;
    padding: 50px 54px 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__title {
        width: 100%;
        // height: 30px;

        img {
            width: 100%;
        }
    }

    @include atSmall {
        &__title {
            width: 60%;
        }
    }
    @include atLarge {
        &__title {
            width: 560px;
        }
    }
}
</style>
