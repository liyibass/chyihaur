<template>
    <div class="Service" id="service">
        <div class="Service__main_title">
            <MainTitle title="our-service" />
            <ServicePagination :currentIndex="targetIndex" :pageArray="serviceGroupList" />
        </div>

        <div class="Service__desktop_view">
            <UiSlashBlock />
            <UiSlashBlock2 />
            <UiSlashBlock3 />
            <!-- <ServiceGroup v-for="(serviceGroup, index) in serviceGroupList" :key="index" :serviceGroup="serviceGroup" /> -->
        </div>

        <div class="Service__mobile_view ">
            <carousel :per-page="1" centerMode loop :paginationEnabled="false" :navigateTo="targetIndex">
                <slide v-for="serviceGroup in serviceGroupList" :key="serviceGroup.title">
                    <ServiceGroup :serviceGroup="serviceGroup" />
                </slide>
            </carousel>

            <div class="slideshowCtrl-prev" @click="prevPage" />
            <div class="slideshowCtrl-next" @click="nextPage" />
        </div>

        <div class="Service__big_title">
            <img :src="require('@/static/images/title2.png')" alt="" />
        </div>
    </div>
</template>

<script>
import ServiceGroup from '@/components/ServiceGroup'
import UiSlashBlock from '@/components/UiSlashBlock'
import UiSlashBlock2 from '@/components/UiSlashBlock2'
import UiSlashBlock3 from '@/components/UiSlashBlock3'
import MainTitle from '@/components/MainTitle'
import ServicePagination from '@/components/ServicePagination'

import 'intersection-observer'
import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        UiSlashBlock,
        UiSlashBlock2,
        UiSlashBlock3,
        ServiceGroup,
        Carousel,
        Slide,
        MainTitle,
        ServicePagination,
    },
    data() {
        return {
            // currentIndex: 0,
            targetIndex: 0,
            serviceGroupList: [
                {
                    id: 0,
                    title: '設計',
                    serviceList: [
                        {
                            id: 0,
                            group: 0,
                            title: '招牌設計',
                            icon: require('@/static/images/service/service_1.png'),
                            url: '',
                        },
                        {
                            id: 1,
                            group: 0,
                            title: '指標設計',
                            icon: require('@/static/images/service/service_2.png'),
                            url: '',
                        },
                        {
                            id: 2,
                            group: 0,
                            title: '平面視覺設計',
                            icon: require('@/static/images/service/service_3.png'),
                            url: '',
                        },
                        {
                            id: 3,
                            group: 0,
                            title: '環境視覺設計',
                            icon: require('@/static/images/service/service_4.png'),
                            url: '',
                        },
                    ],
                },
                {
                    id: 1,
                    title: '工程',
                    serviceList: [
                        {
                            id: 4,
                            group: 1,
                            title: '招牌工程',
                            icon: require('@/static/images/service/service_5.png'),
                            url: '',
                        },
                        {
                            id: 5,
                            group: 1,
                            title: '指標工程',
                            icon: require('@/static/images/service/service_6.png'),
                            url: '',
                        },
                        {
                            id: 6,
                            group: 1,
                            title: '意象工程',
                            icon: require('@/static/images/service/service_7.png'),
                            url: '',
                        },
                    ],
                },
                {
                    id: 2,
                    title: '影像',
                    serviceList: [
                        {
                            id: 7,
                            group: 2,
                            title: '商用攝影',
                            icon: require('@/static/images/service/service_8.png'),
                            url: '',
                        },
                        {
                            id: 8,
                            group: 2,
                            title: '意象攝影',
                            icon: require('@/static/images/service/service_9.png'),
                            url: '',
                        },
                    ],
                },
            ],
        }
    },

    methods: {
        // pageChangeHandler(number) {
        //     this.currentIndex = number
        // },
        prevPage() {
            this.targetIndex = this.targetIndex === 0 ? this.serviceGroupList.length - 1 : this.targetIndex - 1
        },
        nextPage() {
            this.targetIndex = this.targetIndex === this.serviceGroupList.length - 1 ? 0 : this.targetIndex + 1
        },
    },

    mounted() {
        const allServices = document.querySelectorAll('.ServiceCard')

        // // instantiate the scrollama
        // const showServiceScroller = scrollama()

        // // setup the instance, pass callback functions
        // showServiceScroller
        //     .setup({
        //         step: '.Service',
        //         offset: 0.6,
        //     })
        //     .onStepEnter((response) => {
        //         // { element, index, direction }
        //         allServices.forEach((service, index) => {
        //             setTimeout(() => {
        //                 service.classList.add('show_service')
        //             }, index * 100)
        //         })
        //     })
        //     .onStepExit((response) => {
        //         // console.log('hide service')
        //         // { element, index, direction }
        //     })

        // // setup resize event
        // window.addEventListener('resize', showServiceScroller.resize)

        // const hideServiceScroller = scrollama()
        // hideServiceScroller
        //     .setup({
        //         step: '.Service',
        //         offset: 0.5,
        //     })
        //     .onStepExit((response) => {
        //         allServices.forEach((service, index) => {
        //             service.classList.remove('show_service')
        //         })
        //     })

        // // setup resize event
        // window.addEventListener('resize', hideServiceScroller.resize)
    },
}
</script>

<style lang="scss" scoped>
.Service {
    width: 100%;
    height: 100vh;

    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    @include atSmall {
        height: auto;
    }

    &__main_title {
        z-index: 2;
        position: absolute;
        top: 22px;
        left: 50%;

        height: 9vh;
        transform: translateX(-50%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        @include atSmall {
            display: none;
        }
    }

    &__big_title {
        width: 67px;
        position: absolute;
        top: 0;
        right: 10px;
        transform: translateY(-53%);

        opacity: 0.3;
        img {
            width: 100%;
        }
    }

    &__mobile_view {
        position: relative;
        @include atSmall {
            display: none;
        }
    }

    &__desktop_view {
        display: none;
        @include atSmall {
            display: flex;
            flex-direction: column;
        }
    }
}

// .VueCarousel-pagination {
//     background: transparent;
//     position: absolute;
//     top: 20%;
//     left: 0;

//     @include atSmall {
//         display: none;
//     }
// }

.slideshowCtrl-prev,
.slideshowCtrl-next {
    height: 100%;
    width: 17%;
    position: absolute;
    top: 0;
}

.slideshowCtrl-prev {
    left: 0;
    // background: gray;
    // opacity: 0.5;
}
.slideshowCtrl-next {
    right: 0;
    // background: gray;
    // opacity: 0.5;
}
</style>
