<template>
    <div class="workflow-sidebar">
        <transition name="fade" mode="out-in">
            <h1 :key="showedTitle">{{ showedTitle }}</h1>
        </transition>

        <transition name="fade" mode="out-in">
            <p :key="showedDetail">{{ showedDetail }}</p>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        currentStepId: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        showedTitle() {
            if (this.currentStepId < 3) {
                return 'PROPHASE'
            } else if (this.currentStepId < 8) {
                return 'METAPHASE'
            } else {
                return 'ANAPHASE'
            }
        },
        showedDetail() {
            if (this.currentStepId < 3) {
                return '前 期 作 業'
            } else if (this.currentStepId < 8) {
                return '中 期 製 程'
            } else {
                return '後 期 完 工'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.workflow-sidebar {
    height: 100vh;
    width: 73px;
    background: rgb(27, 90, 125);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(219, 220, 220);

    h1 {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        font-family: Broadwell;
        font-size: 48px;
        margin-bottom: 40px;
    }

    p {
        writing-mode: vertical-rl;
        font-size: 24px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
