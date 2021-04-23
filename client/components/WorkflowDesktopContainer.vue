<template>
    <div class="workflow-container" :class="{ column: column }">
        <div class="workflow-container__scale" />

        <WorkflowDesktopCard
            v-for="workflow in cardArray"
            :key="workflow"
            :class="{ row: column }"
            :workflow="workflow"
        />
    </div>
</template>

<script>
import WorkflowDesktopCard from '@/components/WorkflowDesktopCard'

export default {
    components: {
        WorkflowDesktopCard,
    },
    props: {
        cardArray: Array,
        isRequired: true,
        default: () => {
            return []
        },
        column: Boolean,
        isRequired: false,
        default: () => {
            return false
        },
    },
}
</script>

<style lang="scss" scoped>
.workflow-container {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;

    &__scale {
        position: absolute;
        top: 58.5px;
        left: 0;
        width: 100%;
        height: 4px;
        background: white;
    }

    &.column {
        background: white;
        width: 2px;
        height: calc(100% - 36px - 96px);

        .workflow-card {
            position: absolute;
            top: 60%;
            left: -116px;
            width: 230px;
            flex-direction: row-reverse;
        }
    }
}
</style>
