import React from 'react';
import { Container, Navbar, Image, Nav, Dropdown, Row, Col, InputGroup, FormControl } from "react-bootstrap";
const DropdownButton = () => {
    return (
        <Dropdown className="dropdown-language dropdown-language-v2">
            <Dropdown.Toggle className="drop-toggle d-flex dropdown-toggle" variant="#ffffff" id="dropdown-basic">
                {isChange ? 'Việt Nam' : 'English'}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-customize" id="dropdown-customize">
                <Dropdown.Item onClick={() => changeFlag(valueFlag.vn)}>Việt Nam</Dropdown.Item>
                <Dropdown.Item onClick={() => changeFlag(valueFlag.en)}>English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default DropdownButton;
