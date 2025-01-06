import React from "react";
import { Link } from "react-router-dom";
import Avatars from "../Avatars";
import Toggle from "../Toggle";
import HeaderMenuDefault6 from "../HeaderMenuDefault6";
import HeaderMenuDefault5 from "../HeaderMenuDefault5";
import HeaderMenuDefault from "../HeaderMenuDefault";
import HeaderMenuDefault7 from "../HeaderMenuDefault7";
import Group102 from "../Group102";
import "./Modernization.css";

function Modernization(props) {
  const {
    x1200PxLogo_Icam__20081,
    admin,
    pleaseAnswerTheFollowingQuestions,
    label1,
    label2,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    inputType4,
    inputPlaceholder4,
    inputType5,
    inputPlaceholder5,
    inputType6,
    inputPlaceholder6,
    inputType7,
    inputPlaceholder7,
    inputType8,
    inputPlaceholder8,
    inputType9,
    inputPlaceholder9,
    inputType10,
    inputPlaceholder10,
    avatarsProps,
    toggle1Props,
    headerMenuDefault61Props,
    headerMenuDefault51Props,
    headerMenuDefault52Props,
    headerMenuDefaultProps,
    headerMenuDefault53Props,
    headerMenuDefault54Props,
    headerMenuDefault62Props,
    toggle2Props,
    group1021Props,
    group1022Props,
    group1023Props,
    group1024Props,
    group1025Props,
    toggle3Props,
    group1026Props,
    group1027Props,
    group1028Props,
    group1029Props,
    group10210Props,
    toggle4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="modernization-5 screen" name="form19" action="form19" method="post">
        <div className="overlap-group1-53">
          <div className="rectangle-3-34"></div>
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-91"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="admin">{admin}</div>
          <Avatars ellipse83={avatarsProps.ellipse83} ellipse81={avatarsProps.ellipse81} />
          <Toggle className={toggle1Props.className} buttonSecondaryProps={toggle1Props.buttonSecondaryProps} />
          <p className="please-answer-the-following-questions-34 valign-text-middle bevan-normal-white-20px">
            {pleaseAnswerTheFollowingQuestions}
          </p>
          <div className="frame-2-37">
            <div className="nav-items-9">
              <a href="javascript:SubmitForm('form19')">
                <div className="label-178 inter-medium-sonic-silver-18-1px">{label1}</div>
              </a>
              <HeaderMenuDefault6>{headerMenuDefault61Props.children}</HeaderMenuDefault6>
              <HeaderMenuDefault5 className={headerMenuDefault51Props.className}>
                {headerMenuDefault51Props.children}
              </HeaderMenuDefault5>
              <HeaderMenuDefault5 className={headerMenuDefault52Props.className}>
                {headerMenuDefault52Props.children}
              </HeaderMenuDefault5>
              <a href="javascript:SubmitForm('form19')">
                <div className="frame-2-38">
                  <HeaderMenuDefault>{headerMenuDefaultProps.children}</HeaderMenuDefault>
                </div>
              </a>
            </div>
          </div>
          <div className="nav-items-10">
            <HeaderMenuDefault7 />
            <HeaderMenuDefault5 className={headerMenuDefault53Props.className}>
              {headerMenuDefault53Props.children}
            </HeaderMenuDefault5>
            <HeaderMenuDefault5 className={headerMenuDefault54Props.className}>
              {headerMenuDefault54Props.children}
            </HeaderMenuDefault5>
            <div className="frame-2-39">
              <HeaderMenuDefault6 className={headerMenuDefault62Props.className}>
                {headerMenuDefault62Props.children}
              </HeaderMenuDefault6>
            </div>
            <Link to="/functional-view">
              <div className="label-179 inter-medium-sonic-silver-18-1px">{label2}</div>
            </Link>
          </div>
          <div className="frame-87">
            <Toggle className={toggle2Props.className} buttonSecondaryProps={toggle2Props.buttonSecondaryProps} />
            <input
              className="utilisez-vous-une-erp subtitel"
              name="utilisezvousuneerp"
              placeholder={inputPlaceholder1}
              type={inputType1}
            />
            <Group102 line24={group1021Props.line24} />
            <input
              className="lisez subtitel"
              name="utilisezvouscetteerppourpasserlescommandes"
              placeholder={inputPlaceholder2}
              type={inputType2}
            />
            <Group102 line24={group1022Props.line24} />
            <input
              className="quel-canal-utilisez subtitel"
              name="quelcanalutilisezvouspourcommuniquerdanslentreprise"
              placeholder={inputPlaceholder3}
              type={inputType3}
            />
            <Group102 line24={group1023Props.line24} />
            <input
              className="x-24 subtitel"
              name="*******************************************"
              placeholder={inputPlaceholder4}
              type={inputType4}
            />
            <Group102 line24={group1024Props.line24} />
            <input
              className="x-25 subtitel"
              name="*******************************************"
              placeholder={inputPlaceholder5}
              type={inputType5}
            />
            <Group102 line24={group1025Props.line24} />
          </div>
          <div className="frame-88">
            <Toggle className={toggle3Props.className} buttonSecondaryProps={toggle3Props.buttonSecondaryProps} />
            <input
              className="utilisez-vous-des-robots subtitel"
              name="utilisezvousdesrobots"
              placeholder={inputPlaceholder6}
              type={inputType6}
            />
            <Group102 line24={group1026Props.line24} className={group1026Props.className} />
            <input className="lisez subtitel" name="utilisezdesrpa" placeholder={inputPlaceholder7} type={inputType7} />
            <Group102 line24={group1027Props.line24} className={group1027Props.className} />
            <input
              className="lisez subtitel"
              name="modélisezvousvosprocessus3dpourunemeilleurevisibilité"
              placeholder={inputPlaceholder8}
              type={inputType8}
            />
            <Group102 line24={group1028Props.line24} className={group1028Props.className} />
            <input
              className="x-26 subtitel"
              name="***********************************************"
              placeholder={inputPlaceholder9}
              type={inputType9}
            />
            <Group102 line24={group1029Props.line24} className={group1029Props.className} />
            <input
              className="x-27 subtitel"
              name="*************************************"
              placeholder={inputPlaceholder10}
              type={inputType10}
            />
            <Group102 line24={group10210Props.line24} className={group10210Props.className} />
          </div>
        </div>
        <Toggle className={toggle4Props.className} buttonSecondaryProps={toggle4Props.buttonSecondaryProps} />
      </form>
    </div>
  );
}

export default Modernization;
