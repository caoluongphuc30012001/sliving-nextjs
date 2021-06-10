import React from 'react';
import { Link } from "gatsby";
import { Container } from "react-bootstrap";
import Video1 from "@images/image-video/video1.mp4";
const NewPageDetail = ({ data, slug }) => {

  let content = null;
  let posts = [];
  (data && data.forEach(({ node }) => {
    (slug === node.frontmatter.slug) ? (content = node) : (posts.push(node));
  }))

  if (content === null || posts === null) {
    return null;
  }
  return (
    <Container className="news-page-body">
      <div className="news-page-body-in-left">
        <h5><strong>Sliving</strong> updated {content.frontmatter.date}</h5>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
        <div className="news-page-body-in-left-video">
          <video muted autoPlay loop playsInline>
            <source src={Video1} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="news-page-body-in-right">
        <h4 className="news-page-body-in-right-title">News</h4>
        {
          posts.map((post) => {
            return (
              <div key={post.frontmatter.id} className="news-page-body-in-right-card">
                <div className="news-page-body-in-right-card-video">
                  <Link to={`/news-page/${post.frontmatter.slug}`} state={{ data: data, slug: post.frontmatter.slug }}>
                    <video muted autoPlay loop playsInline>
                      <source src={Video1} type="video/mp4" />
                    </video>
                  </Link>
                </div>
                <div className="news-page-body-in-right-card-text">
                  <Link to={`/news-page/${post.frontmatter.slug}`} state={{ data: data, slug: post.frontmatter.slug }}>
                    <p className="news-page-body-in-right-card-text-date">{post.frontmatter.date}</p>
                    <p className="news-page-body-in-right-card-text-title">{post.frontmatter.title}</p>
                    <p className="news-page-body-in-right-card-text-description">{post.frontmatter.description}</p>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}
export default NewPageDetail;
