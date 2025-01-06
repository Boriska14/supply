import React from "react";
import { Link } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Frame111 from "../Frame111";
import Toggle from "../Toggle";
import "./Quality7.css";

function Quality7(props) {
  const { x1200PxLogo_Icam__20081, clientConsommateur, navItems3Props, frame111Props, toggleProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="quality-7 screen">
        <div className="overlap-group-33">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-33"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-11">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <Frame111 {...frame111Props} />
        <div className="flex-row-80">
          <Toggle className={toggleProps.className} buttonSecondaryProps={toggleProps.buttonSecondaryProps} />
          <div className="frame-112-3">
            <div className="client-consommateur valign-text-middle inter-bold-mineral-green-18px">
              {clientConsommateur}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality7;
