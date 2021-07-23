<script>
import ArticleImage from './ArticleImage.vue'
import ArticleSlideshow from './ArticleSlideshow.vue'
import YoutubeEmbedByIframeApi from '@/components/YoutubeEmbedByIframeApi.vue'
export default {
    functional: true,
    component: {
        ArticleImage,
        ArticleSlideshow,
        YoutubeEmbedByIframeApi,
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
        const type = props.block.type
        const content = props.block.content[0]

        switch (type) {
            case 'unstyled':
                return (
                    <p class="article-paragraph" domPropsInnerHTML={content} />
                )
            case 'header-one':
                return (
                    <h1 class="article-heading-1" domPropsInnerHTML={content} />
                )

            case 'header-two':
                return (
                    <h2 class="article-heading-2" domPropsInnerHTML={content} />
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
                return <YoutubeEmbedByIframeApi videoId={content.id} />

            default:
                return undefined
        }
    },
}
</script>

<style lang="scss" scoped>
.article {
    &-heading-1 {
        font-size: 30px;
        font-weight: bolder;
        line-height: 2;
    }

    &-heading-2 {
        font-size: 20px;
        font-weight: bolder;
        line-height: 2;
    }

    &-code {
        padding: 5px;
        background: rgba(0, 0, 0, 0.2);
    }

    &-paragraph {
        font-size: 16px;
        line-height: 1.75;
        text-align: justify;
        > * {
            max-width: 100%;
        }
    }

    &-blockquote {
        text-align: justify;
        line-height: 1.75;
        padding: 15px;
        border-left: 3px $mainWhite solid;
    }

    &-embedded-code {
        iframe {
            width: 100%;
        }
    }
    &-paragraph,
    &-quote-by,
    &-annotation {
        a {
            font-weight: 500;
        }
    }
    &-ordered-list {
        margin-top: 0 !important;
        padding-left: 2rem;
        list-style-type: decimal;
        li {
            font-size: 16px;
            line-height: 1.75;
            text-align: justify;
        }
    }

    &-unordered-list {
        margin-top: 0 !important;
        padding-left: 2rem;
        list-style-type: disc;
        li {
            font-size: 16px;
            line-height: 1.75;
            text-align: justify;
        }
    }
}
</style>
