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
                    關於我們的工作<br />
                    就是讓<br />
                </div>

                <div class="tab remove_in_mobile">
                    - <br />
                    建築與空間對話<br />
                    品牌與店面綻放<br />
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
            .setClassToggle('.AboutNew__right_block', 'visible') // add class to block

        // .addIndicators({ name: 'rightBlockScene' })

        this.$scrollmagic.addScene([leftBlockScene, rightBlockScene])
    },
}
</script>

<style lang="scss" scoped>
.AboutNew {
    position: relative;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    @include atMedium {
        height: 396px;
        display: block;
    }

    &__left_block {
        opacity: 0;
        transition: all 0.5s ease-in-out;

        @include atMedium {
            width: 50%;
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
            font-size: 10px;
            text-align: center;

            @include atMedium {
                width: 80%;
                align-items: flex-start;
                padding: 0 0 0 30px;
                font-size: 16px;
                text-align: left;
            }

            @include atLarge {
                padding: 0 0 0 70px;
            }
        }
    }

    &__background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;

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

            width: 400px;
            height: 458px;
            justify-content: flex-end;
        }
        @include atLarge {
            width: 437px;
        }

        &_color {
            display: none;

            @include atMedium {
                position: absolute;
                top: 0;
                left: 0;
                width: 200%;
                height: 100%;
                display: block;

                background: $workflowGray;
                transform: skew(-23deg) translate(4%, 0%);
                transform-origin: top;
            }

            @include atLarge {
                transform: skew(-37deg) translate(0%, 0%);
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
                position: absolute;
                top: 50%;
                transform: translateY(-30%);
                width: 100%;
                max-width: none;
            }
            @include atLarge {
                transform: translateY(-38%);
                width: 130%;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                opacity: 0;
                transition: all 0.5s ease-in-out;
                transition-delay: 0.7s;
            }
        }
    }
}

.tab {
    @include atMedium {
        margin-left: 3rem;
        box-sizing: border-box;
        display: block;
        max-width: 157px;
    }
}
.show_in_mobile {
    display: inline-block;
    @include atMedium {
        display: none;
    }
}

.visible {
    transform: translate(0%, 0%);
    opacity: 1;

    img {
        opacity: 1;
    }
}

.text_visible {
    transform: translate(0%, 0%);
    opacity: 1;
}
</style>
