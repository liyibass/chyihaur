<template>
    <div class="UiPortfolioCard" ref="card" @click="goToPortfolioPage" :style="{ flex: getRandomFlexSize }">
        <img v-lazy="coverPhoto" :alt="portfolio.name" />
        <h1>{{ portfolio.name }}</h1>
    </div>
</template>

<script>
import 'intersection-observer'
import scrollama from 'scrollama'
export default {
    props: {
        portfolio: {
            type: Object,
            isRequired: true,
            defaultValue: {
                id: '60600f786c53617e9b95d5d1',
                name: 'portfolio01',
                coverPhoto: {
                    urlOriginal: '',
                },
                photos: [
                    {
                        urlOriginal: '',
                    },
                    {
                        urlOriginal: '',
                    },
                    {
                        urlOriginal: '',
                    },
                ],
            },
        },
    },
    computed: {
        coverPhoto() {
            return this.portfolio?.coverPhoto?.urlOriginal || require('@/static/images/logo_small.png')
        },
    },

    methods: {
        goToPortfolioPage() {
            this.$router.push(`/portfolio/${this.portfolio.id}`)
        },
        getRandomFlexSize() {
            return Math.floor(Math.random() * 3) + 1
        },
    },

    mounted() {
        const selfDOM = this.$refs.card
        // -------------------------------------------------------
        // instantiate the scrollama
        const portfolioCardScroller = scrollama()

        // setup the instance, pass callback functions
        portfolioCardScroller
            .setup({
                step: selfDOM,
                offset: 0.5,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                response.element.classList.add('UiPortfolioCard_activate')
            })
            .onStepExit((response) => {
                // { element, index, direction }
                response.element.classList.remove('UiPortfolioCard_activate')
            })

        // setup resize event
        window.addEventListener('resize', portfolioCardScroller.resize)
    },
}
</script>

<style lang="scss" scoped>
.UiPortfolioCard {
    // flex: 1;
    position: relative;
    width: calc(100% - 10px);
    padding-top: 100%;
    margin: 5px;
    // max-height: 400px;
    // width: 100%;

    background: rgba(0, 0, 0, 1);
    overflow: hidden;
    @include atSmall {
        width: calc((100% - 30px) / 2);
        padding-top: calc((100% - 30px) / 2);
    }
    @include atMedium {
        width: calc((100% - 30px) / 3);
        padding-top: calc((100% - 30px) / 3);
    }
    img {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        transition: all 0.5s linear;
    }

    h1 {
        color: white;
        width: fit-content;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all 0.5s linear;
        text-align: center;
        font-family: GenYoGothicTW;
        font-weight: bold;
    }

    &:hover {
        h1 {
            opacity: 1;
        }
        img {
            opacity: 0.8;
            filter: grayscale(0%);
            transform: scale(1.05);
        }
    }

    &_activate {
        h1 {
            opacity: 1;
        }
        img {
            opacity: 0.8;
            filter: grayscale(0%);
            transform: scale(1.05);
        }

        @include atSmall {
            h1 {
                opacity: 0;
            }
            img {
                opacity: 1;
                filter: grayscale(100%);
                transform: scale(1);
            }
        }
    }
}
</style>
