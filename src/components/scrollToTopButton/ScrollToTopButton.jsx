// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import styles from "./scrolltotop.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.scroll_to_top_button} ${
        isVisible ? styles.visible : ""
      }`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M26.6668 22.3333C26.4014 22.3346 26.1466 22.2288 25.9601 22.04L16.0001 12.08L6.04012 22.04C5.64611 22.4071 5.03211 22.3963 4.65129 22.0155C4.27048 21.6347 4.25964 21.0207 4.62679 20.6267L15.2935 9.95999C15.6839 9.57006 16.3164 9.57006 16.7068 9.95999L27.3735 20.6267C27.7634 21.0171 27.7634 21.6496 27.3735 22.04C27.1869 22.2288 26.9322 22.3346 26.6668 22.3333Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
