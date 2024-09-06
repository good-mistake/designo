import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { HeaderProps } from "./Header.types";
import Hamburger from "../reusable/hamburger/Hamburger.tsx";
const Header: React.FC<HeaderProps> = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header>
      <div>
        <Link to="/">
          <img src="../../assets/shared/desktop/logo-dark.png" alt="" />
        </Link>
      </div>
      {!isMobile && (
        <nav>
          <ul>
            <li>
              <Link to="/our-company">Our Company</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
      {isMobile && <Hamburger />}
    </header>
  );
};

export default Header;
