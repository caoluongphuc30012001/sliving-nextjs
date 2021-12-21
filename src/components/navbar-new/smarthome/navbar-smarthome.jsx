import React, { useEffect, useState } from "react";
import NavbarSmartHomeMobile from "./navbar-mobile";
import NavbarSmartHomeDesktop from "./navbar-desktop";

const isBrowser = typeof window !== "undefined";

export default function NavbarSmartHome() {
  const [, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const configureDesktop = () => {
      if (window.innerWidth > 992) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsDesktop(false);
        setIsMobile(true);
      }
    };
    if (isBrowser) {
      window.addEventListener("resize", configureDesktop);
      configureDesktop();
    }
    return () => {
      window.removeEventListener("resize", configureDesktop);
    };
  }, []);
  if (isMobile) return <NavbarSmartHomeMobile />;
  else return <NavbarSmartHomeDesktop />;
}
