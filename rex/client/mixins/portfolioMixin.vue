<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            portfolioList: [
                {
                    id: 0,
                    title: '作品1',
                    engTitle: 'About Us',
                    link: 'about',
                    imageUrl: require('@/static/images/portfolio/1.png'),
                },
                {
                    id: 1,
                    title: '作品2',
                    engTitle: 'Our Service',
                    link: 'service',
                    imageUrl: require('@/static/images/portfolio/2.png'),
                },
                {
                    id: 2,
                    title: '作品3',
                    engTitle: 'Workflow',
                    link: 'workflow',
                    imageUrl: require('@/static/images/portfolio/3.png'),
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
