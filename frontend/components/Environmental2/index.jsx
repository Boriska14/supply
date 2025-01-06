import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Environmental2.css";
export let e_allData2 = [];
export let yes_Count2 = 0;

function Environmental2(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount2, setYesCount2] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const { navItems3Props, toggle1Props, toggle2Props, toggle3Props } = props;

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
        return; // Stop processing if an error occurs
      }
      const questionObj = {
        question: question,
        answer: enabledValue,
      };

      data.push(questionObj);
    }

    setErrorMessage("");
    e_allData2 = e_allData2.concat(data); // Concatène les nouvelles données à allData
    console.log(e_allData2);
    console.log(yes_Count2);
    history.push("/environmental-3");
    return e_allData2;
  }

  return (
    <div className="container-center-horizontal">
      <div className="environmental-2 screen">
        <div className="nav-items-container-12">
          <NavItems3
            className={navItems3Props.className}
            frame1172Props={navItems3Props.frame1172Props}
            frame1162Props={navItems3Props.frame1162Props}
            frame1132Props={navItems3Props.frame1132Props}
          />
          <NavItems2 />
          <br />
        </div>
        <div className="pollutions">
          <div className="overlap-group-34">
            <div className="pollution-de-leau-et-des-sols">
              <div className="frame-137">
                <Toggle
                  className={toggle1Props.className}
                  buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
                />
              </div>
              <section className="question" style={{ textAlign: "center" }}>
                <label
                  className="maitrisez-et-limitez subtitel"
                  htmlFor="maitrisezetlimitez-vouslesémissionsdepolluantsliquidesdansleauetlessolsliéesàvosactivités"
                >
                  Maitrisez et limitez-vous les émissions de polluants liquides
                  dans l'eau et les sols liées à vos activités ?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Maitrisez et limitez-vous les émissions de polluants liquides dans l'eau et les sols liées à vos activités ?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Maitrisez et limitez-vous les émissions de polluants liquides dans l'eau et les sols liées à vos activités ?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Maitrisez et limitez-vous les émissions de polluants liquides dans l'eau et les sols liées à vos activités ?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Maitrisez et limitez-vous les émissions de polluants liquides dans l'eau et les sols liées à vos activités ?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Maitrisez et limitez-vous les émissions de polluants liquides dans l'eau et les sols liées à vos activités ?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Maitrisez et limitez-vous les émissions de polluants liquides dans l'eau et les sols liées à vos activités ?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>

              <section className="question" style={{ textAlign: "center" }}>
                <label
                  className="suivez-vous-votre-volume-deau-consomm subtitel"
                  htmlFor="suivezvousvotrevolumedeauconsommé"
                >
                  Suivez vous votre volume d'eau consommé ?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Suivez vous votre volume d'eau consommé ?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Suivez vous votre volume d'eau consommé ?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Suivez vous votre volume d'eau consommé ?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked("Suivez vous votre volume d'eau consommé ?", "No")
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Suivez vous votre volume d'eau consommé ?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Suivez vous votre volume d'eau consommé ?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>

              <section className="question" style={{ textAlign: "center" }}>
                <label
                  className="avez-vous-investis-d subtitel"
                  htmlFor="avez-vousinvestisdansdestechnologiesderécupérationettraitementdeseaux"
                >
                  Avez-vous investis dans des technologies de récupération et
                  traitement des eaux ?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Avez-vous investis dans des technologies de récupération et traitement des eaux ?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Avez-vous investis dans des technologies de récupération et traitement des eaux ?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Avez-vous investis dans des technologies de récupération et traitement des eaux ?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Avez-vous investis dans des technologies de récupération et traitement des eaux ?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Avez-vous investis dans des technologies de récupération et traitement des eaux ?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Avez-vous investis dans des technologies de récupération et traitement des eaux ?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>

              <section className="question" style={{ textAlign: "center" }}>
                <label
                  className="avez-vous-un-budget-1 subtitel"
                  htmlFor="avez-vousunbudgetpourluttercontrelapollutiondeseauxetdessols"
                >
                  Avez-vous un budget pour lutter contre la pollution des eaux
                  et des sols ?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Avez-vous un budget pour lutter contre la pollution des eaux et des sols ?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Avez-vous un budget pour lutter contre la pollution des eaux et des sols ?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Avez-vous un budget pour lutter contre la pollution des eaux et des sols ?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Avez-vous un budget pour lutter contre la pollution des eaux et des sols ?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Avez-vous un budget pour lutter contre la pollution des eaux et des sols ?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Avez-vous un budget pour lutter contre la pollution des eaux et des sols ?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>
            </div>
            <div className="frame-130-4"></div>
          </div>
          <div className="pollution-de-lair">
            <div className="frame-138-1">
              <Toggle
                className={toggle2Props.className}
                buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
              />
            </div>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="maitrisez-et-limitez-1 subtitel"
                htmlFor="maitrisezetlimitezvouslesémissionsdepolluantsatmosphériquesliéesàvosactivités"
              >
                Maitrisez et limitez vous les émissions de polluants
                atmosphériques liées à vos activités?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Maitrisez et limitez vous les émissions de polluants atmosphériques liées à vos activités?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Maitrisez et limitez vous les émissions de polluants atmosphériques liées à vos activités?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Maitrisez et limitez vous les émissions de polluants atmosphériques liées à vos activités?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Maitrisez et limitez vous les émissions de polluants atmosphériques liées à vos activités?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Maitrisez et limitez vous les émissions de polluants atmosphériques liées à vos activités?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Maitrisez et limitez vous les émissions de polluants atmosphériques liées à vos activités?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="suivez-vous-la-conso subtitel"
                htmlFor="suivez-vouslaconsommationdecarburantdevotreflotteroutière"
              >
                Suivez-vous la consommation de carburant de votre flotte
                routière ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Suivez-vous la consommation de carburant de votre flotte routière ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Suivez-vous la consommation de carburant de votre flotte routière ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Suivez-vous la consommation de carburant de votre flotte routière ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Suivez-vous la consommation de carburant de votre flotte routière ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Suivez-vous la consommation de carburant de votre flotte routière ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Suivez-vous la consommation de carburant de votre flotte routière ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="avez-vous-un-budget-2 subtitel"
                htmlFor="avez-vousunbudgetpourréduirelesémissionsdepolluantsatmosphériques"
              >
                Avez-vous un budget pour réduire les émissions de polluants
                atmosphériques ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="suivez-vous-les-quan subtitel"
                htmlFor="suivez-vouslesquantitésdémissionsdespolluantsatmosphériques"
              >
                Suivez-vous les quantités d'émissions des polluants
                atmosphériques ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Suivez-vous les quantités d'émissions des polluants atmosphériques ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Suivez-vous les quantités d'émissions des polluants atmosphériques ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Suivez-vous les quantités d'émissions des polluants atmosphériques ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Suivez-vous les quantités d'émissions des polluants atmosphériques ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Suivez-vous les quantités d'émissions des polluants atmosphériques ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Suivez-vous les quantités d'émissions des polluants atmosphériques ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="formez-vous-les-chauffeurs-lcoconduite subtitel"
                htmlFor="formezvousleschauffeursàlécoconduite"
              >
                Formez vous les chauffeurs à l'écoconduite ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Formez vous les chauffeurs à l'écoconduite ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Formez vous les chauffeurs à l'écoconduite ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Formez vous les chauffeurs à l'écoconduite ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Formez vous les chauffeurs à l'écoconduite ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Formez vous les chauffeurs à l'écoconduite ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Formez vous les chauffeurs à l'écoconduite ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="avez-vous-un-budget-3 subtitel"
                htmlFor="avez-vousunbudgetpourréduirelesémissionsdepolluantsatmosphériques"
              >
                Avez-vous un budget pour réduire les émissions de polluants
                atmosphériques ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?e"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous un budget pour réduire les émissions de polluants atmosphériques ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-81">
          <Toggle
            className={toggle3Props.className}
            buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
          />
          <p className="yes-count">
            Score: {yes_Count2} / {totalQuestions}
          </p>
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

export default Environmental2;
