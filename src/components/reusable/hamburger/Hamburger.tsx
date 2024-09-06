import React, { useState, useEffect } from "react";
import "./hamburger.scss";
import { Link } from "react-router-dom";
import useToggleMenu from "../../../hooks/useToggleMenu.ts";

const Hamburger: React.FC = () => {
  const { isOpen, isMobile, toggleMenu } = useToggleMenu(576);
  return (
    <>
      {isMobile && (
        <div className={`hamburgerMenu ${isOpen ? "open" : "close"}`}>
          <button className="menuButton" onClick={toggleMenu}>
            <img src="/assets/shared/mobile/icon-hamburger.svg" alt="Menu" />
          </button>
          {isOpen && (
            <>
              <div className="overlay" onClick={toggleMenu}></div>
              <nav className="menu">
                <div className="top">
                  <div>
                    <Link to="/">
                      <img
                        src="../../assets/shared/desktop/logo-dark.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <button className="closeButton" onClick={toggleMenu}>
                    <img
                      src="/assets/shared/mobile/icon-close.svg"
                      alt="Close"
                    />
                  </button>
                </div>

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
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Hamburger;
