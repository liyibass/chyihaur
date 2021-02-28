<template>
    <div class="Carousel">
        <div class="Carousel__image">
            <carousel
                :per-page="1"
                centerMode
                loop
                :autoplayTimeout="4000"
                paginationPosition="bottom-overlay"
                paginationActiveColor="rgba(255,255,255,1)"
                paginationColor="rgba(255,255,255,0.6)"
            >
                <slide v-for="(slide, i) in images" :key="i">
                    <img :src="slide.imageUrl" alt="" />
                    <div class="comment">
                        <span v-if="slide.comment">
                            {{ slide.comment }}
                        </span>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            images: [
                { imageUrl: require('@/static/images/carousel/1.png') },
                { imageUrl: require('@/static/images/carousel/2.png') },
                { imageUrl: require('@/static/images/carousel/3.png') },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.Carousel {
    position: relative;
    width: 100vw;

    .Carousel__image {
        position: relative;

        width: 100vw;
        height: 100vh;
        img {
            bottom: 0;
            width: 100%;
            height: 100vh;
            object-fit: cover;
            object-position: center;
        }
    }
}
</style>
