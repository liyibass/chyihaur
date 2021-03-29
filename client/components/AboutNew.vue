<template>
    <div class="AboutNew">
        <div class="AboutNew__left_block"></div>
        <div class="AboutNew__right_block"></div>

        <div class="AboutNew__text">
            <div class="AboutNew__text_wrapper">
                <div class="hide_text remove_in_mobile">
                    「C」象徵 Customized「客製」<br />
                    「H」象徵 High quality「高質感」<br />
                    CH結合「尺規」及「°」溫度<br class="show_in_mobile" />
                    表現出「專業與溫度」的品牌形象<br />
                </div>

                <div class="hide_text remove_in_mobile">
                    --<br />
                    關於我們的工作<br />
                    就是讓<br />
                </div>

                <div class="tab hide_text remove_in_mobile">
                    - <br />
                    建築與空間對話<br />
                    品牌與店面綻放<br />
                </div>
            </div>
        </div>

        <div class="AboutNew__image">
            <div class="AboutNew__image_wrapper">
                <img :src="require('@/static/images/about_meaning.png')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
// import slashBlockMixin from '@/mixins/slashBlockMixin'

export default {
    // mixins: [slashBlockMixin],
}
</script>

<style lang="scss" scoped>
.AboutNew {
    position: relative;
    width: 100vw;
    height: 45vh;
    // overflow-x: hidden;
    background: $mainGreen;

    &__right_block {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 110%;
        width: 90%;
        background: $workflowGray;
        background-size: cover;
        transform: skew(-43deg) translateX(46%);
    }

    &__text {
        width: 50vw;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_wrapper {
            width: 40vw;
            box-sizing: border-box;
            color: white;
            font-size: 10px;

            @include atMedium {
                font-size: 16px;
            }
        }
    }

    &__image {
        position: absolute;
        top: 0;
        right: 0;
        width: 40vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_wrapper {
            width: 100%;
            img {
                width: 100%;
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
</style>
