<template>
    <div :id="`workflow-card-${id}`" class="workflow-card">
        <h1>
            <span>{{ step }}.</span>{{ name }}
        </h1>
        <p>{{ detail }}</p>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 0,
        },
        step: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        detail: {
            type: String,
            default: '',
        },
    },
    mounted() {
        const cardId = `#workflow-card-${this.id}`

        const workflowCardScene = this.$scrollmagic
            .scene({
                triggerElement: cardId,
                offset: 0,
                triggerHook: 0.6,
                duration: 1000,
            })
            .setClassToggle(cardId, 'active') // add class toggle

            .on('enter', () => {
                this.$emit('active', this.id)
            })
            .on('leave', () => {})

        // .addIndicators({ name: cardId })
        this.$scrollmagic.addScene([workflowCardScene])
    },
}
</script>

<style lang="scss" scoped>
.workflow-card {
    text-align: center;
    color: white;
    opacity: 0.2;
    transition: all 0.5s ease-in-out;

    h1 {
        font-size: 40px;
        margin-bottom: 10px;

        @include atMedium {
            font-size: 50px;
            margin-bottom: 40px;
        }
    }

    p {
        font-size: 15px;
        padding: 10px;
        @include atMedium {
            font-size: 25px;
        }
    }

    &.active {
        opacity: 1;
    }
}
</style>
