import React from "react";
import "./appDesign.scss";
import { Link } from "react-router-dom";

const AppDesign = () => {
  return (
    <>
      <div className="appDesign">
        <Link to={"/app-design"}>
          <h2>APP DESIGN</h2>
          <p>
            VIEW PROJECTS{" "}
            <img
              src="../../assets/shared/desktop/icon-right-arrow.svg"
              alt=""
            />
          </p>
        </Link>
      </div>
    </>
  );
};

export default AppDesign;
