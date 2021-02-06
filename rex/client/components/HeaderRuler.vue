<template>
    <div class="HeaderRuler">
        <div class="HeaderRuler__scale" />
        <div class="HeaderRuler__scale" />
        <div class="HeaderRuler__scale" />
        <div class="HeaderRuler__scale HeaderRuler__scale_long" />
        <div class="HeaderRuler__scale" />
        <div class="HeaderRuler__scale" />
        <div class="HeaderRuler__scale" />
        <div class="HeaderRuler__scale HeaderRuler__scale_long" />
    </div>
</template>

<script>
export default {
    mounted() {
        const rulerScales = document.querySelectorAll('.HeaderRuler__scale')
        rulerScales.forEach((scale, index) => {
            setTimeout(() => {
                scale.classList.add('animation')
            }, index * 400)
        })
    },
}
</script>

<style lang="scss" scoped>
.HeaderRuler {
    height: 30px;
    width: 100%;
    margin-bottom: 10px;

    border: 1px solid rgba(220, 221, 221, 0.4);
    box-shadow: 0px 1px 0px 1px rgba(135, 136, 136, 0.3);

    border-top: none;

    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: flex-start;

    &__scale {
        width: 70px;
        height: 50%;
        border-left: 1px solid rgba(220, 221, 221, 0.4);
        box-shadow: -1px 1px 0px 1px rgba(135, 136, 136, 0.3);
    }

    &__scale_long {
        height: 100%;
    }
}

.animation {
    animation-name: scaleGrow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes scaleGrow {
    0% {
        transform: scaleY(1);
        transform-origin: bottom;
    }
    25% {
        transform: scaleY(0.5);
    }
    50% {
        transform: scaleY(1);
    }
    100% {
        transform: scaleY(1);
    }
}
</style>
