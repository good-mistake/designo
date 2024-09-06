import React, { useState } from "react";
import "./buttons.scss";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ variant = "light", children }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <button
      className={`btn button ${clicked ? "clicked" : ""} button--${variant}`}
      onClick={() => {
        setClicked((prev) => !prev);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
