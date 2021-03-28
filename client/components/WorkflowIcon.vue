<template>
    <div class="WorkflowIcon" :class="{ isFocused: isFocused }">
        <img :src="step.icon" alt="" />
    </div>
</template>

<script>
export default {
    props: {
        isFocused: Boolean,
        step: Object,
    },
}
</script>

<style lang="scss" scoped>
.WorkflowIcon {
    width: 150px;
    // width: calc(100% / 6 - 10px);
    margin-bottom: 22px;
    img {
        width: 100%;
    }

    opacity: 0.2;
    transition: opacity 0.5s ease;
}

.isFocused {
    animation-name: flip;
    animation-duration: 0.5s;
    opacity: 1;
}

@keyframes flip {
    0% {
        opacity: 0.2;
        transform: translateY(0%) scaleX(0);
    }
    40% {
        opacity: 1 !important;
        transform: translateY(-20%) scaleX(-1);
    }
    80% {
        opacity: 1 !important;
        transform: translateY(0%) scaleX(0);
    }
}
</style>
