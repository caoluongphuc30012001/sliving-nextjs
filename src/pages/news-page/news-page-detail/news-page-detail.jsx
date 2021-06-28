import React, { useState, useEffect } from 'react';
import VideoWebm1 from "@videos/home-page/slide-1.webp";
import Video1 from "@videos/home-page/slide-1.mp4";
import CardHorizonal from '@components/card/card-horizontal/card-horizontal';
const NewPageDetail = ({ data, node }) => {
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
          <div className="news-page-body container-wrap">
            <div className="news-page-body-in-left">
              {
                content && (
                  <>
                    <div className="news-page-time"><span className="fs-16 fw-bold">Sliving</span> <span className="time-post">đăng vào lúc 24/05/2021 - {content.frontmatter.date}</span></div>
                    <div dangerouslySetInnerHTML={{ __html: content.html }} />
                  </>
                )
              }
              <div className="news-page-body-in-left-video">
                <video muted autoPlay loop playsInline>
                  <source src={VideoWebm1} type="video/webp" />
                  <source src={Video1} type="video/mp4" />

                </video>
              </div>
            </div>
            <div className="news-page-body-in-right">
              <span className="news-page-body-in-right-title fs-32 fw-bold">News</span>
              {
                posts && posts.map((post) => {
                  return (
                    <CardHorizonal
                      key={post.node.frontmatter.id}
                      slug={post.node.frontmatter.slug} isVideo="true"
                      imgUrl={post.node.frontmatter.featuredImage.childImageSharp.fluid.src}
                      url="news-page"
                    />
                  )
                })
              }
            </div>
          </div>
        )
      }
    </>
  )
}
export default NewPageDetail;
