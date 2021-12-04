<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="slideshow">
        <swiper-slide v-for="(employee, index) in allEmployees" :key="employee.id">
            <UiEmployeeCircle :employee="employee" :isFocus="index === currentIndex" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import _ from 'lodash'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

import UiEmployeeCircle from '@/components/UiEmployeeCircle'

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
        UiEmployeeCircle,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            currentIndex: 0,
            swiperOptions: {
                centeredSlides: true,
                slidesPerView: 2,

                // loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    760: {
                        slidesPerView: 5,
                    },
                },
            },
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
    },
    watch: {
        allEmployees: function() {
            console.log('Current Swiper instance object', this.swiper)

            this.swiper.on('slideChange', () => {
                console.log('slide changed')
                this.currentIndex = this.$refs.mySwiper.$swiper.activeIndex
            })
            // setTimeout(() => {
            //     console.log(this)
            //     this.swiper.slideTo(0, 1000, true)
            // }, 4000)
        },
    },
    mounted() {},
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

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-slide {
    transform: scale(0.6);
    transition: all 0.5s ease-in-out;
}

.swiper-slide-active {
    transform: scale(1);
}
// .swiper-slide:nth-child(2n) {
//     width: 60%;
// }
</style>
