<template>
    <div>
        <Main />
        <HeaderImage />
        <About />
        <!-- <Main /> -->
    </div>
</template>

<script>
import Main from '@/components/Main'
import HeaderImage from '@/components/HeaderImage'
import About from '@/components/About'

import 'intersection-observer'
import scrollama from 'scrollama'
export default {
    components: {
        Main,
        HeaderImage,
        About,
    },
    mounted() {
        // -------------------------------------------------------
        // instantiate the scrollama
        const hideTextScroller = scrollama()

        // setup the instance, pass callback functions
        hideTextScroller
            .setup({
                step: '.hide_text',
                offset: 0.7,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                response.element.style.opacity = 1
            })
            .onStepExit((response) => {
                // { element, index, direction }
            })

        // setup resize event
        window.addEventListener('resize', hideTextScroller.resize)
    },
}
</script>

<style></style>
