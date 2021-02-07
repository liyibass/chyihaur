<template>
    <div class="About" id="about">
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

                --
                <br />
                讓人更加舒適的生活在空間裡。
            </div>

            <div class="About__text_meaning  hide_text hide_text_About">
                <img :src="require('@/static/images/about_meaning.png')" alt="" />
            </div>
        </div>

        <div class="About__image">
            <img :src="require('@/static/images/about.jpg')" alt="" />
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
    width: 100%;
    height: 100vh;

    padding: 18px 54px;

    display: flex;
    flex-direction: row;

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
        height: calc(100vh - 16px);

        position: absolute;
        right: 0.5%;
        bottom: 16px;
        background: white;

        transform: translateX(5%);
        transition: all 0.5s ease;

        img {
            opacity: 0.1;
            transition: all 0.5s ease;
            right: 10px;

            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @include atUltraLarge {
        .About__text {
            align-items: center;
        }
    }
}
</style>
