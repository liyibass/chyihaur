<template>
    <div class="MainTitle" @click="chooseChapter(link)">
        <template v-if="title === 'about'">
            <div class="MainTitle__one_text">ABOUT</div>
            <div class="MainTitle__multi_text MainTitle__margin">
                <div class="MainTitle__multi_text_up">關於淇豪</div>
                <div class="MainTitle__multi_text_down">US</div>
            </div>
        </template>

        <template v-else-if="title === 'our-service'">
            <div class="MainTitle__multi_text">
                <div class="MainTitle__multi_text_up">服務項目</div>
                <div class="MainTitle__multi_text_down">OUR</div>
            </div>
            <div class="MainTitle__one_text MainTitle__margin">SERVICE</div>
        </template>

        <template v-else-if="title === 'workflow'">
            <div class="MainTitle__multi_text">
                <div class="MainTitle__multi_text_up">工作流程</div>
                <div class="MainTitle__multi_text_down">WORK</div>
            </div>
            <div class="MainTitle__one_text ">FLOW</div>
        </template>

        <template v-else-if="title === 'portfolio'">
            <div class="MainTitle__one_text">PORT</div>
            <div class="MainTitle__multi_text">
                <div class="MainTitle__multi_text_up">作品範例</div>
                <div class="MainTitle__multi_text_down">FOLIO</div>
            </div>
        </template>

        <template v-else-if="title === 'contact'">
            <div class="MainTitle__multi_text">
                <div class="MainTitle__multi_text_up">聯絡我們</div>
                <div class="MainTitle__multi_text_down">CON</div>
            </div>
            <div class="MainTitle__one_text">TACT</div>
        </template>

        <template v-else-if="title === 'n07-warehouse'">
            <div class="MainTitle__multi_text">
                <div class="MainTitle__multi_text_up">七號倉庫</div>
                <div class="MainTitle__multi_text_down">N07</div>
            </div>
            <div class="MainTitle__one_text MainTitle__margin">WEARHOUSE</div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        link: {
            type: String,
        },
    },
    components: {},
    methods: {
        chooseChapter(link) {
            if (!link) return

            const linkArray = link.split('#')
            const linkIsAnId = linkArray.length > 1
            if (linkIsAnId) {
                if (this.$route.name !== 'index') this.$router.push('/')

                const myEl = document.getElementById(`${linkArray[1]}`)
                this.$smoothScroll({
                    scrollTo: myEl,
                })
                return
            }

            this.$router.push(link)
        },
    },
}
</script>

<style lang="scss" scoped>
.MainTitle {
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
            font-size: 8px;
            line-height: 8px;
        }
        &_down {
            display: inline-block;
            font-size: 22px;
            line-height: 22px;
        }
    }

    &__margin {
        margin-left: 14px;
    }
}
</style>
