<template>
    <div class="About" id="about">
        <div class="About__wrapper">
            <div class="About__text">
                <div class="About__text_title  hide_text hide_text_About ">
                    ABOUT<br />
                    US<br />
                    <br />
                    <br />
                </div>

                <div class="About__text_content  hide_text hide_text_About">
                    -- <br />
                    <span class="subtitle">「如何將好的設計，放在適合的位置上」</span>
                    <br />
                    <br />
                    <br />

                    -- <br />
                    佇立於都市裡的淇豪<br />
                    簡單石灰色彩空間<br />
                    卻有著豐富的思維與想像<br />
                    日常生活中<br />
                    設計的契機往往淺藏在讓人難以發想的角落<br />
                    我們的工作就是將這些機會緊緊捉住並加以放大光彩<br />
                    <br />
                    <br />
                    「C」象徵 Customized「客製」<br />
                    「H」象徵 High quality「高質感」<br />
                    CH結合「尺規」及「°」溫度意象表現出「專業與溫度」的品牌形象<br />
                    --
                    <br />
                    關於我們的工作<br />
                    就是讓<br />
                    - <br />
                    建築與空間對話<br />
                    品牌與店面綻放<br />
                </div>

                <!-- <div class="About__text_meaning  hide_text hide_text_About">
                <img :src="require('@/static/images/about_meaning.png')" alt="" />
            </div> -->
            </div>

            <div class="About__image">
                <img :src="require('@/static/images/about_meaning.png')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import 'intersection-observer'
import scrollama from 'scrollama'

export default {
    mounted() {
        // -------------------------------------------------------
        // instantiate the scrollama
        const hideTextScroller = scrollama()
        const imageDOM = document.querySelector('.About__image')

        // setup the instance, pass callback functions
        hideTextScroller
            .setup({
                step: '.About',
                offset: 0.5,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                imageDOM.style.transform = 'translateX(0%)'
                imageDOM.firstChild.style.opacity = 1
            })
            .onStepExit((response) => {
                imageDOM.style.transform = 'translateX(5%)'

                imageDOM.firstChild.style.opacity = 0
                // { element, index, direction }
            })

        // setup resize event
        window.addEventListener('resize', hideTextScroller.resize)
    },
}
</script>

<style lang="scss" scoped>
.About {
    position: relative;
    background: $mainGreen;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &__wrapper {
        width: 100%;
        height: 100%;
        padding: 18px 54px;
        margin: auto;

        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    &__text {
        color: $mainWhite;
        width: 42%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        &_title {
            width: 148px;
            margin-bottom: 27px;

            font-size: 18px;
            font-weight: bold;

            display: block;
            border-bottom: 1px solid $mainWhite;
            font-family: Broadwell;
        }

        &_content {
            max-width: 368px;
            font-size: 16px;
            line-height: 18px;
            margin-left: 36px;
            margin-bottom: 60px;

            .subtitle {
                font-size: 19px;
            }
        }

        &_meaning {
            max-width: 368px;
            margin-left: 40px;

            img {
                width: 100%;
            }
        }
    }

    &__image {
        width: 57.5%;
        // height: calc(100vh - 16px);

        // position: absolute;
        right: 0.5%;
        bottom: 16px;
        // background: white;

        transform: translateX(5%);
        transition: all 0.5s ease;
        align-self: center;

        img {
            opacity: 0.1;
            transition: all 0.5s ease;
            right: 10px;

            width: 100%;
            // height: 100%;
            object-fit: cover;
        }
    }

    @include atSmall {
        &__wrapper {
            padding: 18px 54px;
        }
    }
    @include atLarge {
        &__wrapper {
            padding: 18px 80px;
            // max-width: 1000px;
        }
    }

    @include atUltraLarge {
        &__wrapper {
            padding: 0;
            max-width: 1280px;
        }
        .About__text {
            align-items: center;
        }
    }
}
</style>
