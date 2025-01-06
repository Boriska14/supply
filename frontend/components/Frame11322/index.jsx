import React from "react";
import "./Frame11322.css";
import { Link } from "react-router-dom";

function Frame11322(props) {
  const { className } = props;

  return (
    <Link to="/connexion">
    <div className={`frame-113-2 ${className || ""}`}>
      <div className="logout valign-text-middle inter-medium-rum-swizzle-18px">Logout</div>
    </div>
    </Link>
  );
}

export default Frame11322;
