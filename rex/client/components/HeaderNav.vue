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
    methods: {
        chooseChapter(newId) {
            const myEl = document.getElementById(`${newId}`)

            this.$smoothScroll({
                scrollTo: myEl,
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.HeaderNav {
    margin-top: 18.804vh;
    margin-right: 76px;
    margin-bottom: 50px;
    &__container {
        width: 640px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
