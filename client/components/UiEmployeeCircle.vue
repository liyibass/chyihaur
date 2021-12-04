<template>
    <div class="UiEmployeeCircle" :class="{ isFocus: isFocus }" @click="goToEmployeePage">
        <div class="UiEmployeeCircle__snapshot">
            <img :src="imageUrl" :alt="employee.name" />
        </div>

        <div class="UiEmployeeCircle__name">{{ employee.name }}</div>
    </div>
</template>

<script>
export default {
    props: {
        employee: {
            type: Object,
            isRequired: true,
            defaultValue: {
                id: 0,
                position: 'OPERATION',
                name: 'AA',
            },
        },
        isFocus: {
            type: Boolean,
            defaultValue: false,
        },
    },
    computed: {
        imageUrl() {
            return this.employee?.snapshotUrl?.urlOriginal || require('@/static/images/logo_small.png')
        },
    },
    methods: {
        goToEmployeePage() {
            this.$router.push(`/about/${this.employee.id}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.UiEmployeeCircle {
    cursor: pointer;
    width: calc(100vw / 2);
    height: calc(100vw / 2);
    border: 2px solid black;
    border-radius: 50%;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    @include atMedium {
        width: calc(100vw / 5);
        height: calc(100vw / 5);
    }

    &__snapshot {
        width: 100%;
        height: 100%;
        background: black;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 1;
            transition: 0.5s all ease-in-out;
        }
    }

    &__name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        color: white;
        font-size: 20px;
        font-weight: bold;
        transition: 0.5s all ease-in-out;
    }

    &.isFocus {
        .UiEmployeeCircle__snapshot {
            img {
                opacity: 0.4;
            }
        }

        .UiEmployeeCircle__name {
            opacity: 1;
        }
    }
}
</style>
