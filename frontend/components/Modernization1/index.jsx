import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems2 from "../NavItems2";
import NavItems3 from "../NavItems3";
import Toggle from "../Toggle";
import "./Modernization1.css";
export let m_allData1 = [];
export let m_yesCount1 = 0;

function Modernization1(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount1, setYesCount1] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
    pleaseAnswerTheFollowingQuestions,
    navItems2Props,
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
      m_yesCount1++;
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
    m_allData1 = m_allData1.concat(data); // Concatène les nouvelles données à allData
    console.log(m_allData1);
    console.log(m_yesCount1);
    history.push("/modernization-2");
    return m_allData1;
  }

  return (
    <div className="container-center-horizontal">
      <div className="modernization-1-1 screen">
        <div className="overlap-group-28">
          <div className="rectangle-3-12"></div>
          <NavItems2 className={navItems2Props.className} />
          <NavItems3
            className={navItems3Props.className}
            frame1172Props={navItems3Props.frame1172Props}
            frame1162Props={navItems3Props.frame1162Props}
            frame1132Props={navItems3Props.frame1132Props}
          />
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-28"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <p className="please-answer-the-following-questions-7 valign-text-middle bevan-normal-white-20px">
            {pleaseAnswerTheFollowingQuestions}
          </p>
        </div>

        <p className="yes-count">
          Score: {m_yesCount1} / {totalQuestions}
        </p>
        <div className="emploirelation-employeur-employ-2">
          <div className="emploi-relation-employeur-employ-1-1">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-ai-model subtitel"
                htmlFor="doyouhaveaimodelsthatcansolveproblems"
              >
                Do you have AI models that can solve problems?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have AI models that can solve problems?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have AI models that can solve problems?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have AI models that can solve problems?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have AI models that can solve problems?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have AI models that can solve problems?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have AI models that can solve problems?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-use-intellige subtitel"
                htmlFor="doyouuseintelligentagentstosolvesimulationproblems"
              >
                Do you use intelligent agents to solve simulation problems?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you use intelligent agents to solve simulation problems?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you use intelligent agents to solve simulation problems?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you use intelligent agents to solve simulation problems?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you use intelligent agents to solve simulation problems?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you use intelligent agents to solve simulation problems?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you use intelligent agents to solve simulation problems?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-have subtitel"
                htmlFor="doyouhaveanymodelsforforecastingsales"
              >
                Do you have any models for forecasting sales?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have any models for forecasting sales?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have any models for forecasting sales?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have any models for forecasting sales?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have any models for forecasting sales?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have any models for forecasting sales?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have any models for forecasting sales?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-have subtitel"
                htmlFor="doyouhavemodelsforsalesforecasting"
              >
                Do you have models for sales forecasting?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("Do you have models for sales forecasting?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have models for sales forecasting?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have models for sales forecasting?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("Do you have models for sales forecasting?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Your Question Here"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have models for sales forecasting?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="emploi-relation-employeur-employ-2-1">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-models-f subtitel"
                htmlFor="doyouhavemodelsforforecastingpurchases"
              >
                Do you have models for forecasting purchases?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have models for forecasting purchases?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have models for forecasting purchases?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have models for forecasting purchases?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have models for forecasting purchases?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have models for forecasting purchases?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have models for forecasting purchases?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-have-robots-t subtitel"
                htmlFor="doyouhaverobotsthatcanbeautonomousoncomplextasks"
              >
                Do you have robots that can be autonomous on complex tasks?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have robots that can be autonomous on complex tasks?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have robots that can be autonomous on complex tasks?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have robots that can be autonomous on complex tasks?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have robots that can be autonomous on complex tasks?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have robots that can be autonomous on complex tasks?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have robots that can be autonomous on complex tasks?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-have-a-cybers subtitel"
                htmlFor="doyouhaveacybersecuritysystemusingaimodels"
              >
                Do you have a cybersecurity system using AI models?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have a cybersecurity system using AI models?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have a cybersecurity system using AI models?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have a cybersecurity system using AI models?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have a cybersecurity system using AI models?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have a cybersecurity system using AI models?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have a cybersecurity system using AI models?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-75">
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

export default Modernization1;
