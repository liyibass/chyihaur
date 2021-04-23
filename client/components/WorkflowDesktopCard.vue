<template>
    <div class="workflow-card" :class="{ show: showCard }">
        <div class="workflow-card__title">
            {{ workflow.name }}
        </div>

        <div class="workflow-card__scale"></div>

        <WorkflowIcon :icon="workflow.icon" />
    </div>
</template>

<script>
import WorkflowIcon from '@/components/WorkflowIcon'

export default {
    components: {
        WorkflowIcon,
    },
    props: {
        workflow: {
            type: Object,
            isRequired: true,
            default: () => {
                return {
                    id: 0,
                    name: '初步查詢',
                    icon: require('@/static/images/workflow/workflow_1.png'),
                    detail: '依顧客心中畫面舉凡任何想法，<br/>團隊將有專人紀錄並提供回饋。',
                }
            },
        },
        currentId: {
            type: Number,
            isRequired: true,
            default: () => {
                return 0
            },
        },
    },
    computed: {
        showCard() {
            return this.workflow.id + 1 <= this.currentId
        },
    },
}
</script>

<style lang="scss" scoped>
.workflow-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        font-size: 20px;
        color: white;
        margin-bottom: 8px;
        font-weight: bold;
    }

    &__scale {
        width: 2px;
        height: 45px;
        background: white;
        margin-bottom: 22px;
    }

    .workflow-icon {
        width: 73px;
    }

    &.row {
        .workflow-card__title {
            margin-bottom: 0;
            margin-left: 10px;
        }

        .workflow-card__scale {
            width: 45px;
            height: 4px;
            margin-bottom: 0;
            margin-left: 10px;
        }
    }

    opacity: 0.2;
    transform: scale(0.9);
    transition: all 0.3s ease-in-out;
    &.show {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
