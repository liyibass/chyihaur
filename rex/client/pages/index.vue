<template>
    <div>
        <transition name="fade">
            <FullScreenAnimate
                v-if="ifShowAnimation"
                :setPlayedAnimation="setPlayedAnimation"
                @click.native="forceCancelAnimation"
            />
        </transition>
        <NavBar />

        <Main />

        <Video />
        <HeaderImage />
        <About />
        <Portfolio />
        <Service />
        <Workflow />
        <ContactSimple />
    </div>
</template>

<script>
import FullScreenAnimate from '@/components/FullScreenAnimate'
import NavBar from '@/components/NavBar'
import Main from '@/components/Main'
import Video from '@/components/Video'
import HeaderImage from '@/components/HeaderImage'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Service from '@/components/Service'
import Workflow from '@/components/Workflow'
import ContactSimple from '@/components/ContactSimple'

import 'intersection-observer'
import scrollama from 'scrollama'
export default {
    components: {
        FullScreenAnimate,
        NavBar,
        Main,
        Video,
        HeaderImage,
        About,
        Portfolio,
        Service,
        Workflow,
        ContactSimple,
    },
    data() {
        return {
            loaded: false,
            playedAnimation: false,
        }
    },
    computed: {
        ifShowAnimation: function() {
            console.log(this.loaded)
            console.log(this.playedAnimation)
            if (this.loaded && this.playedAnimation) {
                return false
            } else {
                return true
            }
        },
    },
    methods: {
        setPlayedAnimation() {
            setTimeout(() => {
                this.playedAnimation = true
            }, 9800)
        },
        forceCancelAnimation() {
            this.playedAnimation = true
            this.loaded = true
        },
    },
    created() {
        // would work in 'ready', 'attached', etc.
        window.addEventListener('load', () => {
            this.loaded = true
        })
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
