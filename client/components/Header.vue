<template>
    <div class="Header">
        <!-- <HeaderTop />
        <div class="Header__title">
            <img :src="require('@/static/images/title.png')" alt="" />
        </div> -->

        <div class="Header__logo">
            <AnimateLogoTime />
        </div>
        <div class="Header__content">
            <div class="Header__content_title">
                <img :src="require('@/static/images/title.png')" alt="" />
            </div>

            <div class="Header__content_devide_line"></div>
            <div class="Header__content_nav">
                <HeaderNav />
            </div>
        </div>
    </div>
</template>

<script>
import AnimateLogoTime from './AnimateLogoTime'

import HeaderTop from './HeaderTop'
import HeaderNav from './HeaderNav'
export default {
    components: {
        AnimateLogoTime,
        HeaderTop,
        HeaderNav,
    },
}
</script>

<style lang="scss" scoped>
.Header {
    width: 100%;
    position: relative;
    background: $mainGreen;

    padding: 34px 16px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    // margin-bottom: 16px;

    @include atSmall {
        flex-direction: row;
        padding: 64px 36px;
    }
    // @include atSmall {
    //     flex-direction: row;
    //     padding: 64px 36px;
    // }

    &__content {
        position: relative;
        height: 43px;

        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        @include atSmall {
            height: 73px;
            justify-content: space-between;
        }

        &_title {
            width: 70%;
            // height: 30px;

            img {
                width: 100%;
                box-sizing: border-box;
            }

            @include atMedium {
                width: 80%;
            }

            @include atLarge {
                width: 560px;
            }
        }

        &_devide_line {
            height: 8px;
            background: $mainWhite;
            width: 100%;

            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            display: none;
            @include atSmall {
                display: block;
            }
        }
    }
}
</style>
