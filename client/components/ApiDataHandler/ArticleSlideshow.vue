<template>
    <div v-swiper:contentSwiper="swiperOption" class="slideshow">
        <div class="swiper-wrapper">
            <div v-for="item in items" :key="item.title" class="swiper-slide">
                <div class="image-wrapper">
                    <img
                        :src="item.url"
                        :alt="item.title"
                        class="swiper-lazy"
                    />
                </div>
                <p class="caption" v-text="item.title" />
            </div>
        </div>
        <button
            class="swiper-button-nav swiper-button-nav--prev"
            @click="contentSwiper.slidePrev()"
        >
            <div class="arrow">
                <img src="@/static/images/arrow.png" alt="" />
            </div>
        </button>

        <button
            class="swiper-button-nav swiper-button-nav--next"
            @click="contentSwiper.slideNext()"
        >
            <div class="arrow">
                <img src="@/static/images/arrow.png" alt="" />
            </div>
        </button>
        <div class="swiper-pagination" />
    </div>
</template>

<script>
import { Swiper as SwiperClass, Pagination } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination])
const { directive } = getAwesomeSwiper(SwiperClass)

export default {
    directives: {
        swiper: directive,
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            swiperOption: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
            },
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'swiper/swiper-bundle.css';

.slideshow {
    position: relative;
    overflow: hidden;
    .swiper-slide {
        .image-wrapper {
            display: block;
            position: relative;
            padding-top: 66.66%;
            // @include atLarge {
            //     margin: 0 auto;
            //     padding-top: calc(400px * 0.6666);
            // }
            img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .caption {
            padding-top: 54px;
            color: #4a4a4a;
            font-size: 15px;
            text-align: center;
            @include atLarge {
                padding-top: 37px;
            }
        }
    }
    .swiper-button-nav {
        position: absolute;

        background: rgba(255, 255, 255, 0.3);
        top: calc((100% - 54px - 8px) / 2);
        transform: translateY(-50%);
        right: -2px;
        z-index: 20;
        padding: 10px;
        outline: none;
        > .arrow {
            display: block;
            width: 28px;
            height: 28px;
            // border-left: 4px solid $color-blue;
            // border-bottom: 4px solid $color-blue;
            // transform: rotate(45deg);
            img {
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }
        @include atLarge {
            top: 116px;
        }
        &--prev {
            right: auto;
            left: -2px;

            > .arrow {
                transform: rotate(-180deg);
            }
        }
    }
    .swiper-pagination {
        display: none;
    }
}
</style>
