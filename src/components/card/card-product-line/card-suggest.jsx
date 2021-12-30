import React from 'react';
import { Row, Col } from "react-bootstrap";
import CardHorizonal from "../card-horizontal/card-horizontal";
const CardSuggest = (props) => {
    const post = props.data
    return (
        <div className="card-suggest">
            <div className="card-suggest-wrap">
                <div className="card-suggest-wrap__title fs-32 fw-bold">
                    <h3>{props.title}</h3>
                </div>
                <Row className="card-suggest-wrap__body"  >
                    {
                        (post && post.map(({ node }) => {
                            return (
                                <Col key={node.frontmatter.id} md={12}>
                                    <CardHorizonal
                                        key={node.frontmatter.id}
                                        date={node.frontmatter.date}
                                        title={node.frontmatter.title}
                                        imgUrl={node.frontmatter.featuredImage.publicURL}
                                        slug={node.frontmatter.slug}
                                        alt={node.frontmatter.alt}
                                        isVideo={props.isVideo}
                                        url="news-page"
                                    />
                                </Col>
                            )
                        }))
                    }
                </Row>
            </div>
        </div>
    );
}
export default CardSuggest;
