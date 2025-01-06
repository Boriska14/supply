import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import Ouinon2 from "../Ouinon2";
import Ouinon from "../Ouinon";
import Frame11732 from "../Frame11732";
import "./Environmental4.css";
export let e_allData4 = [];
export let yes_Count4 = 0;

function Environmental4(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount4, setYesCount4] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20082,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    inputType4,
    inputPlaceholder4,
    inputType5,
    inputPlaceholder5,
    inputType6,
    inputPlaceholder6,
    inputType7,
    inputPlaceholder7,
    navItems3Props,
    toggle1Props,
    ouinon21Props,
    ouinon22Props,
    toggle2Props,
    ouinon23Props,
    ouinon24Props,
    toggle3Props,
    ouinon1Props,
    ouinon2Props,
    ouinon3Props,
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
    /*
    const button = event.target; // Récupère le bouton qui a été cliqué
    if (button.classList.contains("frame-4-5")) {
      // Vérifie si c'est un bouton 'oui'
      e_yesCount4++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${e_yesCount4}`); // Affiche le nombre de boutons 'Oui' sélectionnés
      button.disabled = true; // Désactive le bouton 'oui' qui a été cliqué
      button.classList.add("enabled"); // Ajoute la classe 'enabled' au bouton 'oui'
    } else if (button.classList.contains("frame-4-6")) {
      // Vérifie si c'est un bouton 'non'

      button.disabled = true; // Désactive le bouton 'non' qui a été cliqué
      button.classList.add("enabled"); // Désactive le bouton 'non' qui a été cliqué
    }
    */
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
    e_allData4 = e_allData4.concat(data); // Concatène les nouvelles données à allData
    console.log(e_allData4);
    console.log(yes_Count4);
    history.push("/environmental-5");
    return e_allData4;
  }

  return (
    <div className="container-center-horizontal">
      <div className="environmental-4 screen">
        <div className="overlap-group1-50">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-2-1"
              src={x1200PxLogo_Icam__20082}
              alt="1200px-Logo_ICAM_-_2008 2"
            />
          </Link>
          <div className="nav-items-container-45">
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
        <div className="frame-122-1">
          <div className="group-container-3">
            <div className="group-106">
              <div className="group-107-1">
                <Toggle
                  className={toggle1Props.className}
                  buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
                />

                <section>
                  <label
                    className="essayez-vous-de-rdui subtitel"
                    htmlFor="essayez-vousderéduireaumaximumvotregénérationdedéchets"
                  >
                    Do you try to reduce your waste generation as much as
                    possible?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you try to reduce your waste generation as much as possible?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you try to reduce your waste generation as much as possible?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you try to reduce your waste generation as much as possible?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you try to reduce your waste generation as much as possible?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you try to reduce your waste generation as much as possible?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you try to reduce your waste generation as much as possible?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>

                <section>
                  <label
                    className="importez-exportez-ou subtitel"
                    htmlFor="importezexportezoutraitez-vousdesdéchetsconsidéréscommedangereux"
                  >
                    Do you import, export or treat waste that is considered
                    hazardous?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you import, export or treat waste that is considered hazardous?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you import, export or treat waste that is considered hazardous?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you import, export or treat waste that is considered hazardous?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you import, export or treat waste that is considered hazardous?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you import, export or treat waste that is considered hazardous?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you import, export or treat waste that is considered hazardous?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
              </div>
            </div>
            <div className="group-108">
              <Toggle
                className={toggle2Props.className}
                buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
              />
              <section>
                <label
                  className="favorisez-vous-le-r subtitel"
                  htmlFor="favorisez-vousleré-emploieauboiscarton"
                >
                  Do you encourage re-use (water, wood, cardboard, etc.)?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Do you encourage re-use (water, wood, cardboard, etc.)?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Do you encourage re-use (water, wood, cardboard, etc.)?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Do you encourage re-use (water, wood, cardboard, etc.)?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Do you encourage re-use (water, wood, cardboard, etc.)?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Do you encourage re-use (water, wood, cardboard, etc.)?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Do you encourage re-use (water, wood, cardboard, etc.)?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>

              <section>
                <label
                  className="quel-est-le-pourcent-1 subtitel"
                  placeholder={inputPlaceholder4}
                  type={inputType4}
                >
                  What percentage of your packaging is reusable?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "What percentage of your packaging is reusable?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "What percentage of your packaging is reusable?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "What percentage of your packaging is reusable?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "What percentage of your packaging is reusable?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "What percentage of your packaging is reusable?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "What percentage of your packaging is reusable?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>
            </div>
            <div className="group-109">
              <Toggle
                className={toggle3Props.className}
                buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
              />
              <section>
                <label
                  className="favorisez-vous-le-re subtitel"
                  name="favorisez-vouslerecyclagedevosdéchets"
                  placeholder={inputPlaceholder5}
                  type={inputType5}
                >
                  Do you promote the recycling of your waste?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Do you promote the recycling of your waste?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "Do you promote the recycling of your waste?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Do you promote the recycling of your waste?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Do you promote the recycling of your waste?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Do you promote the recycling of your waste?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Do you promote the recycling of your waste?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>

              <section>
                <label
                  className="vendez-vous-vos-dchets-valorisables subtitel"
                  htmlFor="vendez-vousvosdéchetsvalorisables"
                  placeholder={inputPlaceholder6}
                  type={inputType6}
                >
                  Do you sell your recyclable waste?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked("Do you sell your recyclable waste?", "Yes")
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions["Do you sell your recyclable waste?"] ===
                      "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions["Do you sell your recyclable waste?"] ===
                      "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked("Do you sell your recyclable waste?", "No")
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions["Do you sell your recyclable waste?"] ===
                      "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions["Do you sell your recyclable waste?"] ===
                      "Yes"
                    }
                  ></input>
                </div>
              </section>
              <section>
                <label
                  className="avez-vous-des-parten subtitel"
                  htmlFor="avez-vousdespartenariatspermettantlasecondeviedevosproduits"
                >
                  Do you have partnerships for the second life of your products?
                </label>
                <div className="ouinon-45 ouinon-1-1">
                  <input
                    onClick={() =>
                      clicked(
                        "Do you have partnerships for the second life of your products?",
                        "Yes"
                      )
                    }
                    type="button"
                    value="Yes"
                    className={`frame-4-5 ${
                      selectedOptions[
                        "DDo you have partnerships for the second life of your products?"
                      ] === "Yes"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Do you have partnerships for the second life of your products?"
                      ] === "No"
                    }
                  ></input>
                  <input
                    onClick={() =>
                      clicked(
                        "Do you have partnerships for the second life of your products?",
                        "No"
                      )
                    }
                    type="button"
                    value="No"
                    className={`frame-4-6 ${
                      selectedOptions[
                        "Do you have partnerships for the second life of your products?"
                      ] === "No"
                        ? "enabled"
                        : ""
                    }`}
                    disabled={
                      selectedOptions[
                        "Do you have partnerships for the second life of your products?"
                      ] === "Yes"
                    }
                  ></input>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="flex-row-146">
          <Toggle
            className={toggle4Props.className}
            buttonSecondaryProps={toggle4Props.buttonSecondaryProps}
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

export default Environmental4;
