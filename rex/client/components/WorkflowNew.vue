<template>
    <div class="Workflow" id="workflow">
        <div class="Workflow__mobile_view ">
            <carousel
                :per-page="1"
                centerMode
                loop
                :paginationEnabled="true"
                :navigateTo="targetIndex"
                paginationPosition="bottom-overlay"
                :paginationSize="20"
                paginationColor="#dddedf"
                paginationActiveColor="#737374"
            >
                <slide v-for="workflowPage in workflowList" :key="workflowPage.title">
                    <!-- {{ workflowList.title }} -->
                    <WorkflowPage :workflowPage="workflowPage" />
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import WorkflowPage from '@/components/WorkflowPage'
import ProgressBar from '@/components/ProgressBar'
import WorkflowIcon from '@/components/WorkflowIcon'
import WorkflowDetail from '@/components/WorkflowDetail'
import workflowMixin from '@/mixins/workflowMixin'

import { Carousel, Slide } from 'vue-carousel'
export default {
    components: {
        WorkflowPage,
        Carousel,
        Slide,
        ProgressBar,
        WorkflowIcon,
        WorkflowDetail,
    },
    mixins: [workflowMixin],
    data() {
        return {
            targetIndex: 0,
            currentAnimate: 0,
        }
    },
    computed: {},

    mounted() {},
}
</script>

<style lang="scss">
.Workflow {
    background: $mainGray;
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__mobile_view {
        width: 100%;
        height: 100vh;
    }

    .VueCarousel-pagination {
        margin-bottom: 50px;
    }
}
</style>
