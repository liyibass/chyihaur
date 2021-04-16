<template>
    <div class="header" :style="{ top: getTopHeight }">
        <div class="header__wrapper">
            <AnimateLogoTime />
            <HeaderContent />
        </div>
    </div>
</template>

<script>
import AnimateLogoTime from './AnimateLogoTime'

import HeaderContent from './HeaderContent'
import { setScrollDirection } from '../utils/getScrollDirection'

export default {
    components: {
        AnimateLogoTime,
        HeaderContent,
    },
    data() {
        return {
            navBarIsOpen: false,
            direction: 'up',
        }
    },
    computed: {
        getNavContainerCSS() {
            if (this.navBarIsOpen) {
                return { transform: 'translateX(0%)' }
            } else {
                return { transform: 'translateX(100%)' }
            }
        },
        getTopHeight() {
            // console.log(this.direction)
            if (this.direction === 'down') {
                return '-200px'
            } else {
                return '0px'
            }
        },
    },
    mounted() {
        setScrollDirection(this)
    },
}
</script>

<style lang="scss" scoped>
.header {
    z-index: 9999;
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    // height: 72px;
    background: $mainGreen;
    padding: 13px 18px;
    transition: top 0.5s ease;

    @include atMedium {
        padding: 26px 62px;
    }

    &__wrapper {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        @include atSmall {
            flex-direction: row;
        }
    }

    // margin-bottom: 16px;
}
</style>
