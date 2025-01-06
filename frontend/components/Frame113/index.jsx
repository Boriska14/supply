import React from "react";
import "./Frame113.css";
import { Link, useHistory } from "react-router-dom";

function Frame113(props) {
  const { className } = props;

  return (
    <Link to="/aquisition">
      <div className={`frame-113-28 ${className || ""}`}>
        <div className="aquisition-28 valign-text-middle inter-medium-white-18px">
          Aquisition
        </div>
      </div>
    </Link>
  );
}

export default Frame113;