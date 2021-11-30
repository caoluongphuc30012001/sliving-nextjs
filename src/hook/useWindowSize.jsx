
import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ isMobile: false })

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth > 768) {
                setWindowSize({ isMobile: false })
            } else {
                setWindowSize({ isMobile: true })
            }
            window.addEventListener("resize", () => {
                if (window.innerWidth > 768) {
                    setWindowSize({ isMobile: false })
                } else {
                    setWindowSize({ isMobile: true })
                }
            });
        }
        return () => {
            window.removeEventListener("resize", () => {
                if (window.innerWidth > 768) {
                    setWindowSize({ isMobile: false })
                } else {
                    setWindowSize({ isMobile: true })
                }
            });
        };
    }, []);
    return windowSize;
}