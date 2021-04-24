<template>
    <div
        class="ServiceCard"
        :class="{ isHovered: isHovered }"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
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

    data() {
        return {
            isHovered: false,
        }
    },
    computed: {
        setLogoColor() {
            console.log(this.color)
        },
    },
}
</script>

<style lang="scss" scoped>
.ServiceCard {
    width: 50%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px;

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
}

.ServiceCard__title_0,
.ServiceCard__title_1,
.ServiceCard__title_2 {
    color: $mainWhite;
}

.isHovered {
    .ServiceCard__wrapper {
        .ServiceCard__icon {
            animation-name: rotate;
            animation-duration: 0.5s;
        }
    }
}

@keyframes rotate {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(1.1);
        opacity: 1;
    }
}

.show_service {
    opacity: 1;
    animation-name: showup;
    animation-duration: 0.5s;
}

@keyframes showup {
    0% {
        opacity: 0;
        transform: scaleX(0) translateY(0%);
    }
    40% {
        transform: scaleX(-1) translateY(-10%);
    }
    80% {
        opacity: 1;
        transform: scaleX(0) translateY(0%);
    }
}
</style>
