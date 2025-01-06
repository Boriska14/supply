import React from "react";
import { Link } from "react-router-dom";
import NavItems22 from "../NavItems22";
import Frame1142 from "../Frame1142";
import Frame11532 from "../Frame11532";
import Frame11322 from "../Frame11322";
import Pricing3 from "../Pricing3";
import "./CurPerformances.css";
import { yes_Count5 } from "../Social5";
import { s_sum } from "../Social6";
import { company_name } from "../Aquisition";
import { e_sum } from "../Environmental5";
import { s_sum } from "../Social6";
import { m_sum } from "../Modernization4";
import { l_sum } from "../LeadTime2";
import { c_sum } from "../Cost2";
import { q_sum } from "../Quality6";
import { cc_sum } from "../ClientConsommateur2";

function CurPerformances(props) {
  const {
    label1,
    label2,
    x1200PxLogo_Icam__20081,
    place1,
    place2,
    line211,
    leadTime,
    className,
    environment,
    navItems22Props,
    frame1142Props,
    frame11322Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cur-performances screen">
        <div className="flex-col-49">
          <div className="overlap-group1-32">
            <div className="overlap-group-25">
              <div className="rectangle-2-1"></div>
              <NavItems22
                className={navItems22Props.className}
                frame11332Props={navItems22Props.frame11332Props}
              />
              <div className="nav-items-3-67">
                <Frame1142 className={frame1142Props.className} />
                <Frame11532 />
                <Link to="/existing-case">
                  <div className="label-129 inter-medium-star-dust-18-1px">
                    {label1}
                  </div>
                </Link>
                <Link to="/cur-performances">
                  <div className="label-129 inter-medium-sonic-silver-18-1px">
                    {label2}
                  </div>
                </Link>
                <Frame11322 className={frame11322Props.className} />
              </div>
              <Link to="/home">
                <img
                  className="x1200px-logo_icam_-_2008-1-25"
                  src={x1200PxLogo_Icam__20081}
                  alt="1200px-Logo_ICAM_-_2008 1"
                />
              </Link>
              <div className="frame-3-5"></div>
            </div>
            <Link to="/client-consommateur-1">
              <div className="frame-5-13">
                <div className="place-249 valign-text-middle inter-bold-tropical-rain-forest-18px">
                  {place1}
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <h1 className="cost inter-bold-rum-swizzle-24px">
              {" "}
              Audited Enterprise: {company_name}
            </h1>
          </div>
          <div className="pricing-container-1">
            <div className="pricing-1-1">
              <h1 className="place-250 inter-bold-mineral-green-24px">
                {place2}
              </h1>
              <label
                className="x25-16 inter-bold-mineral-green-56px"
                htmlFor="25"
              >
                {q_sum}/81
              </label>
              <img className="line-21-6" src={line211} alt="Line 21" />
            </div>
            <div className={`pricing-3 ${className || ""}`}>
              <h1 className="cost inter-bold-rum-swizzle-24px">Cost</h1>
              <label className="x25-4 inter-bold-rum-swizzle-56px" htmlFor="25">
                {c_sum}/22
              </label>
              <img
                className="line-21-2"
                src="/img/line-21-1@2x.png"
                alt="Line 21"
              />
            </div>
            {/* <Pricing3 cost={pricing31Props.cost} /> */}
            <div className="pricing-2-1">
              <div className="lead-time-1 inter-bold-mineral-green-24px">
                {leadTime}
              </div>
              <label
                className="x25-17 inter-bold-mineral-green-56px"
                htmlFor="25"
              >
                {l_sum}/18
              </label>
              <img className="line-21-6" src={line211} alt="Line 21" />
            </div>
            <div className={`pricing-3 ${className || ""}`}>
              <h1 className="cost inter-bold-rum-swizzle-24px">
                Modernization
              </h1>
              <label className="x25-4 inter-bold-rum-swizzle-56px" htmlFor="25">
                {m_sum}/26
              </label>
              <img
                className="line-21-2"
                src="/img/line-21-1@2x.png"
                alt="Line 21"
              />
            </div>
            {/* <Pricing3
              cost={pricing32Props.cost}
              className={pricing32Props.className}
            /> */}
          </div>
        </div>
        <div className="flex-row-72">
          <div className={`pricing-3 ${className || ""}`}>
            <h1 className="cost inter-bold-rum-swizzle-24px">Social</h1>
            <label className="x25-4 inter-bold-rum-swizzle-56px" htmlFor="25">
              {s_sum}/36
            </label>
            <img
              className="line-21-2"
              src="/img/line-21-1@2x.png"
              alt="Line 21"
            />
          </div>
          {/* <Pricing3
            cost={pricing33Props.cost}
            className={pricing33Props.className}
          /> */}
          <div className="flex-col-50">
            <div className="pricing-6-1">
              <div className="environment-1 inter-bold-mineral-green-24px">
                {environment}
              </div>
              <label
                className="x25-18 inter-bold-mineral-green-56px"
                htmlFor="25"
              >
                {e_sum}/63
              </label>
              <img className="line-21-6" src={line211} alt="Line 21" />
            </div>
            <Link to="/existing-systems">
              <div className="frame-2-18">
                <div className="propositions valign-text-middle inter-bold-tropical-rain-forest-18px">
                  Systems step
                </div>
              </div>
            </Link>
          </div>
          <div className={`pricing-3 ${className || ""}`}>
            <h1 className="cost inter-bold-rum-swizzle-24px">
              Client/Consommateur
            </h1>
            <label className="x25-4 inter-bold-rum-swizzle-56px" htmlFor="25">
              {cc_sum}/17
            </label>
            <img
              className="line-21-2"
              src="/img/line-21-1@2x.png"
              alt="Line 21"
            />
          </div>
          {/* <Pricing3
            cost={pricing34Props.cost}
            className={pricing34Props.className}
          /> */}
        </div>
        {console.log(s_sum)}
      </div>
    </div>
  );
}

export default CurPerformances;
