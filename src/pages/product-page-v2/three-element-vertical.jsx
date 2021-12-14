import React from 'react';
import { Col, Row } from 'react-bootstrap';
const ThreeElementVertical = ({ dataProdHot }) => {
    return (
        <section className="section-product-name">
            <Row noGutters>
                {dataProdHot && dataProdHot.map((data) => <Col xs={12} md={4}><img src={data?.node?.frontmatter?.imgSrcProduct?.publicURL} width={302} height={302} alt="" /></Col>)}
            </Row>
        </section>
    )
}

export default ThreeElementVertical;

