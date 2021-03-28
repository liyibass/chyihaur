<template>
    <div class="Contact">
        <div class="Contact__wrapper">
            <div class="Contact__background">
                <img :src="require('@/static/images/contact.png')" alt="" srcset="" />
            </div>

            <div class="Contact__up_section">
                <div class="Contact__titles">
                    <div class="Contact__titles_sub_title">
                        CHANGE FOR HUMANITY,<br />
                        CHANGE FOR YOU.<br />
                        ___<br />
                        ___<br />
                    </div>

                    <div class="Contact__titles_title" @click="goToContactPage">
                        CONTACT
                    </div>
                </div>
            </div>

            <div class="Contact__detail">
                <div class="Contact__detail_lists">
                    <div class="Contact__detail_lists_list" v-for="list in contactList" :key="list.title">
                        <span class="Contact__detail_lists_list_title">{{ list.title }}</span>
                        <span class="Contact__detail_lists_list_value">{{ list.value }}</span>
                    </div>
                </div>

                <div class="Contact__detail_business_card">
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
            contactList: [
                { title: 'PHONE', value: '02-2630-8111' },
                { title: 'EMAIL', value: 'Chyi.haur@msa.hinet.net' },
                { title: 'ADDRESS', value: '台北市內湖區康寧路三段189巷75號' },
            ],
        }
    },
    methods: {
        goToContactPage() {
            console.log('YOYO')
            this.$router.push('/contact')
        },
    },
}
</script>

<style lang="scss" scoped>
.Contact {
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
        }

        &_title {
            font-size: 40px;
            cursor: pointer;
        }
    }

    &__detail {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        &_lists {
            &_list {
                margin-bottom: 21px;
                &_title {
                    font-size: 16px;
                }
                &_value {
                    font-size: 14px;
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

            img {
                width: 100%;
                box-sizing: border-box;
            }
        }
    }

    // background: url('~@/static/images/contact.png');

    &__background {
        position: absolute;
        background: black;
        z-index: -1;
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

    @include atSmall {
        &__wrapper {
            padding: 48px 55px 37px;
        }

        &__titles {
            &_sub_title {
                font-size: 20px;
            }

            &_title {
                font-size: 58px;
            }
        }

        &__detail {
            &_lists {
                &_list {
                    &_title {
                        font-size: 20px;
                    }
                    &_value {
                        font-size: 18px;
                    }
                }
            }

            &_business_card {
                align-self: flex-start;
            }
        }
    }

    @include atMedium {
        &__detail {
            &_lists {
                &_list {
                    &_title {
                        font-size: 28px;
                    }
                    &_value {
                        font-size: 21px;
                    }
                }
            }

            &_business_card {
                width: 383px;
                align-self: initial;
            }
        }
    }

    @include atMedium {
        &__detail {
            flex-direction: row;
            align-items: flex-end;
        }
    }
    @include atUltraLarge {
        &__wrapper {
            max-width: 1000px;
        }
    }
}
</style>
