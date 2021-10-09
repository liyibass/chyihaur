<template>
    <div class="round-arrow" ref="round-arrow">
        <img :src="require('@/static/images/round-arrow.svg')" alt="" />
    </div>
</template>

<script>
export default {
    mounted() {
        const arrowDOM = this.$refs['round-arrow']

        const roundArrowScene = this.$scrollmagic
            .scene({
                triggerElement: arrowDOM,
                offset: 0,
                triggerHook: 0.6,
                duration: 1000,
            })
            .setClassToggle(arrowDOM, 'active') // add class toggle

            .on('enter', () => {})
            .on('leave', () => {})

        // .addsIndicators({ name: cardId })
        this.$scrollmagic.addScene([roundArrowScene])
    },
}
</script>

<style lang="scss" scoped>
.round-arrow {
    width: 71px;
    height: 71px;
    // margin: 122px auto 0;

    @include atSmall {
        width: 101px;
        height: 101px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    opacity: 0.5;
    transform: translate(-50%, 50%) scale(0.9) !important;
    transition: all 0.5s ease-in-out;

    &.active {
        opacity: 1;
        transform: translate(-50%, 50%) scale(1) !important;
    }
}
</style>
