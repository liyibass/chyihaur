<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            workflowList: [
                { id: 0, name: '初步查詢', icon: require('@/static/images/workflow/workflow_1.png') },
                { id: 1, name: '現場勘查', icon: require('@/static/images/workflow/workflow_2.png') },
                {
                    id: 2,
                    name: '報價簽約',
                    icon: require('@/static/images/workflow/workflow_3.png'),
                },
                { id: 3, name: '設計洽談', icon: require('@/static/images/workflow/workflow_4.png') },
                {
                    id: 4,
                    name: '校對製作',
                    icon: require('@/static/images/workflow/workflow_5.png'),
                },
                {
                    id: 5,
                    name: '施工驗收',
                    icon: require('@/static/images/workflow/workflow_6.png'),
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
