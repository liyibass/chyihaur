<template>
    <div class="ContactFormInput">
        <div class="ContactFormInput__title">{{ field.tag }}</div>

        <div
            v-if="field.type === 'checkbox'"
            class="ContactFormInput__input ContactFormInput__input_checkbox"
        >
            <div v-for="checkbox in checkBoxList" :key="checkbox.id">
                <label>
                    <input
                        type="checkbox"
                        :value="checkbox.name"
                        v-model.lazy="field.value"
                    />
                    <span>
                        {{ checkbox.name }}
                    </span>
                </label>
            </div>
        </div>

        <div
            v-else-if="field.type === 'textarea'"
            class="ContactFormInput__input ContactFormInput__input_textarea"
        >
            <textarea type="text" v-model.lazy="field.value" />
        </div>

        <div v-else class="ContactFormInput__input">
            <input
                type="text"
                v-model.lazy="field.value"
                :placeholder="field.placeholder"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: { field: Object },
    data() {
        return {
            checkBoxList: [
                {
                    id: 0,
                    name: '招牌',
                },
                {
                    id: 1,
                    name: '指標',
                },
                {
                    id: 2,
                    name: '企業識別',
                },
                {
                    id: 3,
                    name: '環境視覺',
                },
                {
                    id: 4,
                    name: '平面視覺',
                },
                {
                    id: 5,
                    name: '影像',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.ContactFormInput {
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-bottom: 14px;

    @include atSmall {
        flex-direction: row;
    }

    &__title {
        width: 100%;
        margin-right: 4px;
        font-size: 16px;
        line-height: 1;
        padding: 8px 0;
        background: rgba(3, 80, 112, 0.8);

        display: flex;
        align-items: center;
        justify-content: center;

        @include atSmall {
            width: 142px;
            padding: 0 17px;
        }
    }

    &__input {
        flex-grow: 1;
        input {
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
            line-height: 1;
            padding: 8px 8px;
            width: 100%;
            background: rgba(96, 96, 96, 0.8);

            border: none;

            &:focus {
                outline: none;
            }

            @include atSmall {
                height: 44px;
            }
        }

        &_textarea {
            height: 159px;
            textarea {
                height: 100%;
                width: 100%;
                color: rgba(255, 255, 255, 0.7);
                font-size: 16px;
                line-height: 1;
                padding: 8px 8px;
                background: rgba(96, 96, 96, 0.8);

                border: none;

                &:focus {
                    outline: none;
                }
            }
        }

        &_checkbox {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            > div {
                width: calc((100% -5 * 4px) / 6);
                max-width: 56px;
                max-height: 56px;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2px;
            }

            label {
                padding: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
            input {
                display: none;
            }

            input + span {
                width: 100%;
                height: 100%;
                background: rgba(96, 96, 96, 0.8);
                color: white;
                user-select: none; /* 防止文字被滑鼠選取反白 */
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                text-align: center;
            }

            input:checked + span {
                color: white;
                background-color: #444;
            }
        }
    }
}
</style>
