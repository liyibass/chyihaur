<template>
    <div class="AboutNew">
        <div class="AboutNew__background">
            <div class="AboutNew__background_mask" />
            <img :src="require('@/static/images/about.jpg')" alt="" />
        </div>
        <div class="AboutNew__left_block">
            <div class="AboutNew__text">
                <div class="remove_in_mobile">
                    「C」象徵 Customized「客製」<br />
                    「H」象徵 High quality「高質感」<br />
                    「尺規」及「°」溫度<br class="show_in_mobile" />
                    表現出「專業與溫度」<br />
                </div>

                <div class="remove_in_mobile">
                    --<br />
                    關於我們的使命<br />
                    就是讓<br />
                </div>

                <div class="tab remove_in_mobile">
                    - <br />
                    建築與空間對話<br />
                    品牌與商空綻放<br />
                </div>
            </div>
        </div>
        <div class="AboutNew__right_block">
            <div class="AboutNew__right_block_color"></div>

            <div class="AboutNew__right_block_image">
                <img :src="require('@/static/images/about_meaning.png')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // mixins: [slashBlockMixin],

    mounted() {
        // import slashBlockMixin from '@/mixins/slashBlockMixin'
        const leftBlockScene = this.$scrollmagic
            .scene({
                triggerElement: '.AboutNew',
                offset: 0,
                triggerHook: 0.6,
                duration: '100%',
                offset: 50,
            })
            .setClassToggle('.AboutNew__left_block', 'text_visible') // add class to block

        // .addIndicators({ name: 'leftBlockScene' })

        const rightBlockScene = this.$scrollmagic
            .scene({
                triggerElement: '.AboutNew',
                offset: 0,
                triggerHook: 0.6,
                duration: '100%',
                offset: 50,
            })
            .setClassToggle('.AboutNew__right_block', 'block_visible') // add class to block

        const backgroundScene = this.$scrollmagic
            .scene({
                triggerElement: '.AboutNew',
                offset: 0,
                triggerHook: 0.6,
                duration: '100%',
                offset: 50,
            })
            .setClassToggle('.AboutNew__background', 'background_visible') // add class to block
        // .addIndicators({ name: 'rightBlockScene' })

        this.$scrollmagic.addScene([leftBlockScene, rightBlockScene, backgroundScene])
    },
}
</script>

<style lang="scss" scoped>
.AboutNew {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: black;

    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    @include atMedium {
        background: $mainGreen;

        height: 396px;
        display: block;
    }

    @include atUltraLarge {
        height: 585px;
    }

    &__left_block {
        opacity: 0;
        transition: all 0.5s ease-in-out;

        @include atMedium {
            width: 70%;
            height: 100%;
            transform: translate(-30%, 0%);
            opacity: 0;
            transition: all 0.5s ease-in-out;
        }

        .AboutNew__text {
            height: 100%;
            padding: 0 0 0 0;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            color: white;
            font-size: 16px;
            text-align: center;

            @include atMedium {
                width: 80%;
                align-items: flex-start;
                padding: 0 0 0 30px;
                text-align: left;
            }

            @include atLarge {
                padding: 0 0 0 70px;
                font-size: 20px;
            }

            @include atUltraLarge {
                font-size: 24px;
            }
        }
    }

    &__background {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        transform: translate(-30%, 0%);
        transition: all 0.5s ease-in-out;

        &_mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.68;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;

            @include atMedium {
                width: 70%;
            }
        }
    }

    &__right_block {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 70px;

        @include atMedium {
            position: absolute;
            bottom: 0;
            right: 0;
            margin-bottom: 0;
            transform: translate(20%, -20%);
            opacity: 0;
            transition: all 0.5s ease-in-out;

            width: 61%;
            height: 458px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
        }
        @include atLarge {
            width: 57.552%;
        }

        @include atUltraLarge {
            height: 684px;
        }

        &_color {
            display: none;

            @include atMedium {
                position: absolute;
                top: 0;
                left: 0;
                width: 120%;
                height: 100%;
                display: block;

                background: $workflowGray;
                // transform: skew(-23deg) translate(4%, 0%);
                transform: skew(-15deg) translate(0%, 0%);
                transform-origin: bottom;
            }

            @include atLarge {
                transform: skew(-26deg) translate(0%, 0%);
            }
        }

        &_image {
            position: relative;
            top: 0;
            right: 0;
            width: 100%;
            max-width: 341px;
            // height: 100%;
            margin: auto;

            @include atMedium {
                max-width: none;
                margin: 0;
                width: 78%;
            }

            @include atLarge {
                width: 68%;
            }

            @include atUltraLarge {
                max-width: 853px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                opacity: 0;
                transition: all 0.5s ease-in-out;
                // transition-delay: 0.7s;
            }
        }
    }
}

.tab {
    @include atMedium {
        margin-left: 3rem;
        box-sizing: border-box;
        display: block;
    }
}
.show_in_mobile {
    display: inline-block;
    @include atMedium {
        display: none;
    }
}

.background_visible {
    opacity: 1;
    transform: translate(0%, 0%);
}

.block_visible {
    transform: translate(0%, 0%);
    opacity: 1;

    &:hover {
        @include atMedium {
            transform: translate(-15%, 0%) scale(1.15);
        }
    }

    img {
        opacity: 1;
    }
}

.text_visible {
    transform: translate(0%, 0%);
    opacity: 1;

    &:hover {
        @include atMedium {
            transform: translate(10%, 0%) scale(1.1);
        }
    }
}
</style>
