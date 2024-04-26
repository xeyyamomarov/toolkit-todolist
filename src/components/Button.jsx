import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
