<template>
    <div class="ServiceGroup" :class="`ServiceGroup_${serviceGroup.id}`">
        <div class="ServiceGroup__wrapper">
            <div class="ServiceGroup__header">
                <SubTitle :title="serviceGroup.title" />
            </div>

            <div class="ServiceGroup__lists">
                <ServiceCard
                    v-for="(serviceCard, index) in serviceGroup.serviceList"
                    :key="index"
                    :service="serviceCard"
                >
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
import SubTitle from '@/components/SubTitle'

export default {
    components: {
        ServiceCard,
        SubTitle,
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

    height: 100vh;

    @include atSmall {
        height: auto;
    }

    &__wrapper {
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        position: relative;

        @include atSmall {
            height: 80%;
            width: 80%;
        }
    }

    &__header {
        height: 27vh;
        padding: 40px;
        font-size: 25px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        @include atSmall {
            display: none;
            height: auto;
            font-size: 39px;
        }
    }

    &__lists {
        width: 100%;
        height: 73vh;
        padding-bottom: 40px;

        margin: auto;
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

    &_0 {
        // background: $mainGreen;
        .ServiceGroup__header {
            color: $mainWhite;
        }
    }

    &_1 {
        // background: white;
        .ServiceGroup__header {
            color: $mainLightGreen;
        }
    }
    &_2 {
        // background: $mainLightGreen;
        .ServiceGroup__header {
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
