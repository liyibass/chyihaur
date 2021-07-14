<template>
    <div class="ContactSimple">
        <div class="ContactSimple__wrapper">
            <div class="ContactSimple__background">
                <img :src="require('@/static/images/Contact.png')" alt="" srcset="" />
            </div>

            <div class="ContactSimple__up_section">
                <div class="ContactSimple__titles">
                    <div class="ContactSimple__titles_sub_title eng">
                        CHANGE FOR HUMANITY,<br />
                        CHANGE FOR YOU.<br />
                        ___<br />
                        ___<br />
                    </div>

                    <div class="ContactSimple__titles_title eng" @click="goToContactPage">
                        Contact
                    </div>
                </div>
            </div>

            <ContactDetail />
        </div>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import ContactDetail from '@/components/ContactDetail'

export default {
    components: {
        ContactForm,
        ContactDetail,
    },

    methods: {
        goToContactPage() {
            console.log('YOYO')
            this.$router.push('/Contact')
        },
    },
}
</script>

<style lang="scss" scoped>
.ContactSimple {
    position: relative;

    color: $mainWhite;
    width: 100%;
    height: 100vh;

    &__wrapper {
        position: relative;

        width: 100%;
        height: 100vh;
        padding: 48px 20px 37px;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-self: flex-start;
        justify-content: space-between;

        @include atSmall {
            padding: 48px 55px 37px;
        }
    }

    &__up_section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__titles {
        z-index: 1;
        &_sub_title {
            font-size: 14px;

            @include atSmall {
                font-size: 17px;
            }
            @include atLarge {
                font-size: 20px;
            }
        }

        &_title {
            font-size: 40px;
            cursor: pointer;

            @include atSmall {
                font-size: 50px;
            }
            @include atLarge {
                font-size: 58px;
            }
        }
    }

    // background: url('~@/static/images/ContactSimple.png');

    &__background {
        position: absolute;
        background: black;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        img {
            box-sizing: border-box;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
