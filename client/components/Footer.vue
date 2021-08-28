<template>
    <div class="Footer">
        <div class="Footer__container">
            <div class="Footer__container_quote" />

            <div class="Footer__nav">
                <span v-for="nav in navs" :key="nav.id" @click="navHandler(nav.url)">{{ nav.title }}</span>
            </div>

            <div class="Footer__link">
                <a class="Footer__link_icon" v-for="link in links" :key="link.id" :href="link.url" target="_blank">
                    <img :src="link.logo" alt="" />
                </a>
            </div>
            <div class="Footer__info">
                <div class="Footer__info_wrapper">
                    <div class="Footer__info_card">
                        <h6>Call us</h6>
                        <p>02-2630-8111</p>
                    </div>
                    <div class="Footer__info_card">
                        <h6>Line id</h6>
                        <p>0917226506</p>
                    </div>

                    <div class="Footer__info_card">
                        <h6>Fax us</h6>
                        <p>02-2630-5777</p>
                    </div>
                    <div class="Footer__info_card">
                        <h6>Email us</h6>
                        <p>chyi.haur@msa.hinet.net</p>
                    </div>

                    <div class="Footer__info_card">
                        <h6>Visit us</h6>
                        <p>台北市內湖區</p>
                        <p>康寧路三段189巷75號1F</p>
                    </div>
                </div>
            </div>
            <div class="Footer__logo">
                <img :src="require('@/static/images/business-card.png')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
                    url: 'https://www.google.com/',
                },
                {
                    id: 1,
                    logo: require('@/static/images/footer/ig.svg'),
                    url: 'https://www.google.com/',
                },
                {
                    id: 2,
                    logo: require('@/static/images/footer/yt.svg'),
                    url: 'https://www.google.com/',
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
        padding: 30px 30px;
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
    }

    &__nav {
        color: $mainWhite;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        line-height: 36px;
        font-weight: bold;
        margin-bottom: 60px;
        cursor: pointer;

        @include atMedium {
            margin-bottom: 0;
            align-items: flex-start;
        }
    }

    &__link {
        width: 135px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 70px;

        @include atMedium {
            margin: 0 40px;
            transform: translateY(30px);
        }

        @include atSuperLarge {
            width: 155px;
        }

        &_icon {
            width: 36px;
            height: 36px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    &__info {
        margin-bottom: 70px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        @include atMedium {
            margin-bottom: 0;
        }

        &_wrapper {
            display: flex;
            flex-direction: column;
            max-width: 834px;

            @include atLarge {
                height: 180px;
                flex-wrap: wrap;
            }

            @include atSuperLarge {
                height: 116px;
            }
        }

        &_card {
            text-align: center;
            font-size: 18px;
            line-height: 21.6px;
            margin-bottom: 15px;
            @include atLarge {
                text-align: left;
                margin: 8px;
            }
            color: $mainWhite;
            h6 {
                font-size: 18px;
                line-height: 21.6px;
                font-weight: bold;
            }
        }
    }

    &__logo {
        width: 100%;
        max-width: 300px;
        @include atMedium {
            max-width: 200px;
            margin-right: 20px;
        }

        @include atLarge {
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
