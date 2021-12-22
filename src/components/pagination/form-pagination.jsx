import React from 'react';
import DropDownSort from '../dropdown/dropdown-sort';
const FormPagination = ({ title, count,variable,currentPosts,indexOfFirstPost }) => {
    return (
        <div className="pagination-sort">
            <div className="title-sort fs-32 fw-bold">
                <span>{title}</span>
            </div>
            <div className="pagination-sort-body">
                <div className="sub-title-sort fs-16 fw-bold">
                    <span>{indexOfFirstPost+1} - {indexOfFirstPost+currentPosts.length}/{count} {variable}</span>
                </div>
                <div className="dropdown-sort">
                    <DropDownSort />
                </div>
            </div>
        </div>

    );
}
export default FormPagination;
