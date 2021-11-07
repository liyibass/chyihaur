<template>
    <div class="Service" id="service">
        <div class="Service__mobile_view ">
            <div
                v-for="serviceGroup in serviceGroupList"
                :key="serviceGroup.title"
                class="service-mobile-group"
                :class="`service-mobile-group_${serviceGroup.id}`"
            >
                <ServiceGroupTitle
                    class="service-mobile-group__title"
                    :title="serviceGroup.title"
                    :engTitle="serviceGroup.engTitle"
                    :titleImage="serviceGroup.titleImage"
                />
                <ServiceGroup class="service-mobile-group__group" :serviceGroup="serviceGroup" />

                <div class="service-mobile-group__background">
                    <img :src="serviceGroup.backgroundUrl" alt="" />
                </div>
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
                    titleImage: require('@/static/images/service/service_title_1.png'),
                    engTitle: 'DESIGN',
                    backgroundUrl: require('@/static/images/service01_1.jpg'),
                    serviceList: [
                        {
                            id: 0,
                            group: 0,
                            title: '招牌設計',
                            icon: require('@/static/images/service/0.png'),
                            url: '',
                        },
                        {
                            id: 1,
                            group: 0,
                            title: '指標設計',
                            icon: require('@/static/images/service/1.png'),
                            url: '',
                        },
                        {
                            id: 2,
                            group: 0,
                            title: '平面視覺設計',
                            icon: require('@/static/images/service/2.png'),
                            url: '',
                        },
                        {
                            id: 3,
                            group: 0,
                            title: '環境視覺設計',
                            icon: require('@/static/images/service/3.png'),
                            url: '',
                        },
                        {
                            id: 4,
                            group: 0,
                            title: '企業識別',
                            icon: require('@/static/images/service/4.png'),
                            url: '',
                        },
                    ],
                },
                {
                    id: 1,
                    title: '工程',
                    titleImage: require('@/static/images/service/service_title_2.png'),
                    engTitle: 'PROJECT',
                    backgroundUrl: require('@/static/images/service02_1.jpg'),

                    serviceList: [
                        {
                            id: 5,
                            group: 1,
                            title: '意象工程',
                            icon: require('@/static/images/service/5.png'),
                            iconColor: require('@/static/images/service/5-color.png'),
                            url: '',
                        },
                        {
                            id: 6,
                            group: 1,
                            title: '招牌工程',
                            icon: require('@/static/images/service/6.png'),
                            iconColor: require('@/static/images/service/6-color.png'),
                            url: '',
                        },
                        {
                            id: 7,
                            group: 1,
                            title: '指標工程',
                            icon: require('@/static/images/service/7.png'),
                            iconColor: require('@/static/images/service/7-color.png'),
                            url: '',
                        },
                    ],
                },
                {
                    id: 2,
                    title: '影像',
                    titleImage: require('@/static/images/service/service_title_3.png'),
                    engTitle: 'PHOTOGRAPH',
                    backgroundUrl: require('@/static/images/service03.jpg'),

                    serviceList: [
                        {
                            id: 8,
                            group: 2,
                            title: '商用攝影',
                            icon: require('@/static/images/service/8.png'),
                            iconColor: require('@/static/images/service/8-color.png'),
                            url: '',
                        },
                        {
                            id: 9,
                            group: 2,
                            title: '意象攝影',
                            icon: require('@/static/images/service/9.png'),
                            iconColor: require('@/static/images/service/9-color.png'),
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
                // backgroundAttachment: 'fixed',
            }
        },
    },

    mounted() {
        const serviceGroupTitleList = document.querySelectorAll('.service-mobile-group')
        const sceneArray = []

        for (let i = 0; i < serviceGroupTitleList.length; i++) {
            const serviceGroupTitleDOM = serviceGroupTitleList[i]

            const serviceTitleScene = this.$scrollmagic
                .scene({
                    triggerElement: serviceGroupTitleDOM,
                    offset: 0,
                    triggerHook: 0.5,
                    duration: 5500,
                })
                .setClassToggle(serviceGroupTitleDOM, 'active') // add class toggle
            // .addIndicators({ name: 'workflowScene' })

            sceneArray.push(serviceTitleScene)
        }

        this.$scrollmagic.addScene(sceneArray)
        this.serviceTitleArrayScene = sceneArray
    },
    destroyed() {
        this.$scrollmagic.removeScene(this.serviceTitleArrayScene)
    },
}
</script>

<style lang="scss">
.Service {
    width: 100%;

    background: black;
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

    .service-mobile-group {
        padding: 48px 10px 60px;
        position: relative;

        opacity: 0.2;
        transition: 0.6s all ease-in-out;

        @include atSmall {
            .service-group-title {
                display: none;
            }
        }

        &__title {
            z-index: 1;
            position: relative;
            opacity: 0;
            transition: 0.3s all ease-in-out;
            transition-delay: 0.3s;
            transform: translateX(50%);
        }

        &__group {
            min-height: 70vh;
        }

        &__background {
            z-index: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.6;

            transition: 0.3s all ease-in-out;

            &::before {
                position: absolute;
                z-index: 1;
                content: '';
                background: black;
                opacity: 0.9;
                transition: 0.3s all ease-in-out;
                transition-delay: 0.3s;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        &.service-mobile-group_0 {
            .service-mobile-group__background {
                transform: translateX(-100%);
                &::before {
                    top: 0;
                    right: -150%;
                    bottom: 0;
                    left: 100%;
                    transform: skew(15deg);
                    transform-origin: 100% 100%;
                }
            }
        }
        &.service-mobile-group_1 {
            .service-mobile-group__background {
                transform: translateX(100%);
                &::before {
                    top: 0;
                    right: 100%;
                    bottom: 0;
                    left: -150%;
                    transform: skew(-15deg);
                    transform-origin: 100% 100%;
                }
            }
        }
        &.service-mobile-group_2 {
            .service-mobile-group__background {
                transform: translateX(-100%);
                &::before {
                    top: 0;
                    right: -150%;
                    bottom: 0;
                    left: 100%;
                    transform: skew(15deg);
                    transform-origin: 100% 100%;
                }
            }
        }
    }

    .active {
        opacity: 1;
        .service-mobile-group__title {
            opacity: 1;
            transform: translateX(0%) !important;
        }
        .service-mobile-group__background {
            transform: translateX(0%) !important;
            &::before {
                transform: skew(0) !important;
            }
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
