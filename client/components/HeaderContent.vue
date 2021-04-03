<template>
    <div class="header-content ">
        <div class="header-content__title">
            <img :src="require('@/static/images/title.png')" alt="title" />
        </div>

        <div class="header-content__devide_line" />
        <div class="header-content__top_right_line" />

        <HeaderNav />
    </div>
</template>

<script>
import HeaderNav from './HeaderNav'

export default {
    components: {
        HeaderNav,
    },
}
</script>

<style lang="scss" scoped>
.header-content {
    position: relative;
    height: 41px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    @include atSmall {
        justify-content: space-between;
    }

    &__title {
        width: 70%;
        height: 18px;
        max-width: 200px;
        padding-right: 10px;

        @include atSmall {
            max-width: none;
            width: 300px;
        }

        @include atLarge {
            width: 394px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right;
            box-sizing: border-box;
        }
    }

    &__devide_line {
        display: none;

        @include atSmall {
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 4px;
            width: 100%;
            background: $mainWhite;
        }
    }

    &__top_right_line {
        display: none;

        @include atSmall {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            height: 50%;
            width: 4px;
            background: $mainWhite;
        }
    }
}
</style>
