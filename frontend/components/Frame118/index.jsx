import React from "react";
import "./Frame118.css";
import { Link, useHistory } from "react-router-dom";

function Frame118(props) {
  const { children, className } = props;

  return (
    <div className={`frame-118-2 ${className || ""}`}>
      <div className="informational-model-3 valign-text-middle inter-medium-star-dust-18px">{children}</div>
    </div>
  );
}

export default Frame118;
