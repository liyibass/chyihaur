<template>
    <div class="logo-bar">
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/0.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/1.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/2.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/3.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/4.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/5.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/6.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/7.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/8.png')" alt="" srcset="" />
        </div>
        <div class="logo-bar__logo">
            <img :src="require('@/static/images/service/9.png')" alt="" srcset="" />
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo-bar {
    display: flex;
    padding: 0 30px;
    max-width: 800px;
    margin: auto;

    @include atMedium {
        max-width: 1000px;
    }

    &__logo {
        flex: 1;
    }
}
</style>
