<template>
    <div class="AboutEmployee">
        <div class="AboutEmployee__wrapper">
            <div class="AboutEmployee__snapshot">
                <img :src="imageUrl" />
            </div>
            <div class="AboutEmployee__detail">
                <div class="AboutEmployee__detail_position">{{ employee.position.engName }}</div>
                <div class="AboutEmployee__detail_name">{{ employee.name }}</div>
                <div class="AboutEmployee__detail_detail" v-html="employee.detail" />
            </div>
        </div>
    </div>
</template>

<script>
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
import { fetchEmployee } from '~/apollo/queries/employee.gql'
export default {
    components: {
        UiEmployeeContainer,
    },

    apollo: {
        employee: {
            query: fetchEmployee,
            variables() {
                const id = this.$route.params.id
                return {
                    id: id,
                }
            },
            update: (data) => {
                return data?.employee || {}
            },
        },
    },

    data() {
        return {
            employee: {
                id: 0,
                position: '',
                name: '',
                headerUrl: {
                    urlOriginal: require('@/static/images/logo_small.png'),
                },
            },
        }
    },
    watch: {
        employee: function(val) {
            console.log(val)
        },
    },
    computed: {
        imageUrl() {
            return (
                this.employee?.headerUrl?.urlOriginal ||
                this.employee?.snapshotUrl?.urlOriginal ||
                require('@/static/images/logo_small.png')
            )
        },
    },
}
</script>

<style lang="scss" scoped>
.AboutEmployee {
    background: $mainGreen;
    padding: 50px 20px 100px;

    &__wrapper {
        width: 100%;
        max-width: 700px;
        margin: auto;

        display: flex;
        flex-direction: column;

        @include atMedium {
            flex-direction: row;
        }
    }

    &__snapshot {
        flex: 1;
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__detail {
        flex: 1;

        padding: 30px;
        color: $mainWhite;
        &_position {
            font-size: 17px;

            @include atSmall {
                font-size: 21px;
            }
            @include atLarge {
                font-size: 25px;
            }
        }
        &_name {
            font-size: 40px;
            font-family: Broadwell;
            @include atSmall {
                font-size: 44px;
            }
            @include atLarge {
                font-size: 48px;
            }
        }
        &_detail {
            padding: 20px 0;
        }
    }
}
</style>
