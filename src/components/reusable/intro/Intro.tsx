import React from "react";
import "./intro.scss";

const Intro = ({ title, description }) => (
  <div className="intro">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default Intro;
