import React, { useState, useEffect } from 'react';
import VideoWebm1 from "@videos/home-page/slide-1.webp";
import Video1 from "@videos/home-page/slide-1.mp4";
import CardHorizonal from '@components/card/card-horizontal/card-horizontal';
import { useTranslation } from 'react-i18next';
const NewPageDetail = ({ data, node }) => {
  const { t } = useTranslation(); 
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
                    <div className="news-page-time"><span className="fs-16 fw-bold">Sliving</span> <span className="time-post">{t(`posted-at`)} {content.frontmatter.date}</span></div>
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
                      date={post.node.frontmatter.date}
                      title={post.node.frontmatter.title}
                      imgUrl={post.node.frontmatter.featuredImage.publicURL}
                      slug={post.node.frontmatter.slug} 
                      alt={post.node.frontmatter.alt}
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
