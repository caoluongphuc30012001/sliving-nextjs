import React from 'react';
import { Nav } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
const SectionNavBar = ({ name }) => {
    const { t } = useTranslation();
    return (
        <div className="navbar-header">
            <div className="navbar-header-wrap">
                <div className="product-name">
                    <span className="fs-16 fw-bold">{name && name.toUpperCase()}</span>
                </div>
                <Nav fill variant="tabs" defaultActiveKey="link-0" className="navbar-header">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0">{t(`PRODUCTS.specification`)}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">{t(`PRODUCTS.application`)}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">{t(`PRODUCTS.recommend`)}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Work with</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">{t(`PRODUCTS.document`)}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}
export default SectionNavBar;
