<template>
    <div class="UiSlashBlock UiSlashBlock_1">
        <div
            class="UiSlashBlock__left_block UiSlashBlock__left_block_1 UiSlashBlock__background"
            :style="getBackgroundImage"
        >
            <ServiceGroupTitle
                :title="serviceGroup.title"
                :engTitle="serviceGroup.engTitle"
                :titleImage="serviceGroup.titleImage"
            />
        </div>
        <div class="UiSlashBlock__right_block UiSlashBlock__right_block_1">
            <div class="UiSlashBlock__color"></div>

            <div class="UiSlashBlock__content">
                <ServiceGroup :serviceGroup="serviceGroup" />
            </div>
        </div>
    </div>
</template>

<script>
import slashBlockMixin from '@/mixins/slashBlockMixin'

export default {
    mixins: [slashBlockMixin],

    mounted() {
        // import slashBlockMixin from '@/mixins/slashBlockMixin'
        const leftBlockScene = this.$scrollmagic
            .scene({
                triggerElement: '.Service',
                offset: 0,
                triggerHook: 0.7,
                duration: '150%',
                offset: 50,
            })
            .setClassToggle('.UiSlashBlock__left_block_1', 'visible') // add class to block

        // .addIndicators({ name: 'leftBlockScene' })

        const rightBlockScene = this.$scrollmagic
            .scene({
                triggerElement: '.Service',
                offset: 0,
                triggerHook: 0.7,
                duration: '150%',
                offset: 50,
            })
            .setClassToggle('.UiSlashBlock__right_block_1', 'visible') // add class to block

        this.$scrollmagic.addScene([leftBlockScene, rightBlockScene])
        this.slashBlockArrayScene = [leftBlockScene, rightBlockScene]
    },
    destroyed() {
        this.$scrollmagic.removeScene(this.slashBlockArrayScene)
    },
}
</script>

<style lang="scss" scoped>
.UiSlashBlock {
    background: $mainGreen;

    &__left_block {
        opacity: 0;
        transform: translate(-100%, 0);
        transition: all 0.5s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 70%;

        .service-group-title {
            width: auto;
            position: absolute;
            bottom: 10px;
            left: 10px;
            margin-bottom: 0;
        }
    }

    &__right_block {
        transform: translate(100%, 0);
        transition: all 0.5s ease-in-out;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 57.6%;
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;

        .UiSlashBlock__color {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
            background: $mainGreen;
            transform: skew(0deg) translateX(0);
            transform-origin: top;
            transition: all 0.5s ease-in-out;
            transition-delay: 0.5s;
        }

        .UiSlashBlock__content {
            @include atSmall {
                margin-left: 15%;
            }
        }
    }
}

.service-group-title,
.UiSlashBlock__content {
    opacity: 0;
    transition: all 0.5s ease-in-out;
    transition-delay: 1s;
}

.visible {
    transform: translate(0, 0);
    opacity: 1;

    .UiSlashBlock__color {
        transform: skew(15deg) translateX(0);

        @include atUltraLarge {
            transform: skew(29deg) translateX(0);
        }
    }

    .service-group-title,
    .UiSlashBlock__content {
        opacity: 1;
    }
}
</style>
