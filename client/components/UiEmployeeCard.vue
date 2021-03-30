<template>
    <div class="UiEmployeeCard" @click="goToEmployeePage">
        <div class="UiEmployeeCard__snapshot">
            <img :src="employee.snapshotUrl" :alt="employee.name" />
        </div>
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
    },

    methods: {
        goToEmployeePage() {
            this.$router.push(`/about/${this.employee.id}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.UiEmployeeCard {
    margin: 30px;
    cursor: pointer;

    @include atSmall {
        margin: 0 30px;
    }
    &__snapshot {
        width: 200px;
        height: 200px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }
    }
}
</style>
