import React from 'react';
import { Nav } from "react-bootstrap";
const SectionNavBar = () => {
    return (
        <div className="navbar-header">
            <div className="container-wrap navbar-header-wrap">
                <div className="product-name">
                    <span className="fs-16 fw-bold">PRODUCT'S NAME</span>
                </div>
                <Nav fill variant="tabs" defaultActiveKey="link-0" className="navbar-header">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0">Đặc Điểm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Ứng dụng</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Khuyến Nghị</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Work with</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">Tài liệu</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}
export default SectionNavBar;
