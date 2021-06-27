<template>
    <div class="ContactSimple">
        <div class="ContactSimple__wrapper">
            <div class="ContactSimple__background">
                <img :src="require('@/static/images/Contact.png')" alt="" srcset="" />
            </div>

            <div class="ContactSimple__up_section">
                <div class="ContactSimple__titles">
                    <div class="ContactSimple__titles_sub_title">
                        CHANGE FOR HUMANITY,<br />
                        CHANGE FOR YOU.<br />
                        ___<br />
                        ___<br />
                    </div>

                    <div class="ContactSimple__titles_title" @click="goToContactPage">
                        Contact
                    </div>
                </div>
            </div>

            <div class="ContactSimple__detail">
                <div class="ContactSimple__detail_lists">
                    <div class="ContactSimple__detail_lists_col">
                        <div class="ContactSimple__detail_lists_list" v-for="list in ContactList" :key="list.title">
                            <span class="ContactSimple__detail_lists_list_title">{{ list.title }}</span>
                        </div>
                    </div>
                    <div class="ContactSimple__detail_lists_col">
                        <div class="ContactSimple__detail_lists_list" v-for="list in ContactList" :key="list.title">
                            <span class="ContactSimple__detail_lists_list_value">{{ list.value }}</span>
                        </div>
                    </div>
                </div>

                <div class="ContactSimple__detail_business_card">
                    <img :src="require('@/static/images/business-card.png')" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            ContactList: [
                { title: 'PHONE', value: '02-2630-8111' },
                { title: 'EMAIL', value: 'Chyi.haur@msa.hinet.net' },
                { title: 'ADDRESS', value: '台北市內湖區康寧路三段189巷75號' },
            ],
        }
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
    font-family: Broadwell;
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

    &__detail {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        &_lists {
            display: flex;
            &_col {
                &:first-child {
                    width: 120px;
                }
            }

            &_list {
                margin-bottom: 21px;
                &_title {
                    font-size: 16px;
                    line-height: 16px;
                    @include atSmall {
                        font-size: 20px;
                    }
                    @include atLarge {
                        font-size: 28px;
                    }
                }
                &_value {
                    font-size: 14px;
                    line-height: 16px;
                    @include atSmall {
                        font-size: 18px;
                    }
                    @include atLarge {
                        font-size: 21px;
                    }
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        &_business_card {
            width: 200px;
            align-self: center;
            margin-top: 20px;

            @include atSmall {
                align-self: flex-start;
            }

            img {
                width: 100%;
                box-sizing: border-box;
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

    @include atMedium {
        &__detail {
            flex-direction: row;
            align-items: flex-end;
        }
    }
}
</style>
