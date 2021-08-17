<template>
    <div class="ContactForm">
        <form @submit="submitHandler">
            <ContactFormInput
                v-for="field in fieldList"
                :key="field.title"
                :field="field"
                v-model="field.value"
            />

            <button class="ContactForm__submit_btn">提交</button>
        </form>
    </div>
</template>

<script>
import ContactFormInput from './ContactFormInput'
import { emitContact } from '../utils/contactHandler'
export default {
    components: { ContactFormInput },
    data() {
        return {
            fieldList: [
                {
                    type: 'text',
                    tag: '公司/品牌名稱',
                    placeholder: 'Enter your company here',
                    key: 'company',
                    value: '',
                },
                {
                    type: 'text',
                    tag: '聯絡人姓名',
                    placeholder: 'Enter your name here',
                    key: 'name',
                    value: '',
                },
                {
                    type: 'text',
                    tag: 'line ID',
                    placeholder: 'Enter your line id here',
                    key: 'line',
                    value: '',
                },
                {
                    type: 'text',
                    tag: '電話',
                    placeholder: 'Enter your phone here',
                    key: 'phone',
                    value: '',
                },
                {
                    type: 'text',
                    tag: 'email',
                    placeholder: 'Enter your email here',
                    key: 'email',
                    value: '',
                },
                {
                    type: 'checkbox',
                    tag: '欲洽談業務',
                    key: 'business',
                    value: '',
                },
                {
                    type: 'textarea',
                    tag: '其他需求',
                    placeholder: '',
                    key: 'other',
                    value: '',
                },
            ],
        }
    },

    methods: {
        async submitHandler(e) {
            e.preventDefault()

            const variables = {}
            this.fieldList.forEach((field) => {
                variables[`${field.key}`] = field.value
            })

            await emitContact(variables)

            // Emit form to CMS (Todo)

            this.clearFormField()

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
