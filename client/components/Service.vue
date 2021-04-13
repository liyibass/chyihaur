<template>
    <div class="Service" id="service">
        <div class="Service__mobile_view ">
            <div
                v-for="serviceGroup in serviceGroupList"
                :key="serviceGroup.title"
                class="group-wrapper"
                :class="`group-wrapper_${serviceGroup.id}`"
                :style="getBackgroundImage(serviceGroup.backgroundUrl)"
            >
                <ServiceGroupTitle :title="serviceGroup.title" :engTitle="serviceGroup.engTitle" />
                <ServiceGroup :serviceGroup="serviceGroup" />
            </div>
        </div>

        <div class="Service__desktop_view">
            <UiSlashBlock1 :serviceGroup="serviceGroupList[0]" />
            <UiSlashBlock2 :serviceGroup="serviceGroupList[1]" />
            <UiSlashBlock3 :serviceGroup="serviceGroupList[2]" />
        </div>

        <!-- <div class="Service__big_title">
            <img :src="require('@/static/images/title2.png')" alt="" />
        </div> -->
    </div>
</template>

<script>
import UiSlashBlock1 from '@/components/UiSlashBlock1'
import UiSlashBlock2 from '@/components/UiSlashBlock2'
import UiSlashBlock3 from '@/components/UiSlashBlock3'
import ServiceGroup from '@/components/ServiceGroup'

import ServicePagination from '@/components/ServicePagination'

import 'intersection-observer'
import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        UiSlashBlock1,
        UiSlashBlock2,
        UiSlashBlock3,
        ServiceGroup,
        Carousel,
        Slide,
        ServicePagination,
    },

    data() {
        return {
            targetIndex: 0,
            serviceGroupList: [
                {
                    id: 0,
                    title: '設計',
                    engTitle: 'DESIGN',
                    backgroundUrl: require('@/static/images/service1.jpg'),
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
                    engTitle: 'PROJECT',
                    backgroundUrl: require('@/static/images/service2.jpg'),

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
                    engTitle: 'PHOTOGRAPH',
                    backgroundUrl: require('@/static/images/service3.jpg'),

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
        getBackgroundImage(url) {
            return {
                background: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }
        },
    },

    mounted() {},
}
</script>

<style lang="scss">
.Service {
    width: 100%;

    background: $mainGreen;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    @include atSmall {
        height: auto;
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

    .group-wrapper {
        padding: 48px 0 60px;

        @include atSmall {
            .service-group-title {
                display: none;
            }
        }

        &_0 {
            background: $mainGreen;
            @include atSmall {
                background: transparent;
            }
        }
        &_1 {
            background: white;
            @include atSmall {
                background: transparent;
            }
        }
        &_2 {
            background: $mainLightGreen;
            @include atSmall {
                background: transparent;
            }
        }
    }

    &__big_title {
        z-index: 3;
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

.VueCarousel-pagination--top-overlay {
    margin-top: 50px;
}
</style>
