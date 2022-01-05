import React, { useState, useEffect } from "react";
import "./style.scss"

const LoadingPage = ({time}) => {
  const [isLoading, setIsLoading] = useState(true);
  const timeOut = time || 500;
  const handle = () => {
    console.log("abc");
    setIsLoading(false)
  }
    useEffect(() => {
      // document.onreadystatechange = ()=> {
      //   if(document.readyState === ' complete'){
      //     setIsLoading(false)
      //   }
      // }
      // const setTime = setTimeout(() => {
      //   setIsLoading(false);
      // }, timeOut);
      window.addEventListener("load",handle);
      return () => {
        //clearTimeout(setTime);
      window.removeEventListener("load",handle);

      };
    }, [isLoading]);
  return (
    <div className={isLoading ? "loader-wrapper" : "loader-hidden"}>
      <div
        className="loader"
      ></div>
    </div>
  );
};

export default LoadingPage;
