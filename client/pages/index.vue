<template>
    <div>
        <!-- <transition name="fade">
            <FullScreenAnimate
                v-if="ifShowAnimation"
                :setPlayedAnimation="setPlayedAnimation"
                @click.native="forceCancelAnimation"
            />
        </transition> -->
        <Video />
        <AboutNew />
        <Service />
        <Workflow />
        <WorkflowMobile />
        <ContactSimple />
    </div>
</template>

<script>
import FullScreenAnimate from '@/components/FullScreenAnimate'

import Video from '@/components/Video'
import AboutNew from '@/components/AboutNew'
import Service from '@/components/Service'
import Workflow from '@/components/Workflow'
import WorkflowMobile from '@/components/WorkflowMobile'
import ContactSimple from '@/components/ContactSimple'

import 'intersection-observer'
import scrollama from 'scrollama'
export default {
    components: {
        FullScreenAnimate,

        Video,
        AboutNew,
        Service,
        Workflow,
        WorkflowMobile,
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
        // // -------------------------------------------------------
        // // instantiate the scrollama
        // const hideTextScroller = scrollama()
        // // setup the instance, pass callback functions
        // hideTextScroller
        //     .setup({
        //         step: '.hide_text',
        //         offset: 0.7,
        //     })
        //     .onStepEnter((response) => {
        //         // { element, index, direction }
        //         response.element.style.opacity = 1
        //     })
        //     .onStepExit((response) => {
        //         // { element, index, direction }
        //     })
        // // setup resize event
        // window.addEventListener('resize', hideTextScroller.resize)
    },
}
</script>

<style></style>
