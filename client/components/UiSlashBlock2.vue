<template>
    <div class="UiSlashBlock UiSlashBlock_2">
        <div class="UiSlashBlock__left_block UiSlashBlock__left_block_2">
            <div class="UiSlashBlock__color"></div>

            <div class="UiSlashBlock__content">
                <ServiceGroup :serviceGroup="serviceGroup" />
            </div>
        </div>
        <div
            class="UiSlashBlock__right_block UiSlashBlock__right_block_2 UiSlashBlock__background"
            :style="getBackgroundImage"
        >
            <ServiceGroupTitle :title="serviceGroup.title" :engTitle="serviceGroup.engTitle" />
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
                triggerElement: '.UiSlashBlock__left_block_2',
                offset: 0,
                triggerHook: 0.7,
                duration: '150%',
                offset: 50,
            })
            .setClassToggle('.UiSlashBlock__left_block_2', 'visible') // add class to block

        // .addIndicators({ name: 'leftBlockScene' })

        const rightBlockScene = this.$scrollmagic
            .scene({
                triggerElement: '.UiSlashBlock__right_block_2',
                offset: 0,
                triggerHook: 0.7,
                duration: '150%',
                offset: 50,
            })
            .setClassToggle('.UiSlashBlock__right_block_2', 'visible') // add class to block

        this.$scrollmagic.addScene([leftBlockScene, rightBlockScene])
    },
}
</script>

<style lang="scss" scoped>
.UiSlashBlock {
    background: $mainLightGreen;

    &__left_block {
        transform: translate(-100%, 0);
        transition: all 0.5s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 42.4%;
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
            background: $mainLightGreen;
            transform: skew(0deg) translateX(0);
            transform-origin: bottom;
            transition: all 0.5s ease-in-out;
            transition-delay: 0.5s;
        }

        .UiSlashBlock__content {
        }
    }

    &__right_block {
        opacity: 0;
        transform: translate(100%, 0);
        transition: all 0.5s ease-in-out;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 70%;
        background: red;
        background-size: cover;

        .service-group-title {
            width: auto;
            position: absolute;
            bottom: 0;
            right: 0;
            margin-bottom: 0;
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
        transform: skew(-15deg) translateX(0);

        @include atUltraLarge {
            transform: skew(-29deg) translateX(0);
        }
    }
    .service-group-title,
    .UiSlashBlock__content {
        opacity: 1;
    }
}
</style>
