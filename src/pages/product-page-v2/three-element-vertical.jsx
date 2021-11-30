import React from 'react';
import element1 from "@images/product-v2/element-1.png";
import element2 from "@images/product-v2/element-2.png";
import element3 from "@images/product-v2/element-3.png";
import { Col, Row } from 'react-bootstrap';
const ThreeElementVertical = () => {
    return (
        <section className="section-product-name">
            <Row noGutters>
                <Col xs={12} md={4}><img src={element1} width={302} height={302} alt="" /></Col>
                <Col xs={12} md={4}><img src={element2} width={302} height={302} alt="" /></Col>
                <Col xs={12} md={4}><img src={element3} width={302} height={302} alt="" /></Col>
            </Row>
        </section>
    )
}

export default ThreeElementVertical;