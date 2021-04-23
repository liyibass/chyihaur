<template>
    <div class="ContactForm">
        <form @submit="submitHandler">
            <ContactFormInput v-for="field in fieldList" :key="field.title" :field="field" />

            <button class="ContactForm__submit_btn">提交</button>
        </form>
    </div>
</template>

<script>
import ContactFormInput from './ContactFormInput'
export default {
    components: { ContactFormInput },
    data() {
        return {
            fieldList: [
                { type: 'text', tag: '公司/品牌名稱', placeholder: 'Enter your company here', value: '' },
                { type: 'text', tag: '聯絡人姓名', placeholder: 'Enter your name here', value: '' },
                { type: 'text', tag: 'line ID', placeholder: 'Enter your line id here', value: '' },
                { type: 'text', tag: '電話', placeholder: 'Enter your phone here', value: '' },
                { type: 'text', tag: 'email', placeholder: 'Enter your email here', value: '' },
                { type: 'checkbox', tag: '欲洽談業務', value: [] },
                { type: 'textarea', tag: '其他需求', placeholder: '', value: '' },
            ],
        }
    },

    methods: {
        submitHandler(e) {
            e.preventDefault()
            console.log(this.fieldList)
            // Emit form to CMS (Todo)

            // this.clearFormField()

            // alert('謝謝您的訊息，我們會儘快回覆')

            // this.$router.push('/')
        },
        clearFormField() {
            this.fieldList.forEach((field) => {
                field.value = ''
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.ContactForm {
    // flex: 1;
    width: 100%;
    margin-bottom: 30px;

    @include atMedium {
        max-width: 620px;
    }

    @include atLarge {
        width: 673px;
        margin-left: 53px;
        margin-bottom: 0;
    }

    // position: absolute;
    // top: 48px;
    // right: 20px;

    &__submit_btn {
        background: rgba(34, 90, 62, 0.8);
        width: 100%;
        height: 44px;
        border: none;

        color: $mainWhite;

        cursor: pointer;
    }
}
</style>
