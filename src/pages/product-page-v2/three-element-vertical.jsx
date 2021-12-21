import React from 'react';
import { Col, Row } from 'react-bootstrap';
const ThreeElementVertical = ({ dataProdHot }) => {
    return (
        <section className="section-product-name">
            <Row noGutters>
                {dataProdHot && dataProdHot.map((data, index) =>
                    <Col xs={12} md={4} className='product-name-hover' key={index}>
                        <img src={data?.node?.frontmatter?.imgSrcProduct?.publicURL} width={302} height={302} alt="" />
                        <div className="hover-prod-item">
                            <span className='prod-item-bg'></span>
                            <h3>{data?.node?.frontmatter?.title}</h3>
                        </div>
                    </Col>
                )}
            </Row>
        </section>
    )
}

export default ThreeElementVertical;

