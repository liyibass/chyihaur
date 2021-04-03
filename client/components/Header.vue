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
    height: 72px;
    position: relative;
    background: $mainGreen;
    padding: 16px 20px;

    @include atMedium {
        padding: 16px 62px;
    }

    @include atLarge {
        padding: 10px 62px;
    }

    &__wrapper {
        height: 100%;
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
