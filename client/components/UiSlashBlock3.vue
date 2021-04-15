<template>
    <div class="UiSlashBlock UiSlashBlock_3">
        <div class="UiSlashBlock__left_block UiSlashBlock__background" :style="getBackgroundImage">
            <ServiceGroupTitle :title="serviceGroup.title" :engTitle="serviceGroup.engTitle" />
        </div>

        <div class="UiSlashBlock__right_block">
            <div class="UiSlashBlock__color"></div>

            <div class="UiSlashBlock__content">
                <ServiceGroup :serviceGroup="serviceGroup" />
            </div>
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
    background: $mainLightGreen;

    &__left_block {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 70%;
        background: red;

        .service-group-title {
            width: auto;
            position: absolute;
            bottom: 0;
            left: 0;
            margin-bottom: 0;
        }
    }

    &__right_block {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 60%;
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        .UiSlashBlock__color {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
            background: $mainLightGreen;
            transform: skew(15deg) translateX(5.5%);
        }

        .UiSlashBlock__content {
            margin-right: 10%;

            @include atMedium {
                margin-right: 15%;
                // right: 10%;
            }

            @include atLarge {
                margin-right: 20%;
                // right: 10%;
            }
        }
    }
}
</style>
