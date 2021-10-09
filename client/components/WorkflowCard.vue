<template>
    <div class="workflow-card">
        <h1>
            <span>{{ step }}.</span>{{ name }}
        </h1>
        <p>{{ detail }}</p>
    </div>
</template>

<script>
export default {
    props: {
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
}
</script>

<style lang="scss" scoped>
.workflow-card {
    text-align: center;
    color: white;

    h1 {
        font-size: 50px;
        margin-bottom: 40px;
    }

    p {
        font-size: 25px;
    }
}
</style>
