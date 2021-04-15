<template>
    <div class="home-animation">
        <FullScreenAnimate @click.native="forceCancelAnimation" />
    </div>
</template>

<script>
import FullScreenAnimate from '@/components/FullScreenAnimate'

export default {
    components: {
        FullScreenAnimate,
    },
    data() {
        return {
            loaded: false,
            playedAnimation: false,
        }
    },
    methods: {
        setPlayedAnimation() {
            setTimeout(() => {
                this.playedAnimation = true
                this.loaded = true
            }, 5000)
        },
        forceCancelAnimation() {
            this.playedAnimation = true
            this.loaded = true
        },
    },
    watch: {
        loaded: function(val) {
            console.log(val)
            this.$router.push('/home')
        },
    },
    // created() {
    //     // would work in 'ready', 'attached', etc.
    //     window.addEventListener('load', () => {
    //         this.loaded = true
    //     })
    // },
    mounted() {},
}
</script>

<style>
.home-animation {
    cursor: pointer;
}
</style>
