<template>
    <div
        class="HeaderNavItem"
        :class="{ isHovered: isHovered }"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="HeaderNavItem__icon">
            <div class="HeaderNavItem__icon_wrapper" :class="`HeaderNavItem__icon_wrapper_${item.id}`">
                <img :src="item.logoUrl" alt="" />
            </div>
        </div>

        <div class="HeaderNavItem__divider" />

        <transition name="slide-fade" mode="out-in">
            <div v-if="isHovered" class="HeaderNavItem__text" key="1">{{ item.engTitle }}</div>
            <div v-else class="HeaderNavItem__text" key="2">{{ item.title }}</div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['item'],
    data() {
        return {
            isHovered: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.HeaderNavItem {
    width: 100%;
    // background: rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0);
    transition: all 0.5s ease;

    flex: 1;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;

    &__icon {
        height: 70px;
        width: 20%;
        // background: gold;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        transition: all 0.5s ease;

        &_wrapper {
            transition: all 0.5s ease;

            img {
                // max-width: 100%;
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }

        &_wrapper_0 {
            align-self: center;
            width: 40px;
            height: 40px;
        }
        &_wrapper_1 {
            align-self: flex-end;

            width: 44px;
            height: 25px;
        }
        &_wrapper_2 {
            align-self: flex-start;

            width: 20px;
            height: 46px;
        }
        &_wrapper_3 {
            align-self: flex-end;

            width: 97px;
            height: 16px;
        }
        &_wrapper_4 {
            align-self: center;

            width: 27px;
            height: 53px;
        }
    }

    &__divider {
        margin: 11px 0;
        border-bottom: 1px solid rgba(220, 221, 221, 0.4);
    }

    &__text {
        // border-left: 1px solid rgba(220, 221, 221, 0.4);
        padding: 7px 6px 0;
        margin-bottom: 7px;
        color: $mainWhite;
        line-height: 16px;
        font-size: 14px;
    }

    @include atSmall {
        display: block;
        width: auto;

        &__icon {
            height: 70px;

            width: 100%;
        }

        &__text {
            font-size: 16px;
        }
    }
}

.isHovered {
    background: rgba(0, 0, 0, 0.2);

    .HeaderNavItem__icon {
        padding-bottom: 10px;
    }
    .HeaderNavItem__icon_wrapper {
        // transform: scaleX(-1);
        animation-name: rotate;
        animation-duration: 0.5s;
    }
}

.slide-fade-enter-active {
    transition: all 0.8s ease;
}
.slide-fade-leave-active {
    transition: all 0.01s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}

@keyframes rotate {
    0% {
        transform: scaleX(0);
    }
    40% {
        transform: scaleX(-1);
    }
    80% {
        transform: scaleX(0);
    }
}
</style>
