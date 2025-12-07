import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`m-auto max-w-container ${className}`}>{children}</div>
  );
};

export default Container;
