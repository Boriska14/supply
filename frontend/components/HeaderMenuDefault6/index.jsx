import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenuDefault6.css";

function HeaderMenuDefault6(props) {
  const { children, className } = props;

  return (
    <div className={`menu-item-default-37 ${className || ""}`}>
      <Link to="/aquisition">
        <div className="label-170 inter-medium-gravel-14px">{children}</div>
      </Link>
    </div>
  );
}

export default HeaderMenuDefault6;
