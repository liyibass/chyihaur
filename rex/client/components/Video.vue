<template>
    <div class="Video">
        <div class="Video__title">
            Video
        </div>
        <div class="Video__player">
            I am Video Block(TODO)
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Video {
    background: $mainGreen;

    &__title {
        background: $mainBlue;
        color: $mainWhite;
        font-size: 14px;
        font-weight: 500;
        padding: 2px 14px;
    }

    &__player {
        min-height: 157px;
        padding: 7px;
    }

    @include atSmall {
        display: none;
    }
}
</style>
