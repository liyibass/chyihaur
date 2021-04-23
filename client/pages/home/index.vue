<template>
    <div class="main-page">
        <Video />
        <AboutNew />
        <Service />
        <Workflow />
        <Contact />
        <ContactSimple />
    </div>
</template>

<script>
import Video from '@/components/Video'
import AboutNew from '@/components/AboutNew'
import Service from '@/components/Service'
import Workflow from '@/components/Workflow'
import Contact from '@/components/Contact'
import ContactSimple from '@/components/ContactSimple'

export default {
    components: {
        Video,
        AboutNew,
        Service,
        Workflow,
        Contact,
        ContactSimple,
    },

    mounted() {},
}
</script>

<style lang="scss" scoped>
.main-page {
    .Contact {
        display: block;
        @include atSmall {
            display: none;
        }
    }

    .ContactSimple {
        display: none;
        @include atSmall {
            display: block;
        }
    }
    /* background: black; */
}
</style>
