<template>
    <div class="contact-detail">
        <div class="contact-detail__lists">
            <div class="contact-detail__lists_col">
                <div class="contact-detail__lists_list" v-for="list in contactList" :key="list.title">
                    <span class="contact-detail__lists_list_title eng">{{ list.title }}</span>
                </div>
            </div>
            <div class="contact-detail__lists_col">
                <div class="contact-detail__lists_list" v-for="list in contactList" :key="list.title">
                    <span class="contact-detail__lists_list_value">{{ list.value }}</span>
                </div>
            </div>
        </div>

        <div class="contact-detail__business_card">
            <img :src="require('@/static/images/business-card.png')" alt="" />
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
.contact-detail {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @include atMedium {
        flex-direction: row;
        align-items: flex-end;
    }

    &__lists {
        display: flex;
        &_col {
            &:first-child {
                width: 120px;
                @include atSmall {
                    width: 150px;
                }

                @include atLarge {
                    width: 170px;
                }
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
                    line-height: 20px;
                }
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    &__business_card {
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
</style>
