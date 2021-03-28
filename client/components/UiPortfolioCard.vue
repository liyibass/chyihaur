<template>
    <div class="UiPortfolioCard" @click="goToPortfolioPage" :style="{ flex: getRandomFlexSize }">
        <img :src="portfolio.coverPhoto.urlOriginal" :alt="portfolio.name" />
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
    flex: 1;
    min-width: 33%;
    max-height: 400px;

    background: black;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        transition: all 0.5s linear;
    }

    &:hover {
        img {
            opacity: 1;
            transform: scale(1.05);
        }
    }
}
</style>
