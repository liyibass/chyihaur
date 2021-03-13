<template>
    <div class="NavBarItem" @click="chooseChapter(navItem.link)">
        <template v-if="navItem.id === 0">
            <div class="NavBarItem__one_text">ABOUT</div>
            <div class="NavBarItem__multi_text NavBarItem__margin">
                <div class="NavBarItem__multi_text_up">關於淇豪</div>
                <div class="NavBarItem__multi_text_down">US</div>
            </div>
        </template>

        <template v-else-if="navItem.id === 1">
            <div class="NavBarItem__multi_text">
                <div class="NavBarItem__multi_text_up">服務項目</div>
                <div class="NavBarItem__multi_text_down">OUR</div>
            </div>
            <div class="NavBarItem__one_text NavBarItem__margin">SERVICE</div>
        </template>

        <template v-else-if="navItem.id === 2">
            <div class="NavBarItem__one_text">PORT</div>
            <div class="NavBarItem__multi_text">
                <div class="NavBarItem__multi_text_up">作品範例</div>
                <div class="NavBarItem__multi_text_down">FOLIO</div>
            </div>
        </template>

        <template v-else-if="navItem.id === 3">
            <div class="NavBarItem__multi_text">
                <div class="NavBarItem__multi_text_up">聯絡我們</div>
                <div class="NavBarItem__multi_text_down">CON</div>
            </div>
            <div class="NavBarItem__one_text">TACT</div>
        </template>

        <template v-else-if="navItem.id === 4">
            <div class="NavBarItem__multi_text">
                <div class="NavBarItem__multi_text_up">七號倉庫</div>
                <div class="NavBarItem__multi_text_down">N07</div>
            </div>
            <div class="NavBarItem__one_text NavBarItem__margin">WEARHOUSE</div>
        </template>

        <template v-else-if="navItem.id === 5"> </template>
    </div>
</template>

<script>
export default {
    props: {
        navItem: {
            type: Object,
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
.NavBarItem {
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
