import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Social5.css";
export let s_allData5 = [];
export let yes_Count5 = 0;

function Social5(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount5, setYesCount5] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
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
      yes_Count5++;
      setYesCount5((prevYesCount) => prevYesCount + 1);
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
    s_allData5 = s_allData5.concat(data); // Concatène les nouvelles données à allData
    console.log(s_allData5);
    // console.log(yesCount5);
    console.log(yes_Count5);
    history.push("/social-6");
    return s_allData5;
  }

  return (
    <div className="container-center-horizontal">
      <div className="social-5 screen">
        <div className="overlap-group-83">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-27"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-49">
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
          Score: {yes_Count5} / {totalQuestions}
        </p>
        <div className="sant-et-scurit-au-travail">
          <div className="sant-et-scurit-au-travail-1">
            <div className="group-107-4">
              <div className="flex-col-104">
                <Toggle
                  className={toggle1Props.className}
                  buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
                />

                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-promote-the-e subtitel"
                    htmlFor="doyoupromotetheemployabilityofemployeesbyanticipatingtheevolutionofskills"
                  >
                    Do you promote the employability of employees by
                    anticipating the evolution of skills?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you promote the employability of employees by anticipating the evolution of skills?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you promote the employability of employees by anticipating the evolution of skills?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you promote the employability of employees by anticipating the evolution of skills?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you promote the employability of employees by anticipating the evolution of skills?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you promote the employability of employees by anticipating the evolution of skills?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you promote the employability of employees by anticipating the evolution of skills?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>

                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-carry-out-a-b subtitel"
                    htmlFor="doyoucarryoutabusinessneedsanalysis"
                  >
                    Do you carry out a business needs analysis?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you carry out a business needs analysis?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you carry out a business needs analysis?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you carry out a business needs analysis?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you carry out a business needs analysis?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you carry out a business needs analysis?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you carry out a business needs analysis?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-make-an-inven subtitel"
                    htmlFor="doyoumakeaninventoryoftheskillsneeded"
                  >
                    Do you make an inventory of the skills needed?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you make an inventory of the skills needed?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you make an inventory of the skills needed?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you make an inventory of the skills needed?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you make an inventory of the skills needed?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you make an inventory of the skills needed?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you make an inventory of the skills needed?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>

                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-provide-training-for-employees subtitel"
                    htmlFor="doyouprovidetrainingforemployees"
                  >
                    Do you provide training for employees?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked("Do you provide training for employees?", "Yes")
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you provide training for employees?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you provide training for employees?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked("Do you provide training for employees?", "No")
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you provide training for employees?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you provide training for employees?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="sant-et-scurit-au-travail-2">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-listen-to-emp subtitel"
                htmlFor="doyoulistentoemployeesexpectationsinordertocontributetotheirdevelopmentatworkandtheircareerpath"
              >
                Do you listen to employees' expectations in order to contribute
                to their development at work and their career path?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you listen to employees' expectations in order to contribute to their development at work and their career path?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you listen to employees' expectations in order to contribute to their development at work and their career path?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you listen to employees' expectations in order to contribute to their development at work and their career path?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you listen to employees' expectations in order to contribute to their development at work and their career path?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you listen to employees' expectations in order to contribute to their development at work and their career path?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you listen to employees' expectations in order to contribute to their development at work and their career path?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section>
              <label
                className="do-you-offer-employe subtitel"
                htmlFor="doyouofferemployeesevaluationandreflectioninterviewsontheircareerpath"
              >
                Do you offer employees evaluation and reflection interviews on
                their career path?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you offer employees evaluation and reflection interviews on their career path?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you offer employees evaluation and reflection interviews on their career path?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you offer employees evaluation and reflection interviews on their career path?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you offer employees evaluation and reflection interviews on their career path?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you offer employees evaluation and reflection interviews on their career path?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you offer employees evaluation and reflection interviews on their career path?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-offer-employe-1 subtitel"
                htmlFor="doyouofferemployeesanindividualinterviewduringtheyear"
              >
                Do you offer employees an individual interview during the year?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you offer employees an individual interview during the year?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you offer employees an individual interview during the year?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you offer employees an individual interview during the year?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you offer employees an individual interview during the year?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you offer employees an individual interview during the year?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you offer employees an individual interview during the year?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="sant-et-scurit-au-travail-3">
            <Toggle
              className={toggle3Props.className}
              buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-ensure-that-e subtitel"
                htmlFor="doyouensurethatemployeesdevelopmentisbasedonprinciplesofequityandnon-discrimination"
              >
                Do you ensure that employees' development is based on principles
                of equity and non-discrimination?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you ensure that employees' development is based on principles of equity and non-discrimination?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you ensure that employees' development is based on principles of equity and non-discrimination?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you ensure that employees' development is based on principles of equity and non-discrimination?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you ensure that employees' development is based on principles of equity and non-discrimination?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you ensure that employees' development is based on principles of equity and non-discrimination?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you ensure that employees' development is based on principles of equity and non-discrimination?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-150">
          <Toggle
            className={toggle4Props.className}
            buttonSecondaryProps={toggle4Props.buttonSecondaryProps}
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

export default Social5;
