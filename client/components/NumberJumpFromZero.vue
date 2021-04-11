<template>
    <span class="jump-from-zero">{{ addZeroHandler(currentNumber) }}</span>
</template>
<script>
export default {
    props: {
        targetNumber: {
            type: Number,
            isRequired: true,
            default: () => {
                return 0
            },
        },
        initialNumber: {
            type: Number,
            isRequired: true,
            default: () => {
                return 0
            },
        },
        type: {
            type: String,
            isRequired: true,
            default: () => {
                return 'year'
            },
        },
    },
    data() {
        return {
            currentNumber: this.initialNumber,
        }
    },
    watch: {
        currentNumber: function(value) {
            if (value === this.targetNumber) {
                this.stopTime()
            }
        },
    },
    mounted() {
        this.setTime()
    },
    methods: {
        addZeroHandler(number) {
            if (parseInt(number) > 1000) {
                return number
            } else {
                return '0' + number
            }
        },
        timer() {
            this.time = setInterval(() => {
                if (this.currentNumber < this.targetNumber) {
                    if (this.currentNumber % 100 > 31 && this.type === 'dateTime') {
                        this.currentNumber = this.currentNumber + 100 - 31
                    } else {
                        this.currentNumber++
                    }
                } else {
                    clearInterval
                }
            }, 10)
        },
        setTime() {
            this.timer()
        },
        stopTime() {
            if (this.time) {
                clearInterval(this.time)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.jump-from-zero {
    font-family: 'Rubik', sans-serif;
    color: $mainWhite;
    font-size: 8px;
    font-weight: 500;

    @include atSmall {
        font-size: 15px;
    }
}
</style>
