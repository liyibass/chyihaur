<template>
    <transition name="showUp" mode="out-in">
        <div class="workflow-detail" v-html="returnCurrentContext" :key="curentDetailId" />
    </transition>
</template>

<script>
export default {
    props: {
        curentDetailId: Number,
        isRequired: true,
        default: () => {
            return 0
        },
    },
    computed: {
        returnCurrentContext() {
            switch (this.curentDetailId) {
                case 1:
                    return '依客戶心中畫面舉凡任何想法，<br />團隊將有專人紀錄並提供回饋。'
                case 2:
                    return '安排出勤單位前往案件現場，<br />並以環境進行溝通及建議。'
                case 3:
                    return '當客戶與團隊想法一致時，<br />依建議材質進入編價程序，<br />並透過會計人員擬定合約及合理價格提供給客戶。'
                case 4:
                    return '簽訂合約時，<br />將會了解品牌精神及商空環境，<br />替客戶思考設計每個畫面及細節。'
                case 5:
                    return '簽圖面完成後，<br />設計師會再次與客戶進行全方面的校對， <br />並於後續進行備料且安排加工製程。<br />'
                case 6:
                    return '將設計畫面進行實體化，<br />並安排專業人員現場安裝，<br />將最好的畫面留在客人的心中。'

                default:
                    return ''
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.workflow-detail {
    color: $mainWhite;
    font-size: 20px;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
}

.showUp-enter-active,
.showUp--active {
    transition: all 1s;
    transform: translateY(0%);
}
.showUp-enter, .showUp-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(40px);
}
</style>
