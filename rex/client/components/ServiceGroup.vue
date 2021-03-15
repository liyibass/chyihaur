<template>
    <div class="ServiceGroup" :class="`ServiceGroup_${serviceGroup.id}`">
        <div class="ServiceGroup__wrapper">
            <div class="ServiceGroup__title">
                {{ serviceGroup.title }}
            </div>

            <div class="ServiceGroup__lists">
                <ServiceCard v-for="serviceCard in serviceGroup.serviceList" :key="serviceCard" :service="serviceCard">
                </ServiceCard>
            </div>

            <div
                class="ServiceGroup__quote"
                :class="`ServiceGroup__quote_${serviceGroup.id}`"
                :style="{ right: `${25 * serviceGroup.id}%` }"
            />
        </div>
    </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard'

export default {
    components: {
        ServiceCard,
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

    &__wrapper {
        height: 80%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        position: relative;
    }

    &__title {
        font-size: 25px;
        @include atSmall {
            font-size: 39px;
        }
    }

    &__lists {
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        flex-wrap: wrap;

        @include atMedium {
            width: 85%;
        }
        @include atMedium {
            justify-content: flex-start;
        }
    }

    &_0 {
        background: $mainGreen;
        .ServiceGroup__title {
            color: $mainWhite;
        }
    }

    &_1 {
        background: white;
        .ServiceGroup__title {
            color: $mainLightGreen;
        }
    }
    &_2 {
        background: $mainLightGreen;
        .ServiceGroup__title {
            color: $mainGreen;
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
