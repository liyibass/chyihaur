<template>
    <div class="WorkflowPage">
        <div class="WorkflowPage__title">
            <WorkflowStep :step="workflowPage" :isFocused="true" />
        </div>

        <div class="WorkflowPage__content">
            <WorkflowIcon :step="workflowPage" :isFocused="true" />

            <div class="WorkflowPage__content_detail">
                <WorkflowDetail :curentDetailId="workflowPage.id" />
            </div>
        </div>

        <div class="WorkflowPage__hide" />
    </div>
</template>

<script>
import WorkflowStep from '@/components/WorkflowStep'
import WorkflowIcon from '@/components/WorkflowIcon'
import WorkflowDetail from '@/components/WorkflowDetail'

export default {
    props: {
        workflowPage: {
            type: Object,
            isRequired: true,
        },
    },
    components: {
        WorkflowStep,
        WorkflowIcon,
        WorkflowDetail,
    },
}
</script>

<style lang="scss" scoped>
.WorkflowPage {
    position: relative;
    width: 100%;
    height: 100vh;

    padding: 50px 20px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &__title {
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>
