<template>
    <div class="AboutEmployee">
        <div class="AboutEmployee__wrapper">
            <div class="AboutEmployee__snapshot">
                <img :src="employee.snapshotUrl" alt="" srcset="" />
            </div>
            <div class="AboutEmployee__detail">
                <div class="AboutEmployee__detail_position">{{ employee.position }}</div>
                <div class="AboutEmployee__detail_name">{{ employee.name }}</div>
                <div class="AboutEmployee__detail_detail" v-html="employee.detail" />
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import UiEmployeeContainer from '@/components/UiEmployeeContainer'
export default {
    components: {
        NavBar,
        Header,
        UiEmployeeContainer,
    },
    props: {
        employee: {
            type: Object,
            isRequired: true,
        },
    },
    mounted() {
        console.log(this.employee)
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
        flex-direction: row;
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
