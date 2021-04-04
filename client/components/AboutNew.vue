<template>
    <div class="AboutNew">
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

            .addIndicators({ name: 'leftBlockScene' })

        const rightBlockScene = this.$scrollmagic
            .scene({
                triggerElement: '.AboutNew',
                offset: 0,
                triggerHook: 0.6,
                duration: '100%',
                offset: 50,
            })
            .setClassToggle('.AboutNew__right_block', 'visible') // add class to block

            .addIndicators({ name: 'rightBlockScene' })

        this.$scrollmagic.addScene([leftBlockScene, rightBlockScene])
    },
}
</script>

<style lang="scss" scoped>
.AboutNew {
    position: relative;
    width: 100vw;
    height: 296px;
    background: $mainGreen;

    @include atMedium {
        height: 396px;
    }

    &__left_block {
        width: 50%;
        height: 100%;
        transform: translate(-30%, 0%);
        opacity: 0;
        transition: all 0.5s ease-in-out;

        .AboutNew__text {
            width: 80%;
            height: 100%;
            padding: 0 0 0 20px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            color: white;
            font-size: 10px;

            @include atSmall {
                padding: 0 0 0 20px;
            }

            @include atMedium {
                padding: 0 0 0 30px;
                font-size: 16px;
            }

            @include atLarge {
                padding: 0 0 0 70px;
            }
        }
    }

    &__right_block {
        transform: translate(20%, -20%);
        opacity: 0;
        transition: all 0.5s ease-in-out;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 30%;
        height: 340px;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        @include atSmall {
            width: 50%;
            height: 340px;
        }
        @include atMedium {
            width: 400px;
            height: 458px;
            justify-content: flex-end;
        }
        @include atLarge {
            width: 437px;
        }

        &_color {
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background: $workflowGray;
            background-size: cover;
            transform: skew(-23deg) translate(0%, 0%);
            transform-origin: top;

            @include atSmall {
                transform: skew(-23deg) translate(4%, 0%);
            }

            @include atLarge {
                transform: skew(-37deg) translate(0%, 0%);
            }
        }

        &_image {
            position: relative;
            top: 0;
            left: 0;
            width: 129.84%;
            // height: 100%;
            padding: 0px;

            @include atSmall {
                width: 100%;
            }
            @include atMedium {
                width: 100%;
                padding-bottom: 80px;
            }
            @include atLarge {
                width: 130%;
                padding-bottom: 39px;
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
    margin-left: 3rem;
    box-sizing: border-box;
    display: block;
    max-width: 157px;
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
