import React, { useState, useEffect } from 'react';
import CardHorizonal from '@components/card/card-horizontal/card-horizontal';
import Layout from "@components/layout.jsx";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import VideoWebm1 from "@videos/home-page/slide-1.webp";
import Video1 from "@videos/home-page/slide-1.mp4";
import { graphql } from 'gatsby';
const IntroContentPageTemplate = ({ pageContext }) => {
  const [content, setContent] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setContent(pageContext.node);
    setPosts(pageContext.data.filter(item => {
      return item.node.frontmatter.slug !== pageContext.node.frontmatter.slug;
    }));
  }, []);

  return (
    <Layout>
      {
        pageContext && (
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
                      imgUrl={post.node.frontmatter.featuredImage.childImageSharp.fluid.src}
                      slug={post.node.frontmatter.slug}
                      alt={post.node.frontmatter.alt}
                      url="intro-content-page"
                    />
                  )
                })
              }
            </div>
          </div>
        )
      }
    </Layout>
  )
}
export default withI18next()(IntroContentPageTemplate);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
