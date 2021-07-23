<template>
    <div v-if="portfolio" class="AboutPortfolio">
        <div class="AboutPortfolio__snapshot">
            <img :src="coverPhoto" />
            <div class="AboutPortfolio__snapshot_title">
                {{ portfolio.name }}
            </div>
        </div>
        <div class="AboutPortfolio__wrapper">
            <div class="AboutPortfolio__detail">
                <ApiDataHandler :apiData="description" />
            </div>
        </div>
    </div>
</template>

<script>
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
import { fetchPortfolio } from '~/apollo/queries/portfolio.gql'
import ApiDataHandler from '@/components/ApiDataHandler'
export default {
    components: {
        UiEmployeeContainer,
        ApiDataHandler,
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
    computed: {
        coverPhoto() {
            return (
                this.portfolio?.coverPhoto?.urlOriginal ||
                require('@/static/images/logo_small.png')
            )
        },
        description() {
            const description = this.portfolio?.descriptionApiData
            return description ? JSON.parse(description) : []
        },
    },
}
</script>

<style lang="scss" scoped>
.AboutPortfolio {
    background: $mainGreen;
    min-height: 100vh;

    &__snapshot {
        position: relative;
        flex: 1;
        width: 100%;
        height: 50vh;
        background: black;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.5;
            transition: all 0.5s linear;
        }

        &_title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
            font-family: Broadwell;
            color: $mainWhite;
            opacity: 1;
            transition: all 0.5s linear;

            @include atSmall {
                font-size: 44px;
            }
            @include atLarge {
                font-size: 48px;
            }
        }

        &:hover {
            img {
                opacity: 1;
            }
            .AboutPortfolio__snapshot_title {
                opacity: 0;
            }
        }
    }

    &__wrapper {
        padding: 50px 20px 100px;
        width: 100%;
        max-width: 700px;
        margin: auto;

        display: flex;

        flex-direction: column;
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

        &_detail {
            padding: 20px 0;
        }
    }
}
</style>
