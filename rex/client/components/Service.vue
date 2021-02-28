<template>
    <div class="Service" id="service">
        <div
            v-for="(service, index) in serviceList"
            :key="index"
            class="Service__part"
            :class="`Service__part_${index}`"
        >
            <div class="Service__part_wrapper">
                <div class="Service__part_title">
                    {{ service.title }}
                </div>

                <div class="Service__part_lists">
                    <ServiceCard v-for="(serviceCard, index) in service.list" :key="index" :service="serviceCard">
                    </ServiceCard>
                </div>

                <div
                    class="Service__part_quote"
                    :class="`Service__part_quote_${index}`"
                    :style="{ right: `${25 * index}%` }"
                />
            </div>
        </div>

        <div class="Service__big_title">
            <img :src="require('@/static/images/title2.png')" alt="" />
        </div>
    </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard'

export default {
    components: {
        ServiceCard,
    },
    data() {
        return {
            serviceList: [
                {
                    title: '設計',
                    list: [
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
                    title: '工程',
                    list: [
                        {
                            id: 0,
                            group: 1,
                            title: '招牌工程',
                            icon: require('@/static/images/service/service_5.png'),
                            url: '',
                        },
                        {
                            id: 1,
                            group: 1,
                            title: '指標工程',
                            icon: require('@/static/images/service/service_6.png'),
                            url: '',
                        },
                        {
                            id: 2,
                            group: 1,
                            title: '意象工程',
                            icon: require('@/static/images/service/service_7.png'),
                            url: '',
                        },
                    ],
                },
                {
                    title: '攝影',
                    list: [
                        {
                            id: 0,
                            group: 2,
                            title: '商用攝影',
                            icon: require('@/static/images/service/service_8.png'),
                            url: '',
                        },
                        {
                            id: 1,
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

    &__part {
        position: relative;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_wrapper {
            height: 80%;
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            position: relative;
        }

        &_title {
            font-size: 39px;
        }

        &_lists {
            width: 85%;
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: row;
            align-items: stretch;
            justify-content: flex-start;
        }

        &_quote {
            position: absolute;
            top: 0;
            right: 0;
            width: 16px;
            height: 16px;
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

    &__part_0 {
        background: $mainGreen;
        .Service__part_title {
            color: $mainWhite;
        }
    }

    &__part_1 {
        background: white;
        .Service__part_title {
            color: $mainLightGreen;
        }
    }
    &__part_2 {
        background: $mainLightGreen;
        .Service__part_title {
            color: $mainGreen;
        }
    }
}

.Service__part_quote_0 {
    border: 1px solid $mainWhite;
    border-bottom: none;
    border-left: none;
}

.Service__part_quote_1 {
    border: 1px solid black;
    border-bottom: none;
    border-left: none;
}
</style>
