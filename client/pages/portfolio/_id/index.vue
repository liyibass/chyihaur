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
export default {
    components: {
        UiEmployeeContainer,
    },
    props: {
        portfolio: {
            type: Object,
            isRequired: true,
        },
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
