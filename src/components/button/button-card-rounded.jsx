import React, { useState, useEffect } from "react";
import iconRounded from "@images/icon/icon-rounded.svg";
const isBrowser = typeof window !== "undefined";
const ButtonRounded = () => {
    const scrollTop = () => {
        if (isBrowser) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
    const setScroll = () => {
        if (window.scrollY > 500) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    }
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        if (isBrowser) {
            window.addEventListener("scroll", setScroll)
        }
        return () => {
            window.removeEventListener("scroll", setScroll)
        }

    }, [])
    return (
        <>
            {isScroll && (<div
                role="button"
                tabIndex={0}
                className="btn-rounded"
                onClick={() => scrollTop()}
                style={{ display: isScroll }}
                onKeyPress={() => scrollTop()}>
                <img src={iconRounded} alt="icon arrow top" />
            </div>
            )}
        </>
    );
}
export default ButtonRounded;
