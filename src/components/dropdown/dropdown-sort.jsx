import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
const DropDownSort = () => {
    const { t } = useTranslation();
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="fw-bold fs-14">{t(`Sorted_by`)}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">{t(`Newest_To_Oldest`)}</Dropdown.Item>
                <Dropdown.Item href="#/action-2">{t(`Oldest_To_Newest`)}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default DropDownSort;
