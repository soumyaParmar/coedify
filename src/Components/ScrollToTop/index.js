import React, { useState, useEffect } from "react";
import { FiChevronsUp } from "react-icons/fi";
import { useWindowScroll } from "react-use";
import "./Style.css";
const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) setVisible(true);
    else setVisible(false);
  }, [pageYOffset]);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return false;
  return (
    <div className="scroll-to-top" onClick={ScrollToTop}>
      <FiChevronsUp />
    </div>
  );
};

export default ScrollToTop;
