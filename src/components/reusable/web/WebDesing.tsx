import React from "react";
import { Link } from "react-router-dom";
import "./webDesign.scss";
const WebDesing = () => {
  return (
    <>
      <Link to="/web-design">
        <div className="largeDesign">
          <h2>WEB DESIGN</h2>
          <p>
            VIEW PROJECTS
            <img
              src="../../assets/shared/desktop/icon-right-arrow.svg"
              alt=""
            />
          </p>
        </div>
      </Link>
    </>
  );
};

export default WebDesing;
