<template>
    <div class="NavBar">
        <transition name="fast-fade">
            <div class="NavBar__icon" v-if="!navBarIsOpen" @click="navBarToggler">
                <img :src="require('@/static/images/navLogo.svg')" alt="" />
            </div>
        </transition>

        <div class="NavBar__container" :style="getNavContainerCSS" @click="navBarToggler">
            <MainTitle
                v-for="(item, index) in navList"
                :key="index"
                :title="item.key"
                :link="item.link"
                @click.native="chooseChapter(item.link)"
            />
        </div>
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import navMixin from '@/mixins/navMixin'

export default {
    mixins: [navMixin],
    components: { MainTitle },
    data() {
        return {
            navBarIsOpen: false,
        }
    },

    computed: {
        getNavContainerCSS() {
            if (this.navBarIsOpen) {
                return { transform: 'translateX(0%)' }
            } else {
                return { transform: 'translateX(100%)' }
            }
        },
    },
    methods: {
        navBarToggler() {
            this.navBarIsOpen = !this.navBarIsOpen
        },
    },
}
</script>

<style lang="scss" scoped>
.NavBar {
    z-index: 666;
    width: 50px;
    height: 50px;
    // overflow: hidden;
    transition: top 0.5s ease;
    position: absolute;
    right: 0;
    top: -17px;

    @include atMedium {
        display: none;
    }

    &__icon {
        z-index: 1;

        width: 50px;
        height: 50px;

        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
        }
    }

    &__container {
        z-index: 0;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: $navBackground;
        transform: translateX(100%);
        transition: all 0.2s linear;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        padding: 28px 10px;
    }
}
</style>
