import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Social3.css";
export let s_allData3 = [];
export let yes_Count3 = 0;

function Social3(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount3, setYesCount3] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
    navItems3Props,
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
      yes_Count3++;
      setYesCount3((prevYesCount) => prevYesCount + 1);
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
        //return; // Stop processing if an error occurs
      }
      const questionObj = {
        question: question,
        answer: enabledValue,
      };

      data.push(questionObj);
    }
    s_allData3 = s_allData3.concat(data); // Concatène les nouvelles données à allData
    console.log(s_allData3);
    console.log(yes_Count3);
    history.push("/social-4");
    return s_allData3;
  }

  return (
    <div className="container-center-horizontal">
      <div className="social-3 screen">
        <div className="overlap-group-80">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-79"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-44">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <br />
        <p className="yes-count">
          Score: {yes_Count3} / {totalQuestions}
        </p>
        <div className="conditions-de-travai">
          <div className="conditions-de-travai-1">
            <div className="frame-124">
              <div className="flex-col-101">
                <Toggle
                  className={toggle1Props.className}
                  buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
                />
                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-listen-to-wor subtitel"
                    htmlFor="doyoulistentoworkersintheorganisationofworkingtimerhythmanticipationarticulationtemporality"
                  >
                    Do you listen to workers in the organisation of working time
                    (rhythm, anticipation, articulation, temporality)?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you listen to workers in the organisation of working time (rhythm, anticipation, articulation, temporality)?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you listen to workers in the organisation of working time (rhythm, anticipation, articulation, temporality)?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you listen to workers in the organisation of working time (rhythm, anticipation, articulation, temporality)?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you listen to workers in the organisation of working time (rhythm, anticipation, articulation, temporality)?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you listen to workers in the organisation of working time (rhythm, anticipation, articulation, temporality)?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you listen to workers in the organisation of working time (rhythm, anticipation, articulation, temporality)?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>

                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-conduct-at-le subtitel"
                    htmlFor="doyouconductatleastoneemployeesurveyperyear"
                  >
                    Do you carry out at least one employee survey per year?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you carry out at least one employee survey per year?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you carry out at least one employee survey per year?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you carry out at least one employee survey per year?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you carry out at least one employee survey per year?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you carry out at least one employee survey per year?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you carry out at least one employee survey per year?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="conditions-de-travai-2">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-promote-stabi-1 subtitel"
                name="doyoupromotestabilityofemploymentandthereforeofemploymentcontractsdoesthisobjectivealsoincludeanticipatingsituationsthatmayaffectemploymentinthecompany"
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
                className="do-you-offer-adapted subtitel"
                htmlFor="doyouofferadaptedschedulestoyouremployeesinneed"
              >
                Do you offer adapted schedules to your employees in need?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you offer adapted schedules to your employees in need?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you offer adapted schedules to your employees in need?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you offer adapted schedules to your employees in need?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you offer adapted schedules to your employees in need?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you offer adapted schedules to your employees in need?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you offer adapted schedules to your employees in need?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-ensure-decent subtitel"
                htmlFor="doyouensuredecentworkingconditionstakingintoaccountthespecificitiesoftheareaswherethecompanyislocatedgenerallevelofsalariesinthecountrieswherethecompanyislocatedcostoflivingadvantagesconferredbythesocialsecuritysystemsinplace"
              >
                Do you ensure decent working conditions, taking into account the
                specificities of the areas where the company is located (general
                level of salaries in the countries where the company is located,
                cost of living, advantages conferred by the social security
                systems in place...)?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you ensure decent working conditions, taking into account the specificities of the areas where the company is located (general level of salaries in the countries where the company is located, cost of living, advantages conferred by the social security systems in place...)?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you ensure decent working conditions, taking into account the specificities of the areas where the company is located (general level of salaries in the countries where the company is located, cost of living, advantages conferred by the social security systems in place...)?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you ensure decent working conditions, taking into account the specificities of the areas where the company is located (general level of salaries in the countries where the company is located, cost of living, advantages conferred by the social security systems in place...)?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you ensure decent working conditions, taking into account the specificities of the areas where the company is located (general level of salaries in the countries where the company is located, cost of living, advantages conferred by the social security systems in place...)?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you ensure decent working conditions, taking into account the specificities of the areas where the company is located (general level of salaries in the countries where the company is located, cost of living, advantages conferred by the social security systems in place...)?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you ensure decent working conditions, taking into account the specificities of the areas where the company is located (general level of salaries in the countries where the company is located, cost of living, advantages conferred by the social security systems in place...)?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-145">
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

export default Social3;
