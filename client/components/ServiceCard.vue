<template>
    <div :id="`service-card-${service.id}`" class="ServiceCard">
        <div class="ServiceCard__wrapper">
            <div class="ServiceCard__icon">
                <picture>
                    <source media="(min-width:480px)" :srcset="service.iconColor ? service.iconColor : service.color" />
                    <img :src="service.icon" :alt="service.name" />
                </picture>
            </div>

            <nobr class="ServiceCard__title" :class="`ServiceCard__title_${service.group}`">
                {{ service.title }}
            </nobr>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        service: Object,
        color: Number,
    },

    computed: {
        setLogoColor() {
            console.log(this.color)
        },
    },

    mounted() {
        const cardId = `#service-card-${this.service.id}`

        const serviceCardScene = this.$scrollmagic
            .scene({
                triggerElement: cardId,
                offset: 0,
                triggerHook: 0.6,
                duration: 1000,
            })
            .setClassToggle(cardId, 'active') // add class toggle

            .on('enter', () => {})
            .on('leave', () => {})

        // .addsIndicators({ name: cardId })
        this.$scrollmagic.addScene([serviceCardScene])
    },
}
</script>

<style lang="scss" scoped>
.ServiceCard {
    width: 80%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px;
    opacity: 0.7;
    transform: scale(0.7);
    transition: all 0.6s ease-in-out;

    @include atSmall {
        width: 33%;
        height: 50%;
    }

    &__wrapper {
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__icon {
        width: 85px;
        height: 90px;
        margin-bottom: 18px;
        img {
            width: 100%;
        }

        @include atSmall {
            width: 60px;
            height: 65px;
        }

        @include atLarge {
            width: 80px;
            height: 85px;
        }

        @include atUltraLarge {
            width: 115px;
            height: 120px;
        }
    }

    &__title {
        font-size: 12px;

        @include atSmall {
            font-size: 14px;
        }

        @include atLarge {
            font-size: 16px;
        }

        @include atUltraLarge {
            font-size: 24px;
        }
    }

    &.active {
        transform: scale(1);
        opacity: 1;
    }
}

.ServiceCard__title_0 {
    color: $mainWhite;
}
.ServiceCard__title_1 {
    color: rgb(41, 83, 52);
}

.ServiceCard__title_2 {
    color: rgb(41, 83, 52);
}
</style>
