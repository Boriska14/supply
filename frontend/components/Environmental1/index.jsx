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
import "./Environmental1.css";
export let e_allData1 = [];
export let yes_Count1 = 0;
export let e_final = 0;

function Environmental1(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount1, setYesCount1] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
    pleaseAnswerTheFollowingQuestions,
    inputType3,
    inputPlaceholder3,
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

    setErrorMessage(""); // Clear any previous error messages
    e_allData1 = e_allData1.concat(data); // Concatène les nouvelles données à allData
    console.log(e_allData1);
    console.log(yes_Count1);
    history.push("/environmental-2");
    return e_allData1;
  }

  return (
    <div className="container-center-horizontal">
      <div className="environmental-1 screen">
        <div className="overlap-group-10">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-9"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <div className="nav-items-2-14">
              <Frame113 />
              <Frame114 />
              <Frame115 />
              <Frame116 />
              <Frame117 />
            </div>
          </div>
        </div>
        <br />
        <p className="please-answer-the-following-questions valign-text-middle bevan-normal-white-20px">
          {pleaseAnswerTheFollowingQuestions}
        </p>
        <br />
        <p className="yes-count">
          Score: {yes_Count1} / {totalQuestions}
        </p>
        <div className="dmarche-environnemental">
          <div className="dmarche-1">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="promouvez-vous-la-re subtitel"
                htmlFor="promouvezvouslaresponsabilitéenvironnementaleauseindevotreentreprise"
              >
                Gérez vous les risques et impacts de votre activité sur
                l'environnement?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Gérez vous les risques et impacts de votre activité sur l'environnement?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Gérez vous les risques et impacts de votre activité sur l'environnement?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Gérez vous les risques et impacts de votre activité sur l'environnement?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Gérez vous les risques et impacts de votre activité sur l'environnement?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Gérez vous les risques et impacts de votre activité sur l'environnement?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Gérez vous les risques et impacts de votre activité sur l'environnement?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="promouvez-vous-la-re subtitel"
                htmlFor="your-vousdesemployésdeladirectionaffectésauxenjeuxliésàlenvironnement-id"
              >
                Avez-vous des objectifs environnementaux planifiés et réalisés ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous des objectifs environnementaux planifiés et réalisés ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Avez-vous des objectifs environnementaux planifiés et réalisés ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous des objectifs environnementaux planifiés et réalisés ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous des objectifs environnementaux planifiés et réalisés ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Avez-vous des objectifs environnementaux planifiés et réalisés ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous des objectifs environnementaux planifiés et réalisés ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="avez-vous-des-employ-1 subtitel"
                htmlFor="avez-vousdesemployésayantdesresponsabilitésdéfiniesenlienaveclenvironnement"
              >
                Quel est le pourcentage d’objectifs réalisés sur les objectifs
                planifiés?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Quel est le pourcentage d’objectifs réalisés sur les objectifs planifiés?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Quel est le pourcentage d’objectifs réalisés sur les objectifs planifiés?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Quel est le pourcentage d’objectifs réalisés sur les objectifs planifiés?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Quel est le pourcentage d’objectifs réalisés sur les objectifs planifiés?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Quel est le pourcentage d’objectifs réalisés sur les objectifs planifiés?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Quel est le pourcentage d’objectifs réalisés sur les objectifs planifiés?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="dmarche-2">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="promouvez-vous-la-re subtitel"
                htmlFor="promouvezvouslaresponsabilitéenvironnementaleauseindevotreentreprise"
              >
                Promouvez vous la responsabilité environnementale au sein de
                votre entreprise?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Promouvez vous la responsabilité environnementale au sein de votre entreprise?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Promouvez vous la responsabilité environnementale au sein de votre entreprise?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Promouvez vous la responsabilité environnementale au sein de votre entreprise?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Promouvez vous la responsabilité environnementale au sein de votre entreprise?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Promouvez vous la responsabilité environnementale au sein de votre entreprise?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Promouvez vous la responsabilité environnementale au sein de votre entreprise?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="avez-vous-des-employ subtitel "
                htmlFor="avez-vousdesemployésdeladirectionaffectésauxenjeuxliésàlenvironnement"
              >
                Avez-vous des employés de la direction affectés aux enjeux liés
                à l'environnement
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous des employés de la direction affectés aux enjeux liés à l'environnement",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Avez-vous des employés de la direction affectés aux enjeux liés à l'environnement"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous des employés de la direction affectés aux enjeux liés à l'environnement"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous des employés de la direction affectés aux enjeux liés à l'environnement",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Avez-vous des employés de la direction affectés aux enjeux liés à l'environnement"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous des employés de la direction affectés aux enjeux liés à l'environnement"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="avez-vous-des-employ-1 subtitel"
                htmlFor="avez-vousdesemployésayantdesresponsabilitésdéfiniesenlienaveclenvironnement"
                placeholder={inputPlaceholder3}
                type={inputType3}
              >
                Avez-vous des employés ayant des responsabilités définies en
                lien avec l'environnement ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous des employés ayant des responsabilités définies en lien avec l'environnement ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Avez-vous des employés ayant des responsabilités définies en lien avec l'environnement ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous des employés ayant des responsabilités définies en lien avec l'environnement ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous des employés ayant des responsabilités définies en lien avec l'environnement ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Avez-vous des employés ayant des responsabilités définies en lien avec l'environnement ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous des employés ayant des responsabilités définies en lien avec l'environnement ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-31">
          <Toggle
            className={toggle3Props.className}
            buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-113-69">
            <div className="next valign-text-middle inter-bold-mineral-green-18px">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Environmental1;
