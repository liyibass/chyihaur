<template>
    <div class="HeaderTopRuler animation">
        <div class="HeaderTopRuler__wrapper">
            <div class="HeaderTopRuler__scale" />
            <div class="HeaderTopRuler__scale" />
            <div class="HeaderTopRuler__scale" />
            <div class="HeaderTopRuler__scale HeaderTopRuler__scale_long" />
            <div class="HeaderTopRuler__scale" />
            <div class="HeaderTopRuler__scale" />
            <div class="HeaderTopRuler__scale" />
            <div class="HeaderTopRuler__scale HeaderTop__scale_long" />
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.HeaderTopRuler {
    display: inline-block;
    height: 100%;
    width: 40vw;

    flex-shrink: 0;

    @include atLarge {
        width: 560px;
    }

    &__wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-end;
        justify-content: flex-start;
    }
    &__scale {
        width: calc(100% / 8);
        height: 50%;
        border-left: 1px solid rgba(220, 221, 221, 0.4);
        box-shadow: -1px 1px 0px 1px rgba(135, 136, 136, 0.3);
    }

    &__scale_long {
        height: 100%;
    }
}
.animation {
    animation-name: moveLeft;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes moveLeft {
    0% {
        transform: translateX(0);
        transform-origin: bottom;
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>
