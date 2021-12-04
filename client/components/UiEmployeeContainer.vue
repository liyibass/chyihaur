<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="slideshow">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import _ from 'lodash'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

export default {
    props: {
        allEmployees: {
            type: Array,
            isRequired: true,
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            swiperOptions: {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
    },
    mounted() {
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
    },
}
</script>

<style lang="scss" scoped>
.UiEmployeeContainer {
    background: $mainGreen;

    // display: flex;
    // flex-direction: column;
    // align-items: center;
}

.slideshow {
    position: relative;
    overflow: hidden;

    width: 100%;
    height: 100vh;
}
</style>
