<template>
    <div class="ServiceGroup">
        <!-- <ServiceGroupTitle :title="serviceGroup.title" :engTitle="serviceGroup.engTitle" /> -->

        <div class="ServiceGroup__lists" :style="{ justifyContent: justifyContent }">
            <ServiceCard
                v-for="(serviceCard, index) in serviceGroup.serviceList"
                :key="index"
                :service="serviceCard"
                :color="serviceGroup.id"
            >
            </ServiceCard>
        </div>
    </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard'
import ServiceGroupTitle from '@/components/ServiceGroupTitle'

export default {
    components: {
        ServiceCard,
        ServiceGroupTitle,
    },

    props: {
        serviceGroup: {
            type: Object,
            isRequired: true,
            default: () => {
                return {}
            },
        },
    },
    computed: {
        justifyContent() {
            if (this.serviceGroup.serviceList.length >= 5) {
                return 'flex-end'
            } else {
                return 'space-evenly'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.ServiceGroup {
    z-index: 1;
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10%;
    min-height: 400px;

    @include atSmall {
        min-height: auto;
        padding: 5%;
    }

    &__lists {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;

        @include atSmall {
            height: 100%;
            flex-direction: row;

            justify-content: center;
            padding-bottom: 0;
        }
    }

    &_image {
        position: relative;
        top: 0;
        left: 0;
        width: 129.84%;
        // height: 100%;
        padding: 0px;

        @include atSmall {
            width: 100%;
        }
        @include atMedium {
            width: 100%;
            padding-bottom: 80px;
        }
        @include atLarge {
            width: 130%;
            padding-bottom: 39px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            opacity: 0;
            transition: all 0.5s ease-in-out;
            transition-delay: 0.7s;
        }
    }
}
</style>
