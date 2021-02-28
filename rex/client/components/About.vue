<template>
    <div class="About" id="about">
        <div class="About__wrapper">
            <div class="About__text">
                <div class="About__text_content ">
                    <div class="hide_text">
                        -- <br />
                        佇立於都市裡的淇豪<br />
                        簡單石灰色彩空間<br />
                        卻有著豐富的思維與想像<br />
                        日常生活中<br />
                        設計的契機往往淺藏在讓人難以發想的角落<br />
                        我們的工作就是將這些機會緊緊捉住並加以放大光彩<br />
                    </div>
                    <br />
                    <br />

                    <div class="hide_text">
                        「C」象徵 Customized「客製」<br />
                        「H」象徵 High quality「高質感」<br />
                        CH結合「尺規」及「°」溫度意象<br class="show_in_mobile" />
                        表現出「專業與溫度」的品牌形象<br />
                        <br />
                    </div>

                    <div class="hide_text">
                        --<br />
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
        flex-direction: column;
        align-items: stretch;
        justify-content: center;

        @include atSmall {
            justify-content: space-between;
        }
    }

    &__text {
        color: $mainWhite;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        &_content {
            font-size: 16px;
            line-height: 18px;
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
        // width: 57.5%;
        // height: calc(100vh - 16px);

        // position: absolute;
        right: 0.5%;
        bottom: 16px;
        // background: white;
        padding: 30px;

        transform: translateX(5%);
        transition: all 0.5s ease;
        align-self: center;
        flex-shrink: 1;

        img {
            opacity: 0.1;
            transition: all 0.5s ease;
            right: 10px;

            width: 100%;
            // height: 100%;
            object-fit: cover;
        }
    }

    @include atMedium {
        &__wrapper {
            padding: 18px 54px;
            flex-direction: row;
            justify-content: center;
        }

        &__text {
            width: 42%;

            &_content {
                max-width: 368px;
                font-size: 16px;
                line-height: 18px;
                margin-left: 36px;
                margin-bottom: 60px;
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

.show_in_mobile {
    display: inline-block;
    @include atSmall {
        display: none;
    }
}
.tab {
    margin-left: 3rem;
    box-sizing: border-box;
    display: block;
    max-width: 157px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
}
</style>
