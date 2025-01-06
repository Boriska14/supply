import React from "react";
import { Link } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import "./MeasuringForm.css";

function MeasuringForm(props) {
  const {
    ellipse116,
    x1200PxLogo_Icam__20081,
    criteriaMeasurementForm,
    environnementCriteria1,
    environnementCriteria2,
    x4LeadTimeCriteria,
    x2SocialCriteria,
    x5CostCriteria,
    x3ModernizationCriteria,
    x6QualityCriteria,
    navItems3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="measuring-form-1 screen">
        <img className="ellipse-116-1" src={ellipse116} alt="Ellipse 116" />
        <div className="overlap-group1-23">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-10"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-1">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <div className="criteria-measurement-form valign-text-middle bevan-normal-white-20px">
          {criteriaMeasurementForm}
        </div>
        <div className="flex-row-32">
          <div className="frame-container-5">
            <Link to="/environmental-1">
              <div className="frame-10-1">
                <div className="x-criteria valign-text-middle inter-bold-mineral-green-18px">
                  {environnementCriteria1}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasuringForm;
