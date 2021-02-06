<template>
    <div class="HeaderImage HeaderImage_hide">
        <div class="HeaderImage__image">
            <img :src="require('@/static/images/header.png')" alt="" />
        </div>

        <div class="HeaderImage__text">
            <img :src="require('@/static/images/headerText.png')" alt="" />
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
        const imageSlideInScroller = scrollama()
        const HeaderImageImageDOM = document.querySelector('.HeaderImage__image')

        // setup the instance, pass callback functions
        imageSlideInScroller
            .setup({
                step: '.HeaderImage',
                offset: 0.6,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                response.element.classList.remove('HeaderImage_hide')
            })
            .onStepExit((response) => {
                // { element, index, direction }
                response.element.classList.add('HeaderImage_hide')
            })

        // setup resize event
        window.addEventListener('resize', imageSlideInScroller.resize)
    },
}
</script>

<style lang="scss" scoped>
.HeaderImage {
    position: relative;
    width: 100%;
    height: 100vh;
    background: $mainBlue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    transition: all 1s ease;

    &__image {
        width: 99%;
        height: calc(100vh - 36px);
        transition: all 1s ease;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__text {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100vh;
        margin-left: 58px;

        img {
            height: 100%;
        }
    }
}

.HeaderImage_hide {
    .HeaderImage__image {
        opacity: 0.8;
        margin-right: -70px;
    }
}
</style>
