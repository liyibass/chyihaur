<template>
    <div class="ContactFormInput">
        <div class="ContactFormInput__title">{{ field.tag }}</div>
        <div class="ContactFormInput__input">
            <input type="text" v-model.lazy="field.value" />
        </div>
    </div>
</template>

<script>
export default {
    props: { field: Object },
}
</script>

<style lang="scss" scoped>
.ContactFormInput {
    height: 44px;
    width: 100%;

    display: flex;
    flex-direction: row;

    margin-bottom: 14px;

    &__title {
        width: 142px;
        height: 100%;
        padding: 0 17px;
        line-height: 44px;
        margin-right: 4px;

        background: rgba(3, 80, 112, 0.8);
    }

    &__input {
        flex-grow: 1;
        input {
            width: 100%;
            height: 100%;
            background: rgba(96, 96, 96, 0.8);
            line-height: 44px;
            padding: 0 17px;

            border: none;

            &:focus {
                outline: none;
            }
        }
    }
}
</style>
