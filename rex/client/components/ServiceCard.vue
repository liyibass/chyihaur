<template>
    <div
        class="ServiceCard"
        :class="{ isHovered: isHovered }"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="ServiceCard__wrapper">
            <div class="ServiceCard__icon">
                <img :src="service.icon" alt="" />
            </div>

            <div class="ServiceCard__title" :class="`ServiceCard__title_${service.group}`">
                {{ service.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        service: Object,
    },

    data() {
        return {
            isHovered: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.ServiceCard {
    width: 50%;
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include atSmall {
        width: 25%;
        height: 100%;
    }

    &__wrapper {
        box-sizing: content-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        cursor: pointer;
    }

    &__icon {
        width: 85px;
        margin-bottom: 22px;
        img {
            width: 100%;
        }
    }

    &__title {
        font-size: 14px;

        @include atSmall {
            font-size: 22px;
        }
    }
}

.ServiceCard__title_0 {
    color: $mainWhite;
}

.ServiceCard__title_1 {
    color: $mainLightGreen;
}

.ServiceCard__title_2 {
    color: $mainGreen;
}

.isHovered {
    .ServiceCard__wrapper {
        background: rgba(0, 0, 0, 0.2);

        .ServiceCard__icon {
            animation-name: rotate;
            animation-duration: 0.5s;
        }
    }
}

@keyframes rotate {
    0% {
        transform: scaleX(0) translateY(0%);
        opacity: 1;
    }
    40% {
        transform: scaleX(-1) translateY(-10%);
        opacity: 1;
    }
    80% {
        transform: scaleX(0) translateY(0%);
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
