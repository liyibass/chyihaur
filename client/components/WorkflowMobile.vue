<template>
    <div class="WorkflowMobile" id="workflowMobile">
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
}
</script>

<style lang="scss">
.WorkflowMobile {
    background: $mainGray;
    width: 100%;
    height: 100vh;
    position: relative;

    @include atSmall {
        display: none;
    }

    .VueCarousel-pagination {
        margin-bottom: 50px;
    }
}
</style>
