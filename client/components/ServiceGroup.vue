<template>
    <div class="ServiceGroup">
        <!-- <ServiceGroupTitle :title="serviceGroup.title" :engTitle="serviceGroup.engTitle" /> -->

        <div class="ServiceGroup__lists">
            <ServiceCard v-for="(serviceCard, index) in serviceGroup.serviceList" :key="index" :service="serviceCard">
            </ServiceCard>
        </div>

        <div class="ServiceGroup__quote" :class="`ServiceGroup__quote_${serviceGroup.id}`" />
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
}
</script>

<style lang="scss" scoped>
.ServiceGroup {
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
        padding: 10%;
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

            justify-content: flex-start;
            padding-bottom: 0;
        }
    }

    .ServiceGroup__quote {
        position: absolute;
        top: 0;
        right: 0;
        width: 16px;
        height: 16px;
        display: none;

        @include atLarge {
            display: block;
        }
    }
}

.ServiceGroup__quote_0 {
    border: 1px solid $mainWhite;
    border-bottom: none;
    border-left: none;
}

.ServiceGroup__quote_1 {
    border: 1px solid black;
    border-bottom: none;
    border-left: none;
}
</style>
