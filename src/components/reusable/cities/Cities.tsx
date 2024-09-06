import React from "react";
import "./cities.scss";
import { Button } from "../button/index.ts";
const Cities = () => {
  return (
    <div className="cities">
      <div>
        <img src="../../assets/shared/desktop/illustration-canada.svg" alt="" />
        <h3>CANADA</h3>
        <Button variant="light">SEE LOCATION</Button>
      </div>
      <div>
        <img
          src="../../assets/shared/desktop/illustration-australia.svg"
          alt=""
        />
        <h3>AUSTRALIA</h3>
        <Button variant="light">SEE LOCATION</Button>
      </div>
      <div>
        <img
          src="../../assets/shared/desktop/illustration-united-kingdom.svg"
          alt=""
        />
        <h3>UNITED KINGDOM</h3>
        <Button variant="light">SEE LOCATION</Button>
      </div>
    </div>
  );
};

export default Cities;
