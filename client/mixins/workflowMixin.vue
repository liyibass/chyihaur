<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            workflowList: [
                {
                    id: 0,
                    name: '初步查詢',
                    icon: require('@/static/images/workflow/workflow_1.png'),
                    detail: '依客戶心中畫面舉凡任何想法，<br />團隊將有專人紀錄並提供回饋。',
                },
                {
                    id: 1,
                    name: '現場勘查',
                    icon: require('@/static/images/workflow/workflow_2.png'),
                    detail: '安排出勤單位前往案件現場，<br />並以環境進行溝通及建議。',
                },
                {
                    id: 2,
                    name: '報價簽約',
                    icon: require('@/static/images/workflow/workflow_3.png'),
                    detail:
                        '當客戶與團隊想法一致時，<br />依建議材質進入編價程序，<br />並透過會計人員擬定合約及合理價格提供給客戶。',
                },
                {
                    id: 3,
                    name: '設計洽談',
                    icon: require('@/static/images/workflow/workflow_4.png'),
                    detail: '簽訂合約時，<br />將會了解品牌精神及商空環境，<br />替客戶思考設計每個畫面及細節。',
                },
                {
                    id: 4,
                    name: '校對製作',
                    icon: require('@/static/images/workflow/workflow_5.png'),
                    detail:
                        '簽圖面完成後，<br />設計師會再次與客戶進行全方面的校對， <br />並於後續進行備料且安排加工製程。<br />',
                },
                {
                    id: 5,
                    name: '施工驗收',
                    icon: require('@/static/images/workflow/workflow_6.png'),
                    detail: '將設計畫面進行實體化，<br />並安排專業人員現場安裝，<br />將最好的畫面留在客人的心中。',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
