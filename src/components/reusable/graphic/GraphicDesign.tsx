import React from "react";
import { Link } from "react-router-dom";
import "./graphicDesign.scss";
const GraphicDesign = () => {
  return (
    <>
      <div className="graphicDesign">
        <Link to="/graphic-design">
          <h2>GRAPHIC DESIGN</h2>
          <p>
            VIEW PROJECTS{" "}
            <img
              src="../../assets/shared/desktop/icon-right-arrow.svg"
              alt=""
            />
          </p>{" "}
        </Link>
      </div>
    </>
  );
};

export default GraphicDesign;
