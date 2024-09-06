import { useState, useEffect } from "react";

const useToggleMenu = (breakpoint = 576) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);

      if (window.innerWidth > breakpoint && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, breakpoint]);

  return { isOpen, isMobile, toggleMenu, setIsOpen };
};

export default useToggleMenu;
