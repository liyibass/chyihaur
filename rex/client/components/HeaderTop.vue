<template>
    <div class="HeaderTop">
        <div class="HeaderTop__logo">
            <AnimateLogoTime />
        </div>

        <div class="HeaderTop__mask">
            <HeaderTopRuler />
            <HeaderTopRuler />
        </div>
    </div>
</template>

<script>
import AnimateLogoTime from './AnimateLogoTime'
import HeaderTopRuler from './HeaderTopRuler'
export default {
    components: { AnimateLogoTime, HeaderTopRuler },
    mounted() {
        // const rulerScales = document.querySelectorAll('.HeaderTop__scales_scale')
        // rulerScales.forEach((scale, index) => {
        //     setTimeout(() => {
        //         scale.classList.add('animation')
        //     }, index * 400)
        // })
    },
}
</script>

<style lang="scss" scoped>
.HeaderTop {
    position: relative;
    height: 23px;
    width: 100%;

    border: 1px solid rgba(220, 221, 221, 0.4);
    box-shadow: 0px 1px 0px 1px rgba(135, 136, 136, 0.3);

    border-top: none;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    @include atSmall {
        height: 43px;
        margin-bottom: 10px;
    }

    &__logo {
        // position: absolute;
        // top: 0;
        // left: 0;
        height: 43px;
    }

    &__mask {
        display: flex;
        overflow: hidden;
        width: 50%;
        border-left: 1px solid rgba(220, 221, 221, 0.4);

        @include atLarge {
            width: 560px;
        }
    }
}
</style>
