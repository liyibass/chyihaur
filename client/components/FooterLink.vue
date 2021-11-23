<template>
    <div class="footer-link">
        <a class="footer-link_icon" v-for="link in links" :key="link.id" :href="link.url" target="_blank">
            <img :src="link.logo" alt="" />
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 0,
                    logo: require('@/static/images/footer/fb.svg'),
                    url: 'https://www.facebook.com/Chyi.haur.design',
                },
                {
                    id: 1,
                    logo: require('@/static/images/footer/ig.svg'),
                    url: 'https://www.instagram.com/chyi.haur/',
                },
                {
                    id: 2,
                    logo: require('@/static/images/footer/yt.svg'),
                    url: 'https://youtube.com/channel/UCK1VIkULDRfYzgHLTSIH0WQ',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.footer-link {
    width: calc(50% + 10px);
    max-width: 135px;
    display: flex;
    justify-content: space-between;

    @include atMedium {
        margin: 0 40px;
        width: 135px;
        transform: translateY(20px);
    }

    @include atSuperLarge {
        width: 155px;
    }
    &.Footer__link_mobile {
        @include atMedium {
            // display: none;
        }
    }
    &.Footer__link_desktop {
        display: none;
        @include atMedium {
            display: flex;
        }
    }
    &_icon {
        width: 36px;
        height: 36px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
