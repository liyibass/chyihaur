<template>
    <div class="header-content ">
        <div class="header-content__title">
            <img :src="require('@/static/images/title.png')" alt="title" />
        </div>

        <NavBar />

        <div class="header-content__devide_line" />
        <div class="header-content__top_right_line" />

        <HeaderNav />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import HeaderNav from './HeaderNav'

export default {
    components: {
        NavBar,
        HeaderNav,
    },
    props: {
        hideBurger: {
            type: Boolean,
            isRequired: true,
            default: () => {
                return true
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.header-content {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @include atMedium {
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
    }

    &__title {
        width: 63%;
        height: 18px;
        @include atSmall {
            max-width: none;
            width: 300px;
            margin-right: 10px;
        }

        @include atMedium {
            margin-bottom: 4px;
            width: 500px;
            height: 20px;
        }

        @include atLarge {
            width: 540px;
            height: 22px;
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

        @include atMedium {
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 3px;
            width: calc(100% - 70px);

            background: $mainWhite;
        }
    }

    &__top_right_line {
        display: none;

        @include atMedium {
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
