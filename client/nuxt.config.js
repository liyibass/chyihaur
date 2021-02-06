import {
    SITE_DESCRIPTION,
    SITE_TITLE,
    SITE_URL,
    SITE_OG_IMAGE,
    SITE_BASE,
    FB_APP_ID,
    SITE_LOGO,
} from './configs/metaConfig'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'CHYIHAUR',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~assets/scss/global.style.scss', '~assets/scss/responsiveMixin.scss', '~assets/scss/variable.scss'],

    styleResources: {
        scss: ['./assets/scss/*.scss'],
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/style-resources'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
