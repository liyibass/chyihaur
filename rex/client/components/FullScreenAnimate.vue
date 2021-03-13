<template>
    <div class="FullScreenAnimate">
        <div class="FullScreenAnimate__gif">
            <img :src="require('@/static/images/logo-transform.gif')" alt="" srcset="" />
            <!-- <div class="FullScreenAnimate__border"></div>
        <div class="FullScreenAnimate__degree"></div>
        <div class="FullScreenAnimate__c"></div>
        <div class="FullScreenAnimate__h"></div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['setPlayedAnimation'],
    mounted() {
        this.setPlayedAnimation()
    },
}
</script>

<style lang="scss" scoped>
.FullScreenAnimate {
    height: 100vh;
    width: 100vw;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;

    background: rgb(238, 238, 238);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__gif {
        width: 70%;
        // height: 70%;
        margin: 10px;
        box-sizing: content-box;
        box-shadow: 0 0 50px 50px rgba(238, 238, 238, 1);
        img {
            opacity: 0.7;
            width: 100%;
            // height: 100%;
            object-fit: fit;
        }
    }
}
</style>
