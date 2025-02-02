import React from "react";
import "./GoToTop.css";

const ScrollToTopButton = () => {
          const scrollToTop = () => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
          };

          return <button onClick={scrollToTop} className="scroll-to-top">Top</button>;
};

export default ScrollToTopButton;
