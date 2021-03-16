<template>
    <div class="pagination">
        <div
            v-for="(page, index) in pageArray"
            :key="index"
            class="pagination__dot"
            :class="{ current_dot: index === currentIndex }"
        />
    </div>
</template>

<script>
export default {
    props: {
        currentIndex: {
            type: Number,
            isRequired: true,
            default: 0,
        },
        pageArray: {
            type: Array,
            isRequired: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.pagination {
    width: 68px;
    height: 16px;
    margin: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &__dot {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: $mainWhite;
    }
}

.current_dot {
    background: rgb(104, 100, 100);
}
</style>
