<template>
    <div
        class="HeaderNavItem"
        :class="{ isHovered: isHovered }"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <!-- <div class="HeaderNavItem__icon">
            <div class="HeaderNavItem__icon_wrapper" :class="`HeaderNavItem__icon_wrapper_${item.id}`">
                <img :src="item.logoUrl" alt="" />
            </div>
        </div> -->

        <transition name="slide-fade" mode="out-in">
            <div v-if="isHovered" class="HeaderNavItem__text" key="1">{{ item.title }}</div>
            <nobr v-else class="HeaderNavItem__text eng" key="2">{{ item.engTitle }}</nobr>
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
    height: 14px;
    // background: rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0);
    transition: all 0.5s ease;

    flex: 1;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @include atLarge {
        width: 120px;
    }

    &__text {
        // border-left: 1px solid rgba(220, 221, 221, 0.4);
        color: $mainWhite;
        font-size: 12px;
        text-align: center;
        // width: 20px;
        font-weight: bold;
        @include atLarge {
            width: 100%;
        }
    }
}

.isHovered {
    // background: rgba(0, 0, 0, 0.2);

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
    transform: translateX(0);
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
