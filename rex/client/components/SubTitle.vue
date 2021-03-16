<template>
    <div class="SubTitle" @click="chooseChapter(navItem.link)">
        <template v-if="title === '設計'">
            <div class="SubTitle__one_text">D</div>
            <div class="SubTitle__multi_text ">
                <div class="SubTitle__multi_text_up">設計</div>
                <div class="SubTitle__multi_text_down">ESIGN</div>
            </div>
        </template>

        <template v-if="title === '工程'">
            <div class="SubTitle__one_text">D</div>
            <div class="SubTitle__multi_text ">
                <div class="SubTitle__multi_text_up">工程</div>
                <div class="SubTitle__multi_text_down">EVELOPMENT</div>
            </div>
        </template>

        <template v-if="title === '影像'">
            <div class="SubTitle__one_text">I</div>
            <div class="SubTitle__multi_text ">
                <div class="SubTitle__multi_text_up">影像</div>
                <div class="SubTitle__multi_text_down">MAGE</div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
    },
    components: {},
    methods: {
        chooseChapter(newId) {
            if (newId === 'contact') {
                this.$router.push(newId)
                return
            }

            if (this.$route.name === 'contact') {
                this.$router.push('/')
            }

            const myEl = document.getElementById(`${newId}`)

            this.$smoothScroll({
                scrollTo: myEl,
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.SubTitle {
    font-family: Broadwell;
    font-weight: bold;
    color: $mainWhite;
    line-height: 30px;
    margin-bottom: 14px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    cursor: pointer;

    &__one_text {
        display: inline-block;
        font-size: 31px;
        line-height: 31px;
    }

    &__multi_text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &_up {
            display: inline-block;
            font-size: 18px;
            line-height: 18px;
        }
        &_down {
            display: inline-block;
            font-size: 10px;
            line-height: 10px;
        }
    }

    &__margin {
        margin-left: 14px;
    }
}
</style>
