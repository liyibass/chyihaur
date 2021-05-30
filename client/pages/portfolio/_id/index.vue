<template>
    <div class="AboutPortfolio">
        <div class="AboutPortfolio__wrapper">
            <div class="AboutPortfolio__snapshot">
                <img :src="portfolio.coverPhoto.urlOriginal" />
            </div>
            <div class="AboutPortfolio__detail">
                <div class="AboutPortfolio__detail_name">{{ portfolio.name }}</div>
                <!-- <div class="AboutPortfolio__detail_detail" v-html="portfolio.detail" /> -->
            </div>
        </div>
    </div>
</template>

<script>
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
import { fetchPortfolio } from '~/apollo/queries/portfolio.gql'

export default {
    components: {
        UiEmployeeContainer,
    },
    apollo: {
        portfolio: {
            query: fetchPortfolio,
            variables() {
                const id = this.$route.params.id
                return {
                    id: id,
                }
            },
            update: (data) => {
                return data?.portfolio || {}
            },
        },
    },
    data() {
        return {
            portfolio: {
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
        }
    },
    mounted() {
        console.log(this.portfolio)
    },
}
</script>

<style lang="scss" scoped>
.AboutPortfolio {
    background: $mainGreen;
    padding: 50px 20px 100px;

    &__wrapper {
        width: 100%;
        max-width: 700px;
        margin: auto;

        display: flex;

        flex-direction: column;

        @include atMedium {
            flex-direction: row;
        }
    }

    &__snapshot {
        flex: 1;
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__detail {
        flex: 1;

        padding: 30px;
        color: $mainWhite;
        &_position {
            font-size: 17px;

            @include atSmall {
                font-size: 21px;
            }
            @include atLarge {
                font-size: 25px;
            }
        }
        &_name {
            font-size: 40px;
            font-family: Broadwell;
            @include atSmall {
                font-size: 44px;
            }
            @include atLarge {
                font-size: 48px;
            }
        }
        &_detail {
            padding: 20px 0;
        }
    }
}
</style>
