import React, { useState, useEffect } from "react";
import iconRounded from "./../../images/icon/icon-rounded.svg";
const isBrowser = typeof window !== "undefined";
const ButtonRounded = () => {
    const srollTop = ({ isScroll }) => {
        if (isBrowser) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        if (isBrowser) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 500) {
                    setIsScroll(true);
                } else {
                    setIsScroll(false);
                }
            }, true)
        }

    }, [isScroll])
    return (
        <>
            {isScroll && (<div
                role="button"
                tabIndex={0}
                className="btn-rounded"
                onClick={() => srollTop(true)}
                style={{ display: isScroll }}
                onKeyDown={() => srollTop(true)}>
                <img src={iconRounded} alt="icon arrow top" />
            </div>
            )}
        </>
    );
}
export default ButtonRounded;
