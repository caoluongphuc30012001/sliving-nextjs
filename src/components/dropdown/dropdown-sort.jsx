import React from 'react';
import { Dropdown } from 'react-bootstrap';
const DropDownSort = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="fw-bold fs-14">Sắp xếp theo</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default DropDownSort;
