import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./LeadTime1.css";
export let l_allData1 = [];
export let l_yesCount1 = 0;

function LeadTime1(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount1, setYesCount1] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
    pleaseAnswerTheFollowingQuestions,
    inputType2,
    inputPlaceholder2,
    navItems3Props,
    toggle1Props,
    toggle2Props,
    toggle3Props,
    toggle4Props,
  } = props;

  useEffect(() => {
    // Calculate the total number of questions based on sections
    const sections = document.getElementsByTagName("section");
    setTotalQuestions(sections.length);
  }, []); // Run this effect only once when the component mounts

  function clicked(question, option) {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [question]: option,
    }));
    if (option === "Yes") {
      // Increment yesCount when "Yes" is selected
      l_yesCount1++;
      setYesCount1((prevYesCount) => prevYesCount + 1);
    }
  }

  const history = useHistory();

  function saveData() {
    const sections = document.getElementsByTagName("section");
    const data = [];

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const question = section.innerText.split("\n")[0];
      const enabledValue = selectedOptions[question] || ""; // Get the selected option

      if (enabledValue === "") {
        setErrorMessage(`Répondez à toutes les questions s'il vous plait`);
        window.alert(errorMessage);
        return; // Stop processing if an error occurs
      }
      const questionObj = {
        question: question,
        answer: enabledValue,
      };

      data.push(questionObj);
    }
    l_allData1 = l_allData1.concat(data); // Concatène les nouvelles données à allData
    console.log(l_allData1);
    console.log(l_yesCount1);
    history.push("/lead-time-2");
    return l_allData1;
  }

  return (
    <div className="container-center-horizontal">
      <div className="lead-time-1-1 screen">
        <div className="overlap-group-30">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-30"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-10">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <p className="yes-count">
          Score: {l_yesCount1} / {totalQuestions}
        </p>
        <p className="please-answer-the-following-questions-9 valign-text-middle bevan-normal-white-20px">
          {pleaseAnswerTheFollowingQuestions}
        </p>
        <div className="dialogue-social-1">
          <div className="dialogue-social-1-1">
            <div className="group-107">
              <div className="flex-col-51">
                <Toggle
                  className={toggle1Props.className}
                  buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
                />
                <section>
                  <label
                    className="do-you-have-a-delay-rate subtitel"
                    htmlFor="doyouhaveadelayrate"
                  >
                    Do you have a delay rate?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked("Do you have a delay rate?", "Yes")
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions["Do you have a delay rate?"] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions["Do you have a delay rate?"] === "No"
                      }
                    ></input>
                    <input
                      onClick={() => clicked("Do you have a delay rate?", "No")}
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions["Do you have a delay rate?"] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions["Do you have a delay rate?"] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
                <section>
                  <label
                    className="if-so-how-much-is-it subtitel"
                    htmlFor="ifsohowmuchisit"
                    placeholder={inputPlaceholder2}
                    type={inputType2}
                  >
                    If so, how much is it?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() => clicked("If so, how much is it?", "Yes")}
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions["If so, how much is it?"] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions["If so, how much is it?"] === "No"
                      }
                    ></input>
                    <input
                      onClick={() => clicked("If so, how much is it?", "No")}
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions["If so, how much is it?"] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions["If so, how much is it?"] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="dialogue-social-2">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="can-your-suppliers-b subtitel"
                htmlFor="canyoursuppliersbeflexibletoyourdemand"
              >
                Can your suppliers be flexible to your demand?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Can your suppliers be flexible to your demand?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Can your suppliers be flexible to your demand?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Can your suppliers be flexible to your demand?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Can your suppliers be flexible to your demand?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Can your suppliers be flexible to your demand?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Can your suppliers be flexible to your demand?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="if-not-can-you-chang subtitel"
                htmlFor="ifnotcanyouchangesuppliersquicklyifthesupplierdoesnotmeetyourexpectations"
              >
                If not, can you change suppliers quickly if the supplier does
                not meet your expectations?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "If not, can you change suppliers quickly if the supplier does not meet your expectations?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "If not, can you change suppliers quickly if the supplier does not meet your expectations?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "If not, can you change suppliers quickly if the supplier does not meet your expectations?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "If not, can you change suppliers quickly if the supplier does not meet your expectations?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "If not, can you change suppliers quickly if the supplier does not meet your expectations?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "If not, can you change suppliers quickly if the supplier does not meet your expectations?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="dialogue-social-3">
            <Toggle
              className={toggle3Props.className}
              buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="if-no-can-you-change subtitel"
                htmlFor="ifnocanyouchangesuppliersquicklyifthesupplierdoesnotmeetyourexpectations"
              >
                If no, can you change suppliers quickly if the supplier does not
                meet your expectations?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "If no, can you change suppliers quickly if the supplier does not meet your expectations?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "If no, can you change suppliers quickly if the supplier does not meet your expectations?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "If no, can you change suppliers quickly if the supplier does not meet your expectations?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "If no, can you change suppliers quickly if the supplier does not meet your expectations?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "If no, can you change suppliers quickly if the supplier does not meet your expectations?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "If no, can you change suppliers quickly if the supplier does not meet your expectations?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-have-calculat subtitel"
                htmlFor="doyouhavecalculationmethodsformakingpurchaseforecasts"
              >
                Do you have calculation methods for making purchase forecasts?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have calculation methods for making purchase forecasts?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have calculation methods for making purchase forecasts?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have calculation methods for making purchase forecasts?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have calculation methods for making purchase forecasts?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have calculation methods for making purchase forecasts?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have calculation methods for making purchase forecasts?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-have-1 subtitel"
                htmlFor="doyouhaveasafetystock"
              >
                Do you have a safety stock?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Do you have a safety stock?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Do you have a safety stock?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have a safety stock?"] === "No"
                  }
                ></input>
                <input
                  onClick={() => clicked("Do you have a safety stock?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Do you have a safety stock?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have a safety stock?"] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-have-1 subtitel"
                htmlFor="doyouhavebufferstocks"
              >
                Do you have buffer stocks?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Do you have buffer stocks?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Do you have buffer stocks?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have buffer stocks?"] === "No"
                  }
                ></input>
                <input
                  onClick={() => clicked("Do you have buffer stocks?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Do you have buffer stocks?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have buffer stocks?"] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-77">
          <Toggle
            className={toggle4Props.className}
            buttonSecondaryProps={toggle4Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-112-9">
            <div className="next valign-text-middle inter-bold-mineral-green-18px">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadTime1;
