<template>
    <div class="Footer">
        <div class="Footer__container">
            <div class="Footer__container_quote" />

            <div class="Footer__container_top">
                <div class="Footer__nav">
                    <span v-for="nav in navs" :key="nav.id" @click="navHandler(nav.url)">{{ nav.title }}</span>
                </div>

                <FooterLink class="Footer__link_mobile" />
            </div>

            <div class="Footer__container_bottom">
                <FooterInfo />

                <!-- <FooterLink class="Footer__link_desktop" /> -->
            </div>

            <div class="Footer__logo">
                <img :src="require('@/static/images/business-card.png')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import FooterLink from './FooterLink.vue'
import FooterInfo from './FooterInfo.vue'
export default {
    components: {
        FooterLink,
        FooterInfo,
    },
    data() {
        return {
            navs: [
                { id: 0, title: 'About Us', url: 'about' },
                { id: 1, title: 'Portfolio', url: 'portfolio' },
                { id: 2, title: 'Warehouse 7', url: 'n07-warehouse' },
            ],
            links: [
                {
                    id: 0,
                    logo: require('@/static/images/footer/fb.svg'),
                    url: 'https://www.facebook.com/Chyi.haur.design',
                },
                {
                    id: 1,
                    logo: require('@/static/images/footer/ig.svg'),
                    url: 'https://www.instagram.com/chyi.haur/',
                },
                {
                    id: 2,
                    logo: require('@/static/images/footer/yt.svg'),
                    url: 'https://youtube.com/channel/UCK1VIkULDRfYzgHLTSIH0WQ',
                },
            ],
        }
    },
    methods: {
        navHandler(url) {
            this.$router.push(url)
        },
    },
}
</script>

<style lang="scss" scoped>
.Footer {
    background: rgb(107, 107, 107);
    padding: 30px 30px;

    &__container {
        padding: 0px 30px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        @include atMedium {
            flex-direction: row-reverse;
            justify-content: space-between;
            padding: 30px 10px;
        }

        @include atLarge {
            padding: 30px 30px;
        }

        @include atSuperLarge {
            padding: 30px 60px 30px 30px;
        }
        @include atUltraLarge {
            padding: 30px 60px;
        }

        &_quote {
            position: absolute;
            width: 44px;
            height: 44px;
            top: 0px;
            right: 0px;
            border-top: 2px solid $mainWhite;
            border-right: 2px solid $mainWhite;
        }

        &_top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding-bottom: 30px;
            margin-bottom: 30px;
            border-bottom: 1px $mainWhite solid;
            @include atMedium {
                max-width: 230px;
                flex-direction: column;
                border: none;
            }
            @include atLarge {
                max-width: 342px;
                flex-direction: row-reverse;

                margin-bottom: 0;
                padding: 0;
            }
        }

        &_bottom {
            width: 100%;

            // height: 158px;
            // display: flex;
            // flex-direction: column;
            // flex-wrap: wrap;

            // & > div {
            //     width: 50%;
            // }
        }
    }

    &__nav {
        color: $mainWhite;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 22px;
        line-height: 36px;
        font-weight: bold;
        margin-bottom: 0;
        // margin-bottom: 60px;
        cursor: pointer;

        @include atMedium {
            display: flex;
            margin-bottom: 0;
            align-items: flex-start;
            font-size: 18px;
        }

        @include atLarge {
            font-size: 18px;
        }
    }

    &__logo {
        display: none;

        @include atLarge {
            display: block;
            max-width: 200px;
            margin-right: 60px;
        }

        @include atUltraLarge {
            max-width: 300px;
            margin-right: 90px;
        }

        img {
            width: 100%;
        }
    }
}
</style>
