import React from "react";
import { Link } from "react-router-dom";
import Frame1142 from "../Frame1142";
import Frame11532 from "../Frame11532";
import Frame11622 from "../Frame11622";
import Frame11322 from "../Frame11322";
import "./ExistingCase.css";

function ExistingCase(props) {
  const { x1200PxLogo_Icam__20081, existingCase, frame11622Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="existing-case-63 screen">
        <div className="overlap-group-7">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-5"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-3-62">
            <Frame1142 />
            <Frame11532 />
            <div className="frame-117-72">
              <div className="existing-case-64 valign-text-middle inter-medium-sonic-silver-18px">{existingCase}</div>
            </div>
            <Frame11622>{frame11622Props.children}</Frame11622>
            <Frame11322 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExistingCase;
