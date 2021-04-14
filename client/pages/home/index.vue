<template>
    <div class="main-page">
        <Video />
        <AboutNew />
        <Service />
        <Workflow />
        <ContactSimple />
    </div>
</template>

<script>
import Video from '@/components/Video'
import AboutNew from '@/components/AboutNew'
import Service from '@/components/Service'
import Workflow from '@/components/Workflow'
import ContactSimple from '@/components/ContactSimple'

export default {
    components: {
        Video,
        AboutNew,
        Service,
        Workflow,
        ContactSimple,
    },

    mounted() {},
}
</script>

<style>
.main-page {
    /* background: black; */
}
</style>
