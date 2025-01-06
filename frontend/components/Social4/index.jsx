import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Social4.css";
export let s_allData4 = [];
export let yes_Count4 = 0;

function Social4(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount4, setYesCount4] = useState(0); // Initialize yesCount state
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
      yes_Count4++;
      setYesCount4((prevYesCount) => prevYesCount + 1);
    }
  }

  const history = useHistory();

  function saveData() {
    const sections = document.getElementsByTagName("section");
    const data = [];
    yes_Count4 = setYesCount4;

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
    s_allData4 = s_allData4.concat(data); // Concatène les nouvelles données à allData
    console.log(s_allData4);
    console.log(yes_Count4);
    history.push("/social-5");
    return s_allData4;
  }

  return (
    <div className="container-center-horizontal">
      <div className="social-4 screen">
        <div className="overlap-group1-51">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-81"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-47">
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
          Score: {yes_Count4} / {totalQuestions}
        </p>
        <div className="dialogue-social-1-2">
          <div className="dialogue-social-1-3">
            <div className="group-107-2">
              <div className="flex-col-102">
                <Toggle
                  className={toggle1Props.className}
                  buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
                />
                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-have-organisa subtitel"
                    htmlFor="doyouhaveorganisationsthatlistentoemployeesinordertoanticipatetransformationsandchangesintheexpectationsofnewgenerationsincludingtheirrelationshipwithwork"
                  >
                    Do you have organisations that listen to employees in order
                    to anticipate transformations and changes in the
                    expectations of new generations, including their
                    relationship with work?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you have organisations that listen to employees in order to anticipate transformations and changes in the expectations of new generations, including their relationship with work?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you have organisations that listen to employees in order to anticipate transformations and changes in the expectations of new generations, including their relationship with work?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you have organisations that listen to employees in order to anticipate transformations and changes in the expectations of new generations, including their relationship with work?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you have organisations that listen to employees in order to anticipate transformations and changes in the expectations of new generations, including their relationship with work?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you have organisations that listen to employees in order to anticipate transformations and changes in the expectations of new generations, including their relationship with work?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you have organisations that listen to employees in order to anticipate transformations and changes in the expectations of new generations, including their relationship with work?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-have-employees-representatives subtitel"
                    htmlFor="doyouhaveemployeesrepresentatives"
                  >
                    Do you have employees' representatives?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you have employees' representatives?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you have employees' representatives?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you have employees' representatives?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked("Do you have employees' representatives?", "No")
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you have employees' representatives?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you have employees' representatives?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>

                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="does-your-company-have-any-trade-unions subtitel"
                    htmlFor="doesyourcompanyhaveanytradeunions"
                  >
                    Does your company have any trade unions?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Does your company have any trade unions?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Does your company have any trade unions?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Does your company have any trade unions?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Does your company have any trade unions?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Does your company have any trade unions?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Does your company have any trade unions?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="dialogue-social-container">
            <div className="dialogue-social-2-1">
              <Toggle
                className={toggle2Props.className}
                buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
              />

              <section className="question" style={{ textAlign: "center" }}>
                <label
                  className="are-employees-involv subtitel"
                  htmlFor="areemployeesinvolvedinthediscussionsthatleadtodecisionsinthecompany"
                >
                  Are employees involved in the discussions that lead to in the
                  company?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Are employees involved in the discussions that lead to in the company?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Are employees involved in the discussions that lead to in the company?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Are employees involved in the discussions that lead to in the company?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Are employees involved in the discussions that lead to in the company?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Are employees involved in the discussions that lead to in the company?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Are employees involved in the discussions that lead to in the company?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>

              <section className="question" style={{ textAlign: "center" }}>
                <label
                  className="are-employees-integr subtitel"
                  htmlFor="areemployeesintegratedintothesocialdialogueinthecompany"
                >
                  Are employees integrated into the social dialogue in the
                  company?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Are employees integrated into the social dialogue in the company?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Are employees integrated into the social dialogue in the company?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Are employees integrated into the social dialogue in the company?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Are employees integrated into the social dialogue in the company?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Are employees integrated into the social dialogue in the company?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Are employees integrated into the social dialogue in the company?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>
            </div>
            <div className="dialogue-social-3-1">
              <Toggle
                className={toggle3Props.className}
                buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
              />
              <section className="question" style={{ textAlign: "center" }}>
                <label
                  className="do-you-promote-excha subtitel"
                  htmlFor="doyoupromoteexchangesoneconomicandsocialissueswithinthecompanythroughnegotiationsconsultationsandinformationexchangebetweenemployersmanagersandemployees"
                >
                  Do you promote exchanges on economic and social issues within
                  the company, through negotiations, consultations and
                  information exchange between employers, managers and
                  employees?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Do you promote exchanges on economic and social issues within the company, through negotiations, consultations and information exchange between employers, managers and employees?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Do you promote exchanges on economic and social issues within the company, through negotiations, consultations and information exchange between employers, managers and employees?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Do you promote exchanges on economic and social issues within the company, through negotiations, consultations and information exchange between employers, managers and employees?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Do you promote exchanges on economic and social issues within the company, through negotiations, consultations and information exchange between employers, managers and employees?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Do you promote exchanges on economic and social issues within the company, through negotiations, consultations and information exchange between employers, managers and employees?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Do you promote exchanges on economic and social issues within the company, through negotiations, consultations and information exchange between employers, managers and employees?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="flex-row-148">
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

export default Social4;
