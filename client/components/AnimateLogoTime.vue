<template>
    <div class="animate-logo">
        <a class="animate-logo__logo" href="/">
            <img :src="require('@/static/images/logo_small.png')" alt="" />
        </a>

        <div class="animate-logo__date">
            <div class="animate-logo__date_year">
                <NumberJumpFromZero type="year" :targetNumber="getDate('year')" :initialNumber="1990" />
            </div>
            <div class="animate-logo__date_date">
                <NumberJumpFromZero type="dateTime" :targetNumber="getDate('monthAndDay')" :initialNumber="100" />
            </div>
        </div>
    </div>
</template>

<script>
import NumberJumpFromZero from '@/components/NumberJumpFromZero'

export default {
    data() {
        return {
            date: new Date(),
        }
    },
    componens: {
        NumberJumpFromZero,
    },
    methods: {
        getDate(desiredPart) {
            const dateString = this.date.toLocaleDateString()
            const splitedDateString = dateString.split('/')

            const monthAndDay = parseInt(splitedDateString[1]) * 100 + parseInt(splitedDateString[2])

            switch (desiredPart) {
                case 'year':
                    return parseInt(splitedDateString[0])

                case 'month':
                    return parseInt(splitedDateString[1])

                case 'day':
                    return parseInt(splitedDateString[2])

                case 'monthAndDay':
                    return monthAndDay

                default:
                    return 0
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.animate-logo {
    z-index: 100;
    height: 22px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    display: flex;
    flex-direction: row;

    @include atSmall {
        height: 42px;
    }

    &__logo {
        height: 100%;
        img {
            height: 100%;
        }
    }

    &__date {
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap');
        width: 42px;
        height: 45px;

        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(120%, -50%);

        display: none;
        flex-direction: column;
        justify-content: center;

        @include atMedium {
            display: flex;
            width: 50px;
            justify-content: space-between;
        }

        @include atLarge {
            width: 72px;
        }

        &_year {
            align-self: flex-start;
        }
        &_date {
            align-self: flex-end;
        }
    }
}
</style>
