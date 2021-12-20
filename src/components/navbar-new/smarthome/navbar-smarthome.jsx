import React, { useEffect, useState } from "react";
import NavbarSmartHomeMobile from "./navbar-mobile";
import NavbarSmartHomeDesktop from "./navbar-desktop";
const isBrowser = typeof window !== "undefined";
export default function NavbarSmartHome() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsDesktop(false);
          setIsMobile(true);
        }
      });
      if (window.innerWidth > 992) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsDesktop(false);
        setIsMobile(true);
      }
    }
  }, []);
  if (isMobile) return <NavbarSmartHomeMobile />;
  else return <NavbarSmartHomeDesktop />;
}
