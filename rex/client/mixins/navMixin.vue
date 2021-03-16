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
                    engTitle: 'About Us',
                    link: 'about',
                    key: 'about',
                    logoUrl: require('@/static/images/logos/0.png'),
                },
                {
                    id: 1,
                    title: '服務項目',
                    engTitle: 'Our Service',
                    link: 'service',
                    key: 'our-service',
                    logoUrl: require('@/static/images/logos/1.png'),
                },
                {
                    id: 2,
                    title: '流程介紹',
                    engTitle: 'Workflow',
                    link: 'workflow',
                    key: 'workflow',
                    logoUrl: require('@/static/images/logos/2.png'),
                },
                {
                    id: 3,
                    title: '作品範例',
                    engTitle: 'Portfolio',
                    link: 'portfolio',
                    key: 'portfolio',
                    logoUrl: require('@/static/images/logos/3.png'),
                },
                {
                    id: 4,
                    title: '聯絡我們',
                    engTitle: 'Contact Us',
                    link: 'contact',
                    key: 'contact',
                    logoUrl: require('@/static/images/logos/4.png'),
                },
                {
                    id: 5,
                    title: '七號倉庫',
                    engTitle: 'n07-warehouse',
                    link: 'n07-warehouse',
                    key: 'n07-warehouse',
                    logoUrl: require('@/static/images/logos/4.png'),
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
