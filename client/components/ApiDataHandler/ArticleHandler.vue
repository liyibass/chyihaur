<script>
import ArticleImage from './ArticleImage.vue'
import ArticleSlideshow from './ArticleSlideshow.vue'
import ArticleYoutubeEmbedByIframeApi from './ArticleYoutubeEmbedByIframeApi.vue'
export default {
    functional: true,
    component: {
        ArticleImage,
        ArticleSlideshow,
        ArticleYoutubeEmbedByIframeApi,
    },
    props: {
        block: {
            type: Object,
            isRequired: true,
            default: () => {
                return {
                    alignment: 'center',
                    content: ['我是普通文章'],
                    id: 'd5878',
                    styles: {},
                    type: 'unstyled',
                }
            },
        },
    },
    render(h, { props }) {
        console.log(props)
        const type = props.block.type
        const content = props.block.content[0]

        switch (type) {
            case 'unstyled':
                return (
                    <p class="article-paragraph" domPropsInnerHTML={content} />
                )
            case 'header-one':
                return (
                    <h1 class="article-heading" domPropsInnerHTML={content} />
                )

            case 'header-two':
                return (
                    <h2 class="article-heading" domPropsInnerHTML={content} />
                )

            case 'code-block':
                return <code class="article-code" domPropsInnerHTML={content} />

            case 'blockquote':
                return (
                    <blockquote
                        class="article-blockquote"
                        domPropsInnerHTML={content}
                    />
                )
            case 'ordered-list-item':
                if (typeof content === 'string') {
                    return (
                        <ol>
                            <li>{content}</li>
                        </ol>
                    )
                } else {
                    return (
                        <ol class="article-ordered-list">
                            {content.map((item) => {
                                return <li>{item}</li>
                            })}
                        </ol>
                    )
                }

            case 'unordered-list-item':
                if (typeof content === 'string') {
                    return (
                        <ol>
                            <li>{content}</li>
                        </ol>
                    )
                } else {
                    return (
                        <ol class="article-ordered-list">
                            {content.map((item) => {
                                return <li>{item}</li>
                            })}
                        </ol>
                    )
                }
            case 'ordered-list-item':
                if (typeof content === 'string') {
                    return (
                        <ol>
                            <li>{content}</li>
                        </ol>
                    )
                } else {
                    return (
                        <ol class="article-ordered-list">
                            {content.map((item) => {
                                return <li>{item}</li>
                            })}
                        </ol>
                    )
                }

            case 'image':
                return <ArticleImage image={content} />
            case 'slideshow':
                return <ArticleSlideshow items={props.block.content} />

            case 'youtube':
                return <ArticleYoutubeEmbedByIframeApi videoId={content.id} />

            default:
                return undefined
        }
    },
    // render(h) {
    //     switch (this.block.type) {
    //         case 'unstyled':
    //             return h({
    //                 template: <h1>FUCK</h1>,
    //             })

    //         default:
    //             return h({
    //                 template: <h1>YOYO</h1>,
    //             })
    //     }
    // },
}
</script>

<style lang="scss" scoped></style>
