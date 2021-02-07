<template>
    <div class="ProgressBar">
        <div class="ProgressBar__complete" :style="{ width: `${nextProgress}%` }" />

        <div class="ProgressBar__percentage" :style="{ color: percentageColor }">{{ nextProgress }}%</div>
    </div>
</template>

<script>
let prevProgress = 0
let displayProgress = 0
export default {
    props: ['nextProgress'],
    data() {
        return {
            displayProgress: 0,
        }
    },
    computed: {
        percentageColor() {
            if (this.nextProgress < 50) {
                return 'black'
            } else {
                return 'white'
            }
        },
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
.ProgressBar {
    position: relative;
    width: 100%;
    height: 36px;
    background: white;

    &__complete {
        width: 40%;
        height: 100%;
        background: $mainGreen;

        transition: 0.5s all ease-in-out;
    }

    &__percentage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        font-weight: bold;
    }
}
</style>
