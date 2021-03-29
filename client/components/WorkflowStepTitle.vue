<template>
    <div class="WorkflowStepTitle" :class="{ isFocused: isFocused }">
        <div class="WorkflowStepTitle__name">
            {{ step.name }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['step', 'isFocused'],
}
</script>

<style lang="scss" scoped>
.WorkflowStepTitle {
    width: 200px;
    height: 30px;
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background: $mainGreen;
    &__name {
        z-index: 1;
        color: $mainGray;
        font-weight: bold;

        font-size: 10px;
        @include atMedium {
            font-size: 16px;
        }
    }
}
</style>
