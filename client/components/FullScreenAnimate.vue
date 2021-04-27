<template>
    <div class="FullScreenAnimate">
        <div class="FullScreenAnimate__logo" :style="animationCss">
            <div class="FullScreenAnimate__logo_degree" />
            <div class="FullScreenAnimate__logo_c" />
            <div class="FullScreenAnimate__logo_h" />
        </div>

        <transition name="fast-fade">
            <div v-if="currentAnimation === 7" class="FullScreenAnimate__hint">
                Enter
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentAnimation: 1,
        }
    },
    computed: {
        animationCss() {
            switch (this.currentAnimation) {
                case 1:
                    return { width: '329px', height: '212px', opacity: 1 }
                case 2:
                    return { width: '212px', height: '212px', opacity: 1 }
                case 3:
                    return { width: '212px', height: '470px', opacity: 1 }
                case 4:
                    return { width: '616px', height: '212px', opacity: 1 }
                case 5:
                    return { width: '329px', height: '212px', opacity: 1 }
                case 6:
                    return { width: '329px', height: '212px', opacity: 0 }
                default:
                    return { width: '329px', height: '212px', opacity: 0 }
            }
        },
    },

    mounted() {
        setInterval(() => {
            if (this.currentAnimation < 7) {
                this.currentAnimation++
            }
        }, 1000)
    },
}
</script>

<style lang="scss" scoped>
.FullScreenAnimate {
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    background: rgb(238, 238, 238);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    &__hint {
        z-index: 0;
        position: absolute;

        margin-top: 30vh;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
        font-weight: bold;

        animation-name: bling;
        animation-iteration-count: infinite;
        animation-duration: 2s;

        @include atSmall {
            top: 100px;
        }
    }

    &__logo {
        z-index: 1;
        margin-top: 30vh;
        position: relative;
        width: 616px;
        height: 212px;
        // background: red;
        border: 12px solid black;
        transition: all 0.4s ease-in-out;
        opacity: 1;
        background: rgb(238, 238, 238);

        transform: scale(0.6);
        transform-origin: top;
        @include atSmall {
            transform: scale(1);
        }

        &_degree {
            position: absolute;
            top: 16px;
            left: 16px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 10px solid black;
        }

        &_c {
            position: absolute;
            bottom: 16px;
            left: 16px;
            width: calc(100% - (2 * 16px));
            height: 60px;
            border: 12px solid black;
            border-right: none;
        }

        &_h {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 60px;
            height: calc(100% - (2 * 16px));
            border: 12px solid black;
            border-top: none;
            border-bottom: none;
        }
    }
}

@keyframes bling {
    0% {
        opacity: 0.3;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.3;
    }
}
</style>
