<template>
    <div class="burger">
        <div class="burger__bar" />
        <div class="burger__bar" />
        <div class="burger__bar" />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.burger {
    width: 23px;
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &__bar {
        width: 100%;
        height: 2px;
        background: white;
    }
}
</style>
