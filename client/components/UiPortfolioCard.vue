<template>
    <div class="UiPortfolioCard" @click="goToPortfolioPage" :style="{ flex: getRandomFlexSize }">
        <img :src="coverPhoto" :alt="portfolio.name" />
        <h1>{{ portfolio.name }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        portfolio: {
            type: Object,
            isRequired: true,
            defaultValue: {
                id: '60600f786c53617e9b95d5d1',
                name: 'portfolio01',
                coverPhoto: {
                    urlOriginal:
                        'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f056c53617e9b95d5bf.jpg',
                },
                photos: [
                    {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f186c53617e9b95d5c3.jpg',
                    },
                    {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f226c53617e9b95d5c5.jpg',
                    },
                    {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f2b6c53617e9b95d5c7.jpg',
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
}
</script>

<style lang="scss" scoped>
.UiPortfolioCard {
    // flex: 1;
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin: 5px;
    // max-height: 400px;
    // width: 100%;
    @include atSmall {
        width: calc((100% - 30px) / 2);
        padding-top: calc((100% - 30px) / 2);
    }
    @include atMedium {
        width: calc((100% - 30px) / 3);
        padding-top: calc((100% - 30px) / 3);
    }
    background: black;
    overflow: hidden;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
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
            opacity: 0.5;
            transform: scale(1.05);
        }
    }
}
</style>
