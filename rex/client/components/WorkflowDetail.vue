<template>
    <div class="WorkflowDetail">
        <div class="WorkflowDetail__text" v-if="currentAnimate === 1">
            依顧客心中畫面舉凡任何想法，<br />
            團隊將有專人紀錄並提供回饋。
        </div>

        <div class="WorkflowDetail__text" v-else-if="currentAnimate === 2">
            安排出勤單位前往案件現場，<br />
            並以環境進行溝通及建議。
        </div>

        <div class="WorkflowDetail__text" v-else-if="currentAnimate === 3">
            （待補上）
        </div>

        <div class="WorkflowDetail__text" v-else-if="currentAnimate === 4">
            （待補上）
        </div>

        <div class="WorkflowDetail__text" v-else-if="currentAnimate === 5">
            簽圖面完成後，設計師會再次與顧客進行全方面的校對， 並於後續進行備料且安排加工製程。<br />
        </div>

        <div class="WorkflowDetail__text" v-else-if="currentAnimate === 6">
            將顧客心中的畫面進行實體化，並安排專業人員現場安裝， <br />
            將最好的畫面留在客人的心中。
        </div>
    </div>
</template>

<script>
import workflowMixin from '@/mixins/workflowMixin'

export default {
    mixins: [workflowMixin],

    props: {
        currentAnimate: Number,
    },
}
</script>

<style lang="scss" scoped>
.WorkflowDetail {
    height: 30vh;
    color: $mainWhite;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
</style>
