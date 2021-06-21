import React from 'react';
import { Row, Col } from "react-bootstrap";
import CardHorizonal from "../card-horizontal/card-horizontal";
const CardSuggest = (props) => {
    const post = props.data
    return (
        <div className="card-suggest">
            <div className="card-suggest-wrap">
                <div className="card-suggest-wrap__title fs-32 fw-bold">
                    {props.title}
                </div>
                <Row className="card-suggest-wrap__body" noGutters>
                    {
                        (post && post.map(({ node }) => {
                            return (
                                <Col key={node.frontmatter.id} md={12}>
                                    <CardHorizonal slug={node.frontmatter.slug} isVideo={props.isVideo} url={props.url}
                                        imgUrl={node.frontmatter.featuredImage.childImageSharp.fluid.src} data={post.slice(0, 5)} />
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
