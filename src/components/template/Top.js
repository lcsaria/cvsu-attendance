import React, { useEffect, useState } from "react";

function Top() { 
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);

    return (
        <button className="border rounded d-inline scroll-to-top" onClick={scrollToTop}>
            <i className="fas fa-angle-up" />
        </button>
    )
}

export default Top
