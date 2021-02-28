<template>
    <div class="WorkflowStep" :class="{ isFocused: isFocused }">
        <div class="WorkflowStep__color">
            <div class="WorkflowStep__color_top_color" />
            <div class="WorkflowStep__color_bottom_color" />
            <div class="WorkflowStep__color_edge_color" />
        </div>

        <div class="WorkflowStep__name">
            {{ step.name }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['step', 'isFocused'],
}
</script>

<style lang="scss" scoped>
.WorkflowStep {
    margin-right: 11px;
    flex-grow: 1;
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &__name {
        z-index: 1;
        padding-left: 18px;
        color: $mainGray;
        font-weight: bold;

        font-size: 10px;
        @include atMedium {
            font-size: 16px;
        }
    }

    &__color {
        z-index: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        &_top_color {
            position: relative;
            width: 100%;
            height: 50%;
            transform: skewX(45deg) translateX(18px);
            transform-origin: bottom;
        }
        &_bottom_color {
            width: 100%;
            height: 50%;
            transform: skewX(-45deg);
            transform-origin: bottom;
        }

        &_top_color,
        &_bottom_color,
        &_edge_color {
            background: white;
            transition: 0.5s all ease;
        }
    }

    &:first-child {
        .WorkflowStep__color_edge_color {
            width: 30px;
            height: 100%;
            background: white;
            position: absolute;
            left: 0px;
            top: 0;
        }
    }

    &:last-child {
        .WorkflowStep__color_edge_color {
            width: 30px;
            height: 100%;
            background: white;
            position: absolute;
            right: -30px;
            top: 0;
        }
    }
}

.isFocused {
    .WorkflowStep__name {
        color: white;
    }

    .WorkflowStep__color_top_color,
    .WorkflowStep__color_bottom_color,
    .WorkflowStep__color_edge_color {
        background: $mainGreen !important;
    }
}
</style>
