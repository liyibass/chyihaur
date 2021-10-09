<template>
    <div class="workflow-page">
        <UiMainTitle title="工作流程" engTitle="WORKFLOW" />
        <div class="workflow-page__container" :style="{ background: `url(${bg})` }">
            <div v-for="step in newWorkflowList" class="workflow-page__wrapper" :key="step.id">
                <WorkflowCard :step="step.step" :name="step.name" :detail="step.detail" />

                <div class="workflow-page__arrow">
                    <img :src="require('@/static/images/round-arrow.svg')" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import workflowMixin from '@/mixins/workflowMixin'
import UiMainTitle from '@/components/UiMainTitle'
import WorkflowCard from '@/components/WorkflowCard'
import bg from '../../static/images/workflow/background.png'
export default {
    mixins: [workflowMixin],
    components: {
        UiMainTitle,
        WorkflowCard,
    },
    data() {
        return {
            bg,
            newWorkflowList: [
                {
                    id: 0,
                    step: '1',
                    name: '初步訪談',
                    detail: '瞭解企業背景文化及設計製作需求 , 預算編列',
                },
                {
                    id: 1,
                    step: '2',
                    name: '蒐集元素',
                    detail: '針對企業文化＆品牌風格，搜集元素資料討論',
                },
                {
                    id: 2,
                    step: '3',
                    name: '設計簽約',
                    detail: '針對設計需求，確認報價及簽約',
                },
                {
                    id: 3,
                    step: '4',
                    name: '初次提案',
                    detail: '依照設計方案提供手稿 視覺稿 / 合成示意 / 材質建議',
                },
                {
                    id: 4,
                    step: '5',
                    name: '討論及調整',
                    detail: '聚焦於定調方案 , 做視覺及效果細部調整',
                },
                {
                    id: 5,
                    step: '6',
                    name: '定案細部圖說',
                    detail: '針對設計需求，確認報價及簽約',
                },
                {
                    id: 6,
                    step: '7',
                    name: '工程估價',
                    detail: '針對工程圖說提供完整報價清單',
                },
                {
                    id: 7,
                    step: '8',
                    name: '工程簽約',
                    detail: '報價單細項確認及簽約',
                },
                {
                    id: 8,
                    step: '9',
                    name: '材質樣板打樣',
                    detail: '顏色確認 / 材質及樣品確認  / 燈光確認',
                },
                {
                    id: 9,
                    step: '10',
                    name: '備料製作',
                    detail: '備料製作及時程表安排 , 含前置作業路權申請',
                },
                {
                    id: 10,
                    step: '11',
                    name: '安裝施工',
                    detail: '針對工程圖說提供完整報價清單',
                },
                {
                    id: 11,
                    step: '12',
                    name: '完工驗收',
                    detail: '工程完成後進行驗收會勘',
                },
                {
                    id: 12,
                    step: '13',
                    name: '保固證書',
                    detail: '工程完成後進行驗收會勘',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.workflow-page {
    &__container {
        // padding: 255px 0 255px;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-position-x: 50% !important;
    }

    &__arrow {
        width: 101px;
        height: 101px;
        // margin: 122px auto 0;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__wrapper {
        position: relative;
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:last-child {
            .workflow-page__arrow {
                display: none !important;
            }
        }
    }
}
</style>
