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
            isMobile: true,
        }
    },
    created() {
        if (document.body.clientWidth > 480) {
            this.isMobile = false
        }
    },
    computed: {
        animationCss() {
            if (this.isMobile) {
                switch (this.currentAnimation) {
                    case 1:
                        return { width: '230px', height: '150px' }
                    case 2:
                        return { width: '150px', height: '150px' }
                    case 3:
                        return { width: '150px', height: '250px' }
                    case 4:
                        return { width: '330px', height: '150px' }
                    case 5:
                        return { width: '230px', height: '150px' }
                    case 6:
                        return { width: '230px', height: '150px', opacity: '0' }
                    default:
                        return { width: '230px', height: '150px', opacity: '0' }
                }
            } else {
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
        width: 230px;
        height: 150px;
        border: 7px solid black;
        transition: all 0.4s ease-in-out;
        opacity: 1;
        background: rgb(238, 238, 238);

        transform-origin: top;
        @include atSmall {
            width: 616px;
            height: 212px;
            border: 12px solid black;
        }

        &_degree {
            position: absolute;
            border-radius: 50%;
            top: 13px;
            left: 13px;
            width: 30px;
            height: 30px;
            border: 7px solid black;

            @include atSmall {
                top: 16px;
                left: 16px;
                width: 44px;
                height: 44px;
                border: 10px solid black;
            }
        }

        &_c {
            position: absolute;
            bottom: 13px;
            left: 13px;
            width: calc(100% - (2 * 13px));
            height: 40px;
            border: 7px solid black;
            border-right: none;
            @include atSmall {
                bottom: 16px;
                left: 16px;
                height: 60px;
                border: 12px solid black;
                width: calc(100% - (2 * 16px));
            }
        }

        &_h {
            position: absolute;
            top: 13px;
            right: 13px;
            width: 40px;
            height: calc(100% - (2 * 13px));
            border: 7px solid black;
            border-top: none;
            border-bottom: none;

            @include atSmall {
                top: 16px;
                right: 16px;
                width: 60px;
                border: 12px solid black;
                height: calc(100% - (2 * 16px));
            }
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
