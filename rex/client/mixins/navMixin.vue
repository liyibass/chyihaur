<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    id: 0,
                    title: '關於淇豪',
                    engTitle: 'About',
                    link: 'about',
                    logoUrl: require('@/static/images/logos/0.png'),
                },
                {
                    id: 0,
                    title: '服務項目',
                    engTitle: 'Our Service',
                    link: 'service',
                    logoUrl: require('@/static/images/logos/1.png'),
                },
                {
                    id: 0,
                    title: '流程介紹',
                    engTitle: 'Workflow',
                    link: 'workflow',
                    logoUrl: require('@/static/images/logos/2.png'),
                },
                {
                    id: 0,
                    title: '作品範例',
                    engTitle: 'Portfolio',
                    link: 'portfolio',
                    logoUrl: require('@/static/images/logos/3.png'),
                },
                {
                    id: 0,
                    title: '聯絡我們',
                    engTitle: 'Contact Us',
                    link: 'contact',
                    logoUrl: require('@/static/images/logos/4.png'),
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
