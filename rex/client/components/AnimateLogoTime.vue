<template>
    <div class="AnimateLogoTime">
        <div class="AnimateLogoTime__logo">
            <img :src="require('@/static/images/logo_small.png')" alt="" />
        </div>

        <div class="AnimateLogoTime__date">
            <div class="AnimateLogoTime__date_year">{{ getDate('year') }}</div>
            <div class="AnimateLogoTime__date_date">{{ getDate('month') }}{{ getDate('day') }}</div>
        </div>
    </div>
</template>

<script>
function addZeroHandler(number) {
    if (parseInt(number) > 10) {
        return number
    } else {
        return '0' + number
    }
}
export default {
    data() {
        return {
            date: new Date(),
        }
    },

    methods: {
        getDate(desiredPart) {
            const dateString = this.date.toLocaleDateString()
            const splitedDateString = dateString.split('/')
            switch (desiredPart) {
                case 'year':
                    return splitedDateString[0]

                case 'month':
                    return addZeroHandler(splitedDateString[1])

                case 'day':
                    return addZeroHandler(splitedDateString[2])

                default:
                    return ''
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.AnimateLogoTime {
    z-index: 100;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: row;

    &__logo {
        height: 100%;
        margin-right: 13px;
        img {
            height: 100%;
        }
    }

    &__date {
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap');
        width: 56px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        font-family: 'Rubik', sans-serif;
        color: $mainWhite;
        font-size: 15px;
        font-weight: 500;

        &_year {
            align-self: flex-start;
        }
        &_date {
            align-self: flex-end;
        }
    }
}
</style>
