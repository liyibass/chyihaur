<template>
    <div class="service-group-title">
        <!-- <nobr class="service-group-title__title" @click="clickHandler">{{
            title
        }}</nobr> -->
        <div class="service-group-title__title" @click="clickHandler">
            <img :src="titleImage" />
        </div>
        <nobr class="service-group-title__engTitle" :style="handleWidth">{{
            engTitle
        }}</nobr>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            isRequired: true,
            default: () => {
                return ''
            },
        },
        engTitle: {
            type: String,
            isRequired: true,
            default: () => {
                return ''
            },
        },
        titleImage: {
            type: String,
            isRequired: true,
            default: () => {
                return ''
            },
        },
    },

    computed: {
        handleWidth() {
            if (this.engTitle === 'PHOTOGRAPH') {
                return { fontSize: '16px' }
            }
        },
    },
    methods: {
        clickHandler() {
            this.$router.push('/portfolio')
        },
    },
}
</script>

<style lang="scss" scoped>
.service-group-title {
    width: 100%;
    color: $mainWhite;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 16px;

    &__title {
        font-size: 83px;
        line-height: 1;
        cursor: pointer;
        width: 166px;
        img {
            width: 100%;
        }

        @include atSmall {
            font-size: 100px;
            width: 260px;
            line-height: 1;
        }

        @include atMedium {
            font-size: 130px;
            line-height: 1;
        }
    }

    &__engTitle {
        font-size: 28px;
        line-height: 1;
        font-weight: bold;
        @include atSmall {
            display: none;
        }
    }
}
</style>
