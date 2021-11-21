<template>
    <div v-if="!isWarehouse7" class="navbar-title">
        <h1>{{ engTitle }}</h1>

        <p><span>〔</span>{{ title }}<span>〕</span></p>
    </div>
    <div v-else class="navbar-title">
        <h1><span>NO7</span> WAREHOUSE</h1>

        <p><span>〔</span>{{ title }}<span>〕</span></p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        engTitle: {
            type: String,
        },
    },
    computed: {
        isWarehouse7() {
            return this.engTitle === 'WAREHOUSE 7'
        },
    },
}
</script>

<style lang="scss" scoped>
.navbar-title {
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    h1 {
        font-size: 20px;
        font-family: Broadwell;
        color: $mainWhite;

        @include atMedium {
            font-size: 40px;
        }

        span {
            font-size: 14px;
            line-height: 20px;

            @include atMedium {
                font-size: 36px;
            }
        }
    }

    p {
        font-size: 16px;
        color: $mainWhite;
        font-family: GenYoGothicTW;
        font-weight: bold;
        @include atMedium {
            font-size: 22px;
        }

        span {
            padding: 0 18px;
        }
    }
}
</style>
