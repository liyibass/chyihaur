<template>
    <div class="header-nav">
        <div class="header-nav__wrapper">
            <HeaderNavItem
                v-for="(item, index) in navList"
                :key="index"
                :item="item"
                @click.native="chooseChapter(item.link)"
            />
        </div>
    </div>
</template>

<script>
import navMixin from '../mixins/navMixin'
import HeaderNavItem from './HeaderNavItem'
export default {
    mixins: [navMixin],
    components: {
        HeaderNavItem,
    },
}
</script>

<style lang="scss" scoped>
.header-nav {
    display: none;

    @include atMedium {
        display: block;
        width: 500px;
    }

    &__wrapper {
        width: 100%;
        position: absolute;
        top: 120%;
        right: 0;

        // padding: 16px 0 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        @include atSmall {
            flex-direction: row;
            flex-wrap: wrap;
            padding-top: 10px;
        }

        @include atMedium {
            position: relative;
            top: 0;
            right: 0;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        @include atLarge {
        }
    }
}
</style>
