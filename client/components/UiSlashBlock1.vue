<template>
    <div class="UiSlashBlock UiSlashBlock_1">
        <div
            class="UiSlashBlock__left_block UiSlashBlock__left_block_1 UiSlashBlock__background"
            :style="getBackgroundImage"
        >
            <ServiceGroupTitle :title="serviceGroup.title" :engTitle="serviceGroup.engTitle" />
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
                duration: '100%',
                offset: 50,
            })
            .setClassToggle('.UiSlashBlock__left_block_1', 'visible') // add class to block

        // .addIndicators({ name: 'leftBlockScene' })

        const rightBlockScene = this.$scrollmagic
            .scene({
                triggerElement: '.Service',
                offset: 0,
                triggerHook: 0.7,
                duration: '100%',
                offset: 50,
            })
            .setClassToggle('.UiSlashBlock__right_block_1', 'visible') // add class to block

        this.$scrollmagic.addScene([leftBlockScene, rightBlockScene])
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
            bottom: 0;
            left: 0;
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
        width: 48%;
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        .UiSlashBlock__color {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
            background: $mainGreen;
            transform: skew(0deg) translateX(5.5%);
            transition: all 0.5s ease-in-out;
            transition-delay: 0.5s;
        }

        .UiSlashBlock__content {
            margin-right: 10%;

            @include atMedium {
                margin-right: 10%;
                // right: 10%;
            }

            @include atLarge {
                margin-right: 20%;
                // right: 10%;
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
        transform: skew(15deg) translateX(5.5%);
    }

    .service-group-title,
    .UiSlashBlock__content {
        opacity: 1;
    }
}
</style>
