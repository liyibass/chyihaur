<template>
    <div class="OverflowImage">
        <div class="OverflowImage__image1">
            <img :src="require('@/static/images/workflow1.png')" alt="" />
        </div>
        <div class="OverflowImage__image2">
            <img :src="require('@/static/images/workflow2.png')" alt="" />
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.OverflowImage {
    width: 100%;
    height: 17.175vh;

    display: flex;
    flex-direction: row;
    align-items: flex-end;

    overflow: hidden;
    @include atLarge {
        overflow: initial;
    }

    .OverflowImage__image1 {
        width: 50%;
        height: 100%;
        img {
            bottom: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }
    .OverflowImage__image2 {
        width: 50%;
        height: 50.508vh;
        img {
            bottom: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
}
</style>
