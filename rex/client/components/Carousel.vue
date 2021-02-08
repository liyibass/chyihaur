<template>
    <div class="Carousel">
        <div class="Carousel__image">
            <img :src="require('@/static/images/workflow3.png')" alt="" />
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Carousel {
    width: 100%;

    .Carousel__image {
        width: 100%;
        height: 100vh;
        img {
            bottom: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }
}
</style>
