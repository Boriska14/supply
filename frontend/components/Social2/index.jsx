import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Social2.css";
export let s_allData2 = [];
export let yes_Count2 = 0;

function Social2(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount2, setYesCount2] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
    navItems3Props,
    toggle1Props,
    toggle2Props,
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
      yes_Count2++;
      setYesCount2((prevYesCount) => prevYesCount + 1);
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
    s_allData2 = s_allData2.concat(data); // Concatène les nouvelles données à allData
    console.log(s_allData2);
    console.log(yes_Count2);
    history.push("/social-3");
    return s_allData2;
  }

  return (
    <div className="container-center-horizontal">
      <div className="social-2-1 screen">
        <div className="overlap-group-36">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-35"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-14">
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
          Score: {yes_Count2} / {totalQuestions}
        </p>
        <div className="emploi-relation-employeur-employ-3-2">
          <Toggle
            className={toggle1Props.className}
            buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
          />
          <section className="question" style={{ textAlign: "center" }}>
            <label
              className="do-you-comply-with-t subtitel"
              htmlFor="doyoucomplywiththefundamentalprinciplesoftheinternationallabourorganisationandreinforcethelawsregulationsandcollectiveagreementsinforceinthecountry"
            >
              Do you comply with the fundamental principles of the International
              Labour Organisation and reinforce the laws, regulations and
              collective agreements in force in the country?
            </label>
            <div className="ouinon-45 ouinon-1-1">
              <input
                onClick={() =>
                  clicked(
                    "Do you comply with the fundamental principles of the International Labour Organisation and reinforce the laws, regulations and collective agreements in force in the country?",
                    "Yes"
                  )
                }
                type="button"
                value="Yes"
                className={`frame-4-5 ${
                  selectedOptions[
                    "Do you comply with the fundamental principles of the International Labour Organisation and reinforce the laws, regulations and collective agreements in force in the country?"
                  ] === "Yes"
                    ? "enabled"
                    : ""
                }`}
                disabled={
                  selectedOptions[
                    "Do you comply with the fundamental principles of the International Labour Organisation and reinforce the laws, regulations and collective agreements in force in the country?"
                  ] === "No"
                }
              ></input>
              <input
                onClick={() =>
                  clicked(
                    "Do you comply with the fundamental principles of the International Labour Organisation and reinforce the laws, regulations and collective agreements in force in the country?",
                    "No"
                  )
                }
                type="button"
                value="No"
                className={`frame-4-6 ${
                  selectedOptions[
                    "Do you comply with the fundamental principles of the International Labour Organisation and reinforce the laws, regulations and collective agreements in force in the country?"
                  ] === "No"
                    ? "enabled"
                    : ""
                }`}
                disabled={
                  selectedOptions[
                    "Do you comply with the fundamental principles of the International Labour Organisation and reinforce the laws, regulations and collective agreements in force in the country?"
                  ] === "Yes"
                }
              ></input>
            </div>
          </section>

          <section className="question" style={{ textAlign: "center" }}>
            <label
              className="have-you-conducted-e subtitel"
              htmlFor="haveyouconductedemployeesurveysonthecollectiveagreement"
            >
              Have you conducted employee surveys on the collective agreement?
            </label>
            <div className="ouinon-45 ouinon-1-1">
              <input
                onClick={() =>
                  clicked(
                    "Have you conducted employee surveys on the collective agreement?",
                    "Yes"
                  )
                }
                type="button"
                value="Yes"
                className={`frame-4-5 ${
                  selectedOptions[
                    "Have you conducted employee surveys on the collective agreement?"
                  ] === "Yes"
                    ? "enabled"
                    : ""
                }`}
                disabled={
                  selectedOptions[
                    "Have you conducted employee surveys on the collective agreement?"
                  ] === "No"
                }
              ></input>
              <input
                onClick={() =>
                  clicked(
                    "Have you conducted employee surveys on the collective agreement?",
                    "No"
                  )
                }
                type="button"
                value="No"
                className={`frame-4-6 ${
                  selectedOptions[
                    "Have you conducted employee surveys on the collective agreement?"
                  ] === "No"
                    ? "enabled"
                    : ""
                }`}
                disabled={
                  selectedOptions[
                    "Have you conducted employee surveys on the collective agreement?"
                  ] === "Yes"
                }
              ></input>
            </div>
          </section>

          <section className="question" style={{ textAlign: "center" }}>
            <label
              className="does-the-work-perfor subtitel"
              htmlFor="doestheworkperformedrespectthelegalframeworkofthestatutesinvolvedintheemploymentcontract"
            >
              Does the work performed respect the legal framework of the
              statutes involved in the employment contract?
            </label>
            <div className="ouinon-45 ouinon-1-1">
              <input
                onClick={() =>
                  clicked(
                    "Does the work performed respect the legal framework of the statutes involved in the employment contract?",
                    "Yes"
                  )
                }
                type="button"
                value="Yes"
                className={`frame-4-5 ${
                  selectedOptions[
                    "Does the work performed respect the legal framework of the statutes involved in the employment contract?"
                  ] === "Yes"
                    ? "enabled"
                    : ""
                }`}
                disabled={
                  selectedOptions[
                    "Does the work performed respect the legal framework of the statutes involved in the employment contract?"
                  ] === "No"
                }
              ></input>
              <input
                onClick={() =>
                  clicked(
                    "Does the work performed respect the legal framework of the statutes involved in the employment contract?",
                    "No"
                  )
                }
                type="button"
                value="No"
                className={`frame-4-6 ${
                  selectedOptions[
                    "Does the work performed respect the legal framework of the statutes involved in the employment contract?"
                  ] === "No"
                    ? "enabled"
                    : ""
                }`}
                disabled={
                  selectedOptions[
                    "Does the work performed respect the legal framework of the statutes involved in the employment contract?"
                  ] === "Yes"
                }
              ></input>
            </div>
          </section>
        </div>
        <div className="flex-row-83">
          <Toggle
            className={toggle2Props.className}
            buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
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

export default Social2;
