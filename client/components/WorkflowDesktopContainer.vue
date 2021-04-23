<template>
    <div class="workflow-container" :class="{ column: column }">
        <div class="workflow-container__scale" :class="{ show: showCard }" />

        <WorkflowDesktopCard
            v-for="workflow in cardArray"
            :key="workflow.id"
            :class="{ row: column }"
            :workflow="workflow"
            :currentId="currentId"
        />
    </div>
</template>

<script>
import WorkflowDesktopCard from '@/components/WorkflowDesktopCard'

export default {
    components: {
        WorkflowDesktopCard,
    },
    props: {
        cardArray: {
            type: Array,
            isRequired: true,
            default: () => {
                return [
                    {
                        id: 0,
                        title: '關於淇豪',
                        engTitle: 'ABOUT US',
                        link: 'about',
                        key: 'about',
                        logoUrl: require('@/static/images/logos/0.png'),
                    },
                    {
                        id: 1,
                        title: '服務項目',
                        engTitle: 'SERVICE',
                        link: 'home/#service',
                        key: 'our-service',
                        logoUrl: require('@/static/images/logos/1.png'),
                    },
                ]
            },
        },
        column: {
            type: Boolean,
            isRequired: false,
            default: () => {
                return false
            },
        },
        currentId: {
            type: Number,
            isRequired: true,
            default: () => {
                return 0
            },
        },
    },

    computed: {
        showCard() {
            return this.currentId >= this.cardArray[0].id + 1
        },
    },
}
</script>

<style lang="scss" scoped>
.workflow-container {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;

    &__scale {
        position: absolute;
        top: 58.5px;
        left: 0;
        width: 100%;
        height: 4px;
        background: white;
        opacity: 0.2;
        transform: scale(0.95);
        transition: all 0.3s ease-in-out;
        &.show {
            transform: scale(1);
            opacity: 1;
        }

        @include atUltraLarge {
            top: 84.5px;
            height: 6px;
        }
    }

    &.column {
        width: 2px;
        height: calc(100% - 36px - 96px);
        @include atUltraLarge {
            height: calc(100% - 100px - 96px);
        }
        .workflow-container__scale {
            width: 2px;
            height: 100%;
            background: white;
        }
        .workflow-card {
            position: absolute;
            top: 60.284%;
            left: -116px;
            width: 230px;
            flex-direction: row-reverse;

            @include atUltraLarge {
                width: auto;
                left: -176px;
            }
        }
    }
}
</style>
