<template>
    <div class="workflow-icon" :class="{ isFocused: isFocused }">
        <img :src="icon" alt="" />
    </div>
</template>

<script>
export default {
    props: {
        isFocused: Boolean,
        icon: String,
    },
}
</script>

<style lang="scss" scoped>
.workflow-icon {
    width: 49px;
    // width: 150px;
    // width: calc(100% / 6 - 10px);
    img {
        width: 100%;
    }

    // opacity: 0.2;
    transition: opacity 0.5s ease;

    &.isFocused {
        width: 74px;
    }
}
</style>
