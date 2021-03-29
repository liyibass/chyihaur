<template>
    <div class="UiSlashBlock">
        <div class="UiSlashBlock__left_block" :style="getBackgroundImage"></div>
        <div class="UiSlashBlock__right_block"></div>

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
    background: $mainGreen;

    &__left_block {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 70%;
        background: red;
        background-size: cover;
    }

    &__right_block {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 60%;
        z-index: 1;
        background: $mainGreen;
        transform: skew(15deg) translateX(5.5%);
        // transform-origin: top;
    }

    &__content {
        right: 10%;
    }
}
</style>
