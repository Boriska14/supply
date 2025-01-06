import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import Ouinon from "../Ouinon";
import Frame11732 from "../Frame11732";
import "./Environmental3.css";
export let e_allData3 = [];
export let yes_Count3 = 0;

function Environmental3(props) {
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
        return; // Stop processing if an error occurs
      }
      const questionObj = {
        question: question,
        answer: enabledValue,
      };

      data.push(questionObj);
    }
    e_allData3 = e_allData3.concat(data); // Concatène les nouvelles données à allData
    console.log(e_allData3);
    console.log(yes_Count3);
    history.push("/environmental-4");
    return e_allData3;
  }

  return (
    <div className="container-center-horizontal">
      <div className="environmental-3 screen">
        <div className="overlap-group-35">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-34"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-13">
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

        <div className="yes">
          <p className="yes-count">
            Score: {yes_Count3} / {totalQuestions}
          </p>
        </div>
        <div className="energie-biodiversit">
          <div className="energie">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />

            <section>
              <label
                className="maitrisez-et-limitez-2 subtitel"
                htmlFor="maitrisezetlimitezvousvosconsommationsdénergies"
              >
                Maitrisez et limitez vous vos consommations d'énergies ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Maitrisez et limitez vous vos consommations d'énergies ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Maitrisez et limitez vous vos consommations d'énergies ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Maitrisez et limitez vous vos consommations d'énergies ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Maitrisez et limitez vous vos consommations d'énergies ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Maitrisez et limitez vous vos consommations d'énergies ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Maitrisez et limitez vous vos consommations d'énergies ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section>
              <label
                className="mesurez-vous-votre-c subtitel"
                htmlFor="mesurez-vousvotreconsommationénergétiqueaum2"
              >
                Mesurez-vous votre consommation énergétique au mètre carré ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Mesurez-vous votre consommation énergétique au mètre carré ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Mesurez-vous votre consommation énergétique au mètre carré ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Mesurez-vous votre consommation énergétique au mètre carré ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Mesurez-vous votre consommation énergétique au mètre carré ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Mesurez-vous votre consommation énergétique au mètre carré ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Mesurez-vous votre consommation énergétique au mètre carré ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section>
              <label
                className="avez-vous-pris-des-m subtitel"
                htmlFor="avez-vousprisdesmesuresderéductiondevotreconsommationénergétique"
              >
                Avez-vous pris des mesures de réduction de votre consommation
                énergétique ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous pris des mesures de réduction de votre consommation énergétique ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Avez-vous pris des mesures de réduction de votre consommation énergétique ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous pris des mesures de réduction de votre consommation énergétique ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous pris des mesures de réduction de votre consommation énergétique ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Avez-vous pris des mesures de réduction de votre consommation énergétique ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous pris des mesures de réduction de votre consommation énergétique ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="biodiversit">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="avez-vous-des-sites subtitel"
                htmlFor="avez-vousdessitesconcernésparlacompensationécologique"
              >
                Avez-vous des sites concernés par la compensation écologique ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous des sites concernés par la compensation écologique ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Avez-vous des sites concernés par la compensation écologique ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous des sites concernés par la compensation écologique ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Avez-vous des sites concernés par la compensation écologique ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Avez-vous des sites concernés par la compensation écologique ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Avez-vous des sites concernés par la compensation écologique ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section>
              <label
                className="avez-vous-des-sites-1 subtitel"
                htmlFor="avez-vousdessiteslabéliséshqebreamleeds"
              >
                vez-vous des sites labélisés (HQE, BREAM, LEEDS, ...) ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "vez-vous des sites labélisés (HQE, BREAM, LEEDS, ...) ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "vez-vous des sites labélisés (HQE, BREAM, LEEDS, ...) ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "vez-vous des sites labélisés (HQE, BREAM, LEEDS, ...) ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "vez-vous des sites labélisés (HQE, BREAM, LEEDS, ...) ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "vez-vous des sites labélisés (HQE, BREAM, LEEDS, ...) ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "vez-vous des sites labélisés (HQE, BREAM, LEEDS, ...) ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section>
              <label
                className="favorisez-vous-les-a subtitel"
                htmlFor="favorisezvouslesactionspermettantderestaurerlabiodiversité"
              >
                Favorisez vous les actions permettant de restaurer la
                biodiversité ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Favorisez vous les actions permettant de restaurer la biodiversité ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Favorisez vous les actions permettant de restaurer la biodiversité ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Favorisez vous les actions permettant de restaurer la biodiversité ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Favorisez vous les actions permettant de restaurer la biodiversité ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Favorisez vous les actions permettant de restaurer la biodiversité ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Favorisez vous les actions permettant de restaurer la biodiversité ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-82">
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

export default Environmental3;
