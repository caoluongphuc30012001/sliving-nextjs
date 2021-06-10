import React from 'react';
import DropDownSort from '../dropdown/dropdown-sort';
const FormPagination = ({ title, variable }) => {
    return (
        <div className="pagination-sort">
            <div className="title-sort fs-32 fw-bold">
                <span>{title}</span>
            </div>
            <div className="pagination-sort-body">
                <div className="sub-title-sort fs-16 fw-bold">
                    <span>1 - 6/1998 {variable}</span>
                </div>
                <div className="dropdown-sort">
                    <DropDownSort />
                </div>
            </div>
        </div>

    );
}
export default FormPagination;
