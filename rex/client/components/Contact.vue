<template>
    <div class="Contact">
        <div class="Contact__wrapper">
            <div class="Contact__background">
                <img :src="require('@/static/images/contact.png')" alt="" srcset="" />
            </div>

            <div class="Contact__sub_title">
                CHANGE FOR HUMANITY,<br />
                CHANGE FOR YOU.<br />
                ___<br />
                ___<br />
            </div>

            <div class="Contact__title">
                CONTACT
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
export default {
    data() {
        return {
            contactList: [
                { title: 'PHONE', value: '02-2630-8111' },
                { title: 'EMAIL', value: 'Chyi.haur@msa.hinet.net' },
                { title: 'ADDRESS', value: '台北市內湖區康寧路三段189巷75號' },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.Contact {
    font-family: Broadwell;
    color: $mainWhite;
    width: 100%;
    height: 100vh;

    &__wrapper {
        position: relative;

        width: 100%;
        height: 100vh;
        padding: 48px 0 37px;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-self: flex-start;
        justify-content: space-between;
    }

    &__sub_title {
        font-size: 20px;
        z-index: 1;
    }

    &__title {
        z-index: 1;
        font-size: 58px;
    }

    &__detail {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        &_lists {
            &_list {
                margin-bottom: 21px;
                &_title {
                    font-size: 28px;
                }
                &_value {
                    font-size: 21px;
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        &_business_card {
            width: 383px;
            img {
                width: 100%;
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
        width: 100%;
        height: 100%;
        img {
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
    }
    @include atUltraLarge {
        &__wrapper {
            max-width: 1000px;
        }
    }
}
</style>
