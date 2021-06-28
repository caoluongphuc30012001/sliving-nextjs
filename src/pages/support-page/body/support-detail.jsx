import React, { useState, useEffect } from 'react';
import Video1 from "@videos/home-page/slide-1.webp";
import Layout from "@components/layout";
import CardHorizonal from '@components/card/card-horizontal/card-horizontal';
const SupportDetail = ({ data, node }) => {
    const [content, setContent] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setContent(node);
        setPosts(data.filter(item => {
            return item.node.frontmatter.slug !== node.frontmatter.slug;
        }));
    }, [data, node]);

    return (
        <>
            {
                data && (
                    <Layout>
                        <div className="news-page-body container-wrap">
                            <div className="news-page-body-in-left">
                                {
                                    content && (
                                        <>
                                            <div className="news-page-time"><span className="fs-16 fw-bold">Sliving</span> <span className="time-post">đăng vào lúc {content.frontmatter.date}</span></div>
                                            <div dangerouslySetInnerHTML={{ __html: content.html }} />
                                        </>
                                    )
                                }
                                <div className="news-page-body-in-left-video">
                                    <video muted autoPlay loop playsInline>
                                        <source src={Video1} type="video/webp" />
                                    </video>
                                </div>
                            </div>
                            <div className="news-page-body-in-right">
                                <span className="news-page-body-in-right-title fs-32 fw-bold">News</span>
                                {
                                    posts && posts.map((post) => {
                                        return (

                                            <div key={post.node.frontmatter.id}>
                                                <CardHorizonal
                                                    slug={post.node.frontmatter.slug} isVideo={post.node.isVideo}
                                                    imgUrl={post.node.frontmatter.featuredImage.childImageSharp.fluid.src}
                                                    url="support-page" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Layout>
                ) 
            }
        </>
    )
}
export default SupportDetail;
