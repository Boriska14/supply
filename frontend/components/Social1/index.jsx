import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import Frame113 from "../Frame113";
import Frame114 from "../Frame114";
import Frame115 from "../Frame115";
import Frame116 from "../Frame116";
import Frame117 from "../Frame117";
import Toggle from "../Toggle";
import "./Social1.css";
export let s_allData1 = [];
export let s_final = 0;
export let yes_Count1 = 0;

function Social1(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount1, setYesCount1] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
    pleaseAnswerTheFollowingQuestions,
    navItems3Props,
    frame113Props,
    frame117Props,
    toggle1Props,
    toggle2Props,
    toggle3Props,
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
      yes_Count1++;
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
    s_allData1 = s_allData1.concat(data); // Concatène les nouvelles données à allData
    console.log(s_allData1);
    console.log(yes_Count1);
    history.push("/social-2");
    return s_allData1;
  }

  return (
    <div className="container-center-horizontal">
      <div className="social-1-1 screen">
        <div className="overlap-group-27">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-27"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-8">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <div className="nav-items-2-35">
              <Frame113 className={frame113Props.className} />
              <Frame114 />
              <Frame115 />
              <Frame116 />
              <Frame117 className={frame117Props.className} />
            </div>
          </div>
        </div>
        <p className="please-answer-the-following-questions-6 valign-text-middle bevan-normal-white-20px">
          {pleaseAnswerTheFollowingQuestions}
        </p>
        <br />
        <p className="yes-count">
          Score: {yes_Count1} / {totalQuestions}
        </p>
        <div className="emploirelation-employeur-employ-1">
          <div className="emploi-relation-employeur-employ-1">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-limit-any-typ subtitel"
                htmlFor="doyoulimitanytypeofdiscriminationbetweenemployeesinordertoensureequalopportunitiesandequaltreatmentespeciallyformenandwomen"
              >
                Limit any type of discrimination between employees, in order to
                ensure equal opportunities and equal treatment, especially for
                men and women?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Limit any type of discrimination between employees, in order to ensure equal opportunities and equal treatment, especially for men and women?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Limit any type of discrimination between employees, in order to ensure equal opportunities and equal treatment, especially for men and women?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Limit any type of discrimination between employees, in order to ensure equal opportunities and equal treatment, especially for men and women?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Limit any type of discrimination between employees, in order to ensure equal opportunities and equal treatment, especially for men and women?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Limit any type of discrimination between employees, in order to ensure equal opportunities and equal treatment, especially for men and women?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Limit any type of discrimination between employees, in order to ensure equal opportunities and equal treatment, especially for men and women?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-have-a-percen subtitel"
                htmlFor="doyouhaveapercentageofincidentsofdiscriminationthathavebeenremedied"
              >
                Do you have a percentage of incidents of discrimination that
                have been remedied?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have a percentage of incidents of discrimination that have been remedied?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have a percentage of incidents of discrimination that have been remedied?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have a percentage of incidents of discrimination that have been remedied?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have a percentage of incidents of discrimination that have been remedied?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have a percentage of incidents of discrimination that have been remedied?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have a percentage of incidents of discrimination that have been remedied?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label className="what-is-it subtitel" htmlFor="whatisit">
                Which one is it?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Which one is it?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Which one is it?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={selectedOptions["Which one is it?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("Which one is it?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Which one is it?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={selectedOptions["Which one is it?"] === "Yes"}
                ></input>
              </div>
            </section>
          </div>
          <div className="emploi-relation-employeur-employ-2">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-promote-stabi subtitel"
                htmlFor="doyoupromotestabilityofemploymentandthereforeofemploymentcontractsdoesthisobjectivealsoincludeanticipatingsituationsthatmayaffectemploymentinthecompany"
              >
                Do you promote stability of employment, and therefore of
                employment contracts? Does this objective also include
                anticipating situations that may affect employment in the
                company?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you promote stability of employment, and therefore of employment contracts? Does this objective also include anticipating situations that may affect employment in the company?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you promote stability of employment, and therefore of employment contracts? Does this objective also include anticipating situations that may affect employment in the company?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you promote stability of employment, and therefore of employment contracts? Does this objective also include anticipating situations that may affect employment in the company?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you promote stability of employment, and therefore of employment contracts? Does this objective also include anticipating situations that may affect employment in the company?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you promote stability of employment, and therefore of employment contracts? Does this objective also include anticipating situations that may affect employment in the company?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you promote stability of employment, and therefore of employment contracts? Does this objective also include anticipating situations that may affect employment in the company?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-prefer-to-hir subtitel"
                name="doyouprefertohirepermanentemployees"
              >
                Do you prefer to hire permanent employees?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("Do you prefer to hire permanent employees?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you prefer to hire permanent employees?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you prefer to hire permanent employees?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("Do you prefer to hire permanent employees?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you prefer to hire permanent employees?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you prefer to hire permanent employees?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-have-turnover subtitel"
                name="doyouhaveturnover"
              >
                Do you have turnover?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Do you have turnover?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Do you have turnover?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={selectedOptions["Do you have turnover?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("Do you have turnover?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Do you have turnover?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={selectedOptions["Do you have turnover?"] === "Yes"}
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="what-is-your-turnover-rate-over-a-year subtitel"
                name="whatisyourturnoverrateoverayear"
              >
                What is your turnover rate over the year?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("What is your turnover rate over the year?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "What is your turnover rate over the year?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "What is your turnover rate over the year?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("What is your turnover rate over the year?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "What is your turnover rate over the year?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "What is your turnover rate over the year?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-74">
          <Toggle
            className={toggle3Props.className}
            buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-112-7">
            <div className="next valign-text-middle inter-bold-mineral-green-18px">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Social1;
