<template>
    <div class="UiSlashBlock">
        <div class="UiSlashBlock__left_block"></div>
        <div class="UiSlashBlock__right_block"></div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.UiSlashBlock {
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;

    &__left_block {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 70%;
        background: red;
    }

    &__right_block {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 60%;
        z-index: 1;
        background: $mainLightGreen;
        transform: skew(15deg) translateX(14.5%);
        // transform-origin: top;
    }
}
</style>
