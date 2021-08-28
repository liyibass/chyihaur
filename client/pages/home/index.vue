<template>
    <div class="main-page">
        <Video />
        <AboutNew />
        <Service />
        <Workflow />
        <Contact />
    </div>
</template>

<script>
import Video from '@/components/Video'
import AboutNew from '@/components/AboutNew'
import Service from '@/components/Service'
import Workflow from '@/components/Workflow'
import Contact from '@/components/Contact'

export default {
    components: {
        Video,
        AboutNew,
        Service,
        Workflow,
        Contact,
    },

    mounted() {},
}
</script>

<style lang="scss" scoped>
.main-page {
    width: 100%;
}
</style>
