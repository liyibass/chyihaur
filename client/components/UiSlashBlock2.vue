<template>
    <div class="UiSlashBlock UiSlashBlock_2">
        <div class="UiSlashBlock__left_block">
            <div class="UiSlashBlock__color"></div>

            <div class="UiSlashBlock__content">
                <ServiceGroup :serviceGroup="serviceGroup" />
            </div>
        </div>
        <div class="UiSlashBlock__right_block UiSlashBlock__background" :style="getBackgroundImage">
            <ServiceGroupTitle :title="serviceGroup.title" :engTitle="serviceGroup.engTitle" />
        </div>
    </div>
</template>

<script>
import slashBlockMixin from '@/mixins/slashBlockMixin'
export default {
    mixins: [slashBlockMixin],
}
</script>

<style lang="scss" scoped>
.UiSlashBlock {
    background: white;

    &__left_block {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 57%;
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        .UiSlashBlock__color {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
            background: white;
            transform: skew(-15deg) translateX(-23.5%);
        }

        .UiSlashBlock__content {
            margin-left: 5%;

            @include atMedium {
                margin-left: 10%;
                // right: 10%;
            }

            @include atLarge {
                margin-left: 15%;
                // right: 10%;
            }
        }
    }

    &__right_block {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 70%;
        background: red;
        background-size: cover;

        .service-group-title {
            width: auto;
            position: absolute;
            bottom: 0;
            right: 0;
            margin-bottom: 0;
        }
    }
}
</style>
