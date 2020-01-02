import React from "react";

const Button = ({ text, classes }) => {
  return (
    <button
      type="button"
      className={`button is-rounded ${classes ? classes : ""}`}
      style={{ marginRight: "15px" }}
    >
      {text}
    </button>
  );
};

export default Button;
