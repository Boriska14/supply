import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Environmental5.css";
import jsPDF from "jspdf";
import { e_allData1, yes_Count1 } from "../Environmental1";
import { e_allData2, yes_Count2 } from "../Environmental2";
import { e_allData3, yes_Count3 } from "../Environmental3";
import { e_allData4, yes_Count4 } from "../Environmental4";
export let e_sum = 0;
export let yes_Count5 = 0;

function Environmental5(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount5, setYesCount5] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20082,
    socialCriteria,
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

  //let e_yesCount5 = 0;
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
  let e_allData5 = [];

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

    e_allData5 = e_allData5.concat(data); // Concatenate the new data to e_allData5
    const e_allData = e_allData1.concat(
      e_allData2,
      e_allData3,
      e_allData4,
      e_allData5
    ); // Update e_allData

    e_sum = yes_Count1 + yes_Count2 + yes_Count3 + yes_Count4 + yes_Count5;
    console.log(e_allData5);

    console.log(e_allData);

    generatePdf(e_allData); // Call the generatePdf function with the updated array
    history.push("/Social-1");
  }

  function generatePdf(e_allData) {
    // Créer un nouveau document PDF
    const doc = new jsPDF();
    const lineHeight = 20;
    const pageHeight = doc.internal.pageSize.height - 40;
    let y = 20;

    // Parcourir les données dans e_allData et ajouter chaque question et réponse au document PDF
    e_allData.forEach((data, index) => {
      const critère = "Environmental Criteria";
      const question = `Question ${index + 1}: ${data.question}`;
      const answer = `Réponse: ${data.answer}`;

      // Vérifier si la position y actuelle plus la hauteur de la question dépasse la hauteur maximale de la page
      if (y + lineHeight > pageHeight) {
        // Ajouter une nouvelle page et réinitialiser la position y
        doc.addPage();
        y = 20;
      }

      // // Ajouter la question et la réponse au document PDF
      // doc.text(question, 10, y);
      // y += lineHeight; // Mettre à jour la position y pour la prochaine ligne

      // Séparer la question sur plusieurs lignes si elle est trop longue
      const splitQuestion = doc.splitTextToSize(
        question,
        doc.internal.pageSize.width - 20
      );
      doc.text(splitQuestion, 10, y);
      y += splitQuestion.length * lineHeight;

      doc.text(answer, 10, y);
      y += lineHeight; // Mettre à jour la position y pour la prochaine ligne
    });

    fetch(process.env.API_URL + "/save-answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e_allData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error saving data to MongoDB");
        }
        history.push("/social-1");
      })
      .catch((error) => {
        console.error(error);
        // Gérer l'erreur
      });

    // Enregistrer le document PDF
    doc.save("Environement-Criteria.pdf");
  }

  return (
    <div className="container-center-horizontal">
      <div className="environmental-5 screen">
        <div className="overlap-group-79">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-2"
              src={x1200PxLogo_Icam__20082}
              alt="1200px-Logo_ICAM_-_2008 2"
            />
          </Link>
          <div className="nav-items-container-43">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>

        <p className="yes-count">
          Score: {yes_Count5} / {totalQuestions}
        </p>
        <div className="overlap-group1-49">
          <div className="frame-119">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />

            <section>
              <label
                className="prparez-vous-ladapta subtitel"
                htmlFor="préparez-vousladaptationdevosactivitéslogistiquesauxpotentielsévenementsextrèmesliésaurechauffementclimatique"
              >
                Are you preparing to adapt your logistics activities to
                potential extreme events related to global warming?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Are you preparing to adapt your logistics activities to potential extreme events related to global warming?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Are you preparing to adapt your logistics activities to potential extreme events related to global warming?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are you preparing to adapt your logistics activities to potential extreme events related to global warming?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Are you preparing to adapt your logistics activities to potential extreme events related to global warming?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Are you preparing to adapt your logistics activities to potential extreme events related to global warming?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are you preparing to adapt your logistics activities to potential extreme events related to global warming?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section>
              <label
                className="avez-vous-tabli-un-bilan-carbone subtitel"
                htmlFor="avez-vousétabliunbilancarbone"
              >
                Have you established a carbon footprint?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("Have you established a carbon footprint?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Have you established a carbon footprint?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Have you established a carbon footprint?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("Have you established a carbon footprint?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Have you established a carbon footprint?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Have you established a carbon footprint?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="frame-120">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />

            <section>
              <label
                className="maitrisez-et-limitez-3 subtitel"
                htmlFor="maitrisezetlimitez-vouslesautresnuissancessonoresolfactiféclairagenocturneetleurimpactsurlespopulations"
              >
                Do you control and limit other nuisances (noise, smell, night
                lighting) and their impact on the population?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you control and limit other nuisances (noise, smell, night lighting) and their impact on the population?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you control and limit other nuisances (noise, smell, night lighting) and their impact on the population?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you control and limit other nuisances (noise, smell, night lighting) and their impact on the population?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you control and limit other nuisances (noise, smell, night lighting) and their impact on the population?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you control and limit other nuisances (noise, smell, night lighting) and their impact on the population?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you control and limit other nuisances (noise, smell, night lighting) and their impact on the population?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section>
              <label
                className="avez-vous-dj-effectu subtitel"
                htmlFor="avez-vousdéjàeffectuédesenquêtesauprèsdesriverainsafindereccueillirleurressenticoncernantcesnuissances"
              >
                Have you ever conducted surveys of local residents to find out
                how they feel about the noise?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Have you ever conducted surveys of local residents to find out how they feel about the noise?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Have you ever conducted surveys of local residents to find out how they feel about the noise?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Have you ever conducted surveys of local residents to find out how they feel about the noise?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Have you ever conducted surveys of local residents to find out how they feel about the noise?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Have you ever conducted surveys of local residents to find out how they feel about the noise?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Have you ever conducted surveys of local residents to find out how they feel about the noise?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="avez-vous-dj-mesurer subtitel"
                htmlFor="avez-vousdéjàmesurerleniveausonoredevotreflottedevéhicule"
              >
                Have you ever measured the noise level of your vehicle fleet?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Have you ever measured the noise level of your vehicle fleet?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Have you ever measured the noise level of your vehicle fleet?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Have you ever measured the noise level of your vehicle fleet?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Have you ever measured the noise level of your vehicle fleet?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Have you ever measured the noise level of your vehicle fleet?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Have you ever measured the noise level of your vehicle fleet?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-144">
          <Toggle
            className={toggle3Props.className}
            buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-112-7">
            <div className="social-criteria valign-text-middle inter-bold-mineral-green-18px">
              {socialCriteria}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Environmental5;
