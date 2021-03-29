<template>
    <div class="UiSlashBlock">
        <div class="UiSlashBlock__left_block"></div>
        <div class="UiSlashBlock__right_block" :style="getBackgroundImage"></div>

        <div class="UiSlashBlock__content">
            <ServiceGroup :serviceGroup="serviceGroup" />
        </div>
    </div>
</template>

<script>
import slashBlockMixin from '@/mixins/slashBlockMixin'
export default {
    mixins: [slashBlockMixin],
}
</script>

<style lang="scss" scoped>
.UiSlashBlock {
    position: relative;
    width: 100vw;
    height: 60vh;
    overflow: hidden;
    background: white;

    &__left_block {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 57%;
        z-index: 1;
        background: white;
        transform: skew(-15deg) translateX(-14.5%);
        // transform-origin: top;
    }

    &__right_block {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 70%;
        background: red;
        background-size: cover;
    }

    &__content {
        left: 10%;
    }
}
</style>
