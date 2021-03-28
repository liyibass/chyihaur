<template>
    <div class="HeaderNav">
        <div class="HeaderNav__container">
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
.HeaderNav {
    display: none;
    @include atSmall {
        display: block;
    }

    @include atMedium {
    }

    &__container {
        width: 90vw;
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
        }

        @include atMedium {
            position: relative;
            top: 0;
            right: 0;
            width: 590px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        @include atLarge {
            width: 640px;
        }
    }
}
</style>
