<template>
    <div class="Portfolio" id="portfolio">
        <div class="Portfolio__title">
            <div class="Portfolio__title_one_text">PORT</div>
            <div class="Portfolio__title_multi_text">
                <div class="Portfolio__title_multi_text_up">作品範例</div>
                <div class="Portfolio__title_multi_text_down">FOLIO</div>
            </div>
        </div>
        <div class="Portfolio__carousel">
            <carousel
                autoplay
                autoplayHoverPause
                :per-page="1"
                centerMode
                loop
                :autoplayTimeout="4000"
                paginationPosition="bottom-overlay"
                paginationActiveColor="rgba(255,255,255,1)"
                paginationColor="rgba(255,255,255,0.6)"
            >
                <slide v-for="(slide, i) in portfolioList" :key="i">
                    <img :src="slide.imageUrl" alt="" />
                </slide>
            </carousel>
        </div>

        <div class="Portfolio__text">
            <div class="Portfolio__text_background">
                <img :src="require('@/static/images/portfolioBackground.png')" alt="" />
                <div class="mask" />
            </div>

            <div class="Portfolio__text_container">
                <div class="hide_text">
                    關於我們的工作<br />
                    就是讓<br />
                </div>

                <div class="tab hide_text">
                    - <br />
                    建築與空間對話<br />
                    品牌與店面綻放<br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import portfolioMixin from '../mixins/portfolioMixin'
import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        Carousel,
        Slide,
    },
    mixins: [portfolioMixin],
}
</script>

<style lang="scss" scoped>
.Portfolio {
    position: relative;
    width: 100%;
    background: $mainGreen;

    &__title {
        z-index: 1;
        position: absolute;
        top: 10px;
        right: 20px;

        font-family: Broadwell;
        font-weight: bold;
        color: $mainWhite;
        line-height: 30px;
        margin-bottom: 14px;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        &_one_text {
            display: inline-block;
            font-size: 31px;
            line-height: 31px;
        }

        &_multi_text {
            display: flex;
            flex-direction: column;
            justify-content: center;

            &_up {
                display: inline-block;
                font-size: 8px;
                line-height: 8px;
            }
            &_down {
                display: inline-block;
                font-size: 22px;
                line-height: 22px;
            }
        }
    }

    &__carousel {
        z-index: 0;
        padding: 2px 10px;
        img {
            width: 100%;
            height: 50vh;
            object-position: center;
            object-fit: cover;
        }
    }

    &__text {
        position: relative;
        height: 60vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        color: $mainWhite;

        font-size: 10px;

        padding: 60px;

        &_background {
            z-index: 0;
            width: 100%;
            height: 60vh;
            position: absolute;
            top: 0;
            left: 0;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &_container {
            z-index: 1;
        }
    }
}

.tab {
    margin-left: 3rem;
    box-sizing: border-box;
    display: block;
    max-width: 157px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
}
</style>
