import React from "react";
import { Link } from "react-router-dom";
import HeaderMenuDefault6 from "../HeaderMenuDefault6";
import HeaderMenuDefault5 from "../HeaderMenuDefault5";
import HeaderMenuDefault from "../HeaderMenuDefault";
import HeaderMenuDefault7 from "../HeaderMenuDefault7";
import Toggle from "../Toggle";
import "./Cost.css";

function Cost(props) {
  const {
    x1200PxLogo_Icam__20081,
    pleaseAnswerTheFollowingQuestions,
    label1,
    label2,
    headerMenuDefault61Props,
    headerMenuDefault51Props,
    headerMenuDefault52Props,
    headerMenuDefaultProps,
    headerMenuDefault53Props,
    headerMenuDefault54Props,
    headerMenuDefault62Props,
    toggle1Props,
    toggle2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="cost-4 screen" name="form16" action="form16" method="post">
        <div className="overlap-group-93">
          <div className="rectangle-3-33"></div>
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-90"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <p className="please-answer-the-following-questions-33 valign-text-middle bevan-normal-white-20px">
            {pleaseAnswerTheFollowingQuestions}
          </p>
          <div className="frame-2-34">
            <div className="nav-items-7">
              <a href="javascript:SubmitForm('form16')">
                <div className="label-176 inter-medium-sonic-silver-18-1px">{label1}</div>
              </a>
              <HeaderMenuDefault6>{headerMenuDefault61Props.children}</HeaderMenuDefault6>
              <HeaderMenuDefault5 className={headerMenuDefault51Props.className}>
                {headerMenuDefault51Props.children}
              </HeaderMenuDefault5>
              <HeaderMenuDefault5 className={headerMenuDefault52Props.className}>
                {headerMenuDefault52Props.children}
              </HeaderMenuDefault5>
              <a href="javascript:SubmitForm('form16')">
                <div className="frame-2-35">
                  <HeaderMenuDefault>{headerMenuDefaultProps.children}</HeaderMenuDefault>
                </div>
              </a>
            </div>
          </div>
          <div className="nav-items-8">
            <HeaderMenuDefault7 />
            <HeaderMenuDefault5 className={headerMenuDefault53Props.className}>
              {headerMenuDefault53Props.children}
            </HeaderMenuDefault5>
            <HeaderMenuDefault5 className={headerMenuDefault54Props.className}>
              {headerMenuDefault54Props.children}
            </HeaderMenuDefault5>
            <div className="frame-2-36">
              <HeaderMenuDefault6 className={headerMenuDefault62Props.className}>
                {headerMenuDefault62Props.children}
              </HeaderMenuDefault6>
            </div>
            <Link to="/functional-view">
              <div className="label-177 inter-medium-sonic-silver-18-1px">{label2}</div>
            </Link>
          </div>
        </div>
        <div className="toggle-container-6">
          <Toggle className={toggle1Props.className} buttonSecondaryProps={toggle1Props.buttonSecondaryProps} />
          <Toggle className={toggle2Props.className} buttonSecondaryProps={toggle2Props.buttonSecondaryProps} />
        </div>
      </form>
    </div>
  );
}

export default Cost;
