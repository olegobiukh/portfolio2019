import React from "react";

const Button = ({ handleClick, title, classes }) => (
  <button className={classes} onClick={() => handleClick(title)}>
    {title}
  </button>
);

export default Button;
