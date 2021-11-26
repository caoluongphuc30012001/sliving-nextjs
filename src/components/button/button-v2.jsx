import React from 'react'
import "../style.scss"
const ButtonCustom = ({ content, func }) => {
    const functionCallback = () => {
        func();
    }
    return (
        <button className="btn-custom fs-21" onClick={functionCallback}>
            {content}
        </button>
    )
}
export default ButtonCustom;