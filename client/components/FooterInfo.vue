<template>
    <div class="footer-info">
        <div class="footer-info_wrapper">
            <div class="footer-info_card">
                <h6>Call us</h6>
                <p>02-2630-8111</p>
            </div>
            <div class="footer-info_card">
                <h6>Line id</h6>
                <p>0917226506</p>
            </div>

            <div class="footer-info_card">
                <h6>Fax us</h6>
                <p>02-2630-5777</p>
            </div>
            <div class="footer-info_card">
                <h6>Email us</h6>
                <p>chyi.haur@msa.hinet.net</p>
            </div>

            <div class="footer-info_card">
                <h6>Visit us</h6>
                <p>台北市內湖區</p>
                <p>康寧路三段189巷75號1F</p>
            </div>

            <div class="footer-info_card Footer__logo">
                <img :src="require('@/static/images/business-card.png')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {},
}
</script>

<style lang="scss" scoped>
.footer-info {
    position: relative;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @include atMedium {
        margin-bottom: 0;
    }

    &_wrapper {
        max-width: 834px;
        display: flex;
        flex-direction: row;
        height: 115px;
        flex-wrap: wrap;

        @include atLarge {
            height: 180px;
            flex-direction: column;
        }

        @include atSuperLarge {
            height: 116px;
        }
    }

    &_card {
        text-align: left;
        margin-bottom: 10px;
        width: 50%;
        line-height: 1.1;
        @include atLarge {
            width: auto;
            text-align: center;
            text-align: left;
            margin: 8px;
        }
        color: $mainWhite;
        h6 {
            font-size: 10px;
            font-weight: bold;

            @include atMedium {
                font-size: 14px;
            }

            @include atLarge {
                font-size: 18px;
            }
        }
        p {
            font-size: 10px;

            @include atMedium {
                font-size: 14px;
            }

            @include atLarge {
                font-size: 18px;
            }
        }
    }

    .Footer__logo {
        max-width: 150px;
        @include atSmall {
            max-width: 200px;
        }

        @include atMedium {
            display: none;
        }
    }
}
</style>
