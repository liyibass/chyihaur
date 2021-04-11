<template>
    <div class="header">
        <div class="header__wrapper">
            <AnimateLogoTime />
            <HeaderContent />
        </div>
    </div>
</template>

<script>
import AnimateLogoTime from './AnimateLogoTime'

import HeaderContent from './HeaderContent'
export default {
    components: {
        AnimateLogoTime,
        HeaderContent,
    },
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    // height: 72px;
    position: relative;
    background: $mainGreen;
    padding: 13px 18px;

    @include atMedium {
        padding: 14px 62px;
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
