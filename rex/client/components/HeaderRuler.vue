<template>
    <div class="HeaderRuler">
        <div class="HeaderRuler__logo">
            <AnimateLogoTime />
        </div>

        <div class="HeaderRuler__scales">
            <div class="HeaderRuler__scales_scale" />
            <div class="HeaderRuler__scales_scale" />
            <div class="HeaderRuler__scales_scale" />
            <div class="HeaderRuler__scales_scale HeaderRuler__scales_scale_long" />
            <div class="HeaderRuler__scales_scale" />
            <div class="HeaderRuler__scales_scale" />
            <div class="HeaderRuler__scales_scale" />
            <div class="HeaderRuler__scales_scale HeaderRuler__scale_long" />
        </div>
    </div>
</template>

<script>
import AnimateLogoTime from './AnimateLogoTime'
export default {
    components: { AnimateLogoTime },
    mounted() {
        const rulerScales = document.querySelectorAll('.HeaderRuler__scales_scale')
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
    position: relative;
    height: 43px;
    width: 100%;
    margin-bottom: 10px;

    border: 1px solid rgba(220, 221, 221, 0.4);
    box-shadow: 0px 1px 0px 1px rgba(135, 136, 136, 0.3);

    border-top: none;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    &__logo {
        // position: absolute;
        // top: 0;
        // left: 0;
        height: 43px;
    }

    &__scales {
        height: 100%;
        width: 80%;

        display: flex;
        flex-direction: row-reverse;
        align-items: flex-end;
        justify-content: flex-start;
        &_scale {
            width: calc(100% / 8);
            height: 50%;
            border-left: 1px solid rgba(220, 221, 221, 0.4);
            box-shadow: -1px 1px 0px 1px rgba(135, 136, 136, 0.3);
        }

        &_scale_long {
            height: 100%;
        }
    }
    @include atSmall {
        &__scales {
            width: 50%;
        }
    }

    @include atLarge {
        &__scales {
            width: 560px;
        }
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
