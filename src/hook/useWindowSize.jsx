
import React from "react";

export default function useWindowSize() {
    if (typeof window !== "undefined") {

    }
    const [windowSize, setWindowSize] = React.useState();
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        });
        return () => {
            window.removeEventListener("resize", () => {
                setWindowSize({ width: window.innerWidth, height: window.innerHeight });
            });
        };
    }, []);
}