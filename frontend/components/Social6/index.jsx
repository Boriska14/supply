import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Social6.css";
import { s_allData1, yes_Count1 } from "../Social1";
import { s_allData2, yes_Count2 } from "../Social2";
import { s_allData3, yes_Count3 } from "../Social3";
import { s_allData4, yes_Count4 } from "../Social4";
import { s_allData5, yes_Count5 } from "../Social5";
import jsPDF from "jspdf";
import "./Social6.css";
export let s_sum = 0;
export let yes_Count6 = 0;

function Social6(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount6, setYesCount6] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
    modernizationCriteria,
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

  let s_yesCount6 = 0;
  function clicked(question, option) {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [question]: option,
    }));
    if (option === "Yes") {
      // Increment yesCount when "Yes" is selected
      yes_Count6++;
      setYesCount6((prevYesCount) => prevYesCount + 1);
    }
  }

  const history = useHistory();
  let s_allData6 = [];

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

    s_allData6 = s_allData6.concat(data); // Concatenate the new data to s_allData6
    const s_allData = s_allData1.concat(
      s_allData2,
      s_allData3,
      s_allData4,
      s_allData5,
      s_allData6
    ); // Update allData
    s_sum = yes_Count1 + yes_Count2 + yes_Count3 + yes_Count5 + yes_Count6;
    console.log(s_allData6);
    console.log(s_allData);
    console.log(s_sum);
    generatePdf(s_allData); // Call the generatePdf function with the updated array
    // connect();
    history.push("/modernization-1");
  }

  function generatePdf(s_allData) {
    // Créer un nouveau document PDF
    const doc = new jsPDF();
    const lineHeight = 20;
    const pageHeight = doc.internal.pageSize.height - 40;
    let y = 20;

    // Parcourir les données dans allData et ajouter chaque question et réponse au document PDF
    s_allData.forEach((data, index) => {
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

    fetch("http://127.0.0.1:8000/save-answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(s_allData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error saving data to MongoDB");
        }
        history.push("/modernization-1");
      })
      .catch((error) => {
        console.error(error);
        // Gérer l'erreur
      });
    // Enregistrer le document PDF
    doc.save("Social Criteria.pdf");
  }

  return (
    <div className="container-center-horizontal">
      <div className="social-6 screen">
        <div className="overlap-group-82">
          <div className="nav-items-container-48">
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
          Score: {yes_Count6} / {totalQuestions}
        </p>
        <div className="developpement-et-capital-humain-2">
          <div className="developpement-et-capital-humain-1-1">
            <div className="group-107-3">
              <div className="flex-col-103">
                <Toggle
                  className={toggle1Props.className}
                  buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
                />
                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="do-you-maintain-a-hi subtitel"
                    htmlFor="doyoumaintainahighlevelofsafetyandphysicalmentalandsocialwell-beingofworkersthenotionofworkerencompassesallpopulationsofemployedworkers_companyemployeessecondedworkersself-employedworkerstemporaryworkerstraineesapprentices"
                  >
                    Do you maintain a high level of safety and physical, mental
                    and social well-being of workers (the notion of worker
                    encompasses all populations of employed workers: company
                    employees, seconded workers, self-employed workers,
                    temporary workers, trainees, apprentices...)?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Do you maintain a high level of safety and physical, mental and social well-being of workers (the notion of worker encompasses all populations of employed workers: company employees, seconded workers, self-employed workers, temporary workers, trainees, apprentices...)?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Do you maintain a high level of safety and physical, mental and social well-being of workers (the notion of worker encompasses all populations of employed workers: company employees, seconded workers, self-employed workers, temporary workers, trainees, apprentices...)?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you maintain a high level of safety and physical, mental and social well-being of workers (the notion of worker encompasses all populations of employed workers: company employees, seconded workers, self-employed workers, temporary workers, trainees, apprentices...)?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Do you maintain a high level of safety and physical, mental and social well-being of workers (the notion of worker encompasses all populations of employed workers: company employees, seconded workers, self-employed workers, temporary workers, trainees, apprentices...)?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Do you maintain a high level of safety and physical, mental and social well-being of workers (the notion of worker encompasses all populations of employed workers: company employees, seconded workers, self-employed workers, temporary workers, trainees, apprentices...)?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Do you maintain a high level of safety and physical, mental and social well-being of workers (the notion of worker encompasses all populations of employed workers: company employees, seconded workers, self-employed workers, temporary workers, trainees, apprentices...)?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="are-staff-trained-in subtitel"
                    htmlFor="arestafftrainedinoccupationalhealthandsafety"
                  >
                    Are staff trained in occupational health and safety?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Are staff trained in occupational health and safety?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Are staff trained in occupational health and safety?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Are staff trained in occupational health and safety?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Are staff trained in occupational health and safety?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Are staff trained in occupational health and safety?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Are staff trained in occupational health and safety?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>

                <section className="question" style={{ textAlign: "center" }}>
                  <label
                    className="is-there-a-budget-for-health-and-safety subtitel"
                    htmlFor="isthereabudgetforhealthandsafety"
                  >
                    Is there a budget for health and safety?
                  </label>
                  <div className="ouinon-45 ouinon-1-1">
                    <input
                      onClick={() =>
                        clicked(
                          "Is there a budget for health and safety?",
                          "Yes"
                        )
                      }
                      type="button"
                      value="Yes"
                      className={`frame-4-5 ${
                        selectedOptions[
                          "Is there a budget for health and safety?"
                        ] === "Yes"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Is there a budget for health and safety?"
                        ] === "No"
                      }
                    ></input>
                    <input
                      onClick={() =>
                        clicked(
                          "Is there a budget for health and safety?",
                          "No"
                        )
                      }
                      type="button"
                      value="No"
                      className={`frame-4-6 ${
                        selectedOptions[
                          "Is there a budget for health and safety?"
                        ] === "No"
                          ? "enabled"
                          : ""
                      }`}
                      disabled={
                        selectedOptions[
                          "Is there a budget for health and safety?"
                        ] === "Yes"
                      }
                    ></input>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="developpement-et-capital-humain-2-1">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-prevent-and-p subtitel"
                htmlFor="doyoupreventandprotectemployeesfromnegativehealtheffectsresultingfromworkingconditions"
              >
                Do you prevent and protect employees from negative health
                effects resulting from working conditions?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you prevent and protect employees from negative health effects resulting from working conditions?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you prevent and protect employees from negative health effects resulting from working conditions?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you prevent and protect employees from negative health effects resulting from working conditions?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you prevent and protect employees from negative health effects resulting from working conditions?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you prevent and protect employees from negative health effects resulting from working conditions?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you prevent and protect employees from negative health effects resulting from working conditions?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="developpement-et-capital-humain-2-item subtitel"
                htmlFor="arejobdescriptionsprovidedtopreventionworkersgoodpracticesetc"
              >
                Are job descriptions provided to prevention workers (good
                practices, etc.)?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Are job descriptions provided to prevention workers (good practices, etc.)?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Are job descriptions provided to prevention workers (good practices, etc.)?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are job descriptions provided to prevention workers (good practices, etc.)?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Are job descriptions provided to prevention workers (good practices, etc.)?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Are job descriptions provided to prevention workers (good practices, etc.)?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are job descriptions provided to prevention workers (good practices, etc.)?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="developpement-et-capital-humain-2-item subtitel"
                htmlFor="percentageofthenumberofdangeroussituationsdealtwithoutofthenumberofdangeroussituationsdetected"
              >
                Percentage of the number of dangerous situations dealt with out
                of the number of dangerous situations detected
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Percentage of the number of dangerous situations dealt with out of the number of dangerous situations detected",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Percentage of the number of dangerous situations dealt with out of the number of dangerous situations detected"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Percentage of the number of dangerous situations dealt with out of the number of dangerous situations detected"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Percentage of the number of dangerous situations dealt with out of the number of dangerous situations detected",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Percentage of the number of dangerous situations dealt with out of the number of dangerous situations detected"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Percentage of the number of dangerous situations dealt with out of the number of dangerous situations detected"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="developpement-et-capital-humain-3-2">
            <Toggle
              className={toggle3Props.className}
              buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
            />

            <section className="question" style={{ textAlign: "center" }}>
              <label
                className="do-you-have-a-work-e subtitel"
                htmlFor="doyouhaveaworkenvironmentthatisadaptedtothephysiologicalandpsychologicalneedsofworkers"
              >
                Do you have a work environment that is adapted to the
                physiological and psychological needs of workers?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have a work environment that is adapted to the physiological and psychological needs of workers?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have a work environment that is adapted to the physiological and psychological needs of workers?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have a work environment that is adapted to the physiological and psychological needs of workers?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have a work environment that is adapted to the physiological and psychological needs of workers?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have a work environment that is adapted to the physiological and psychological needs of workers?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have a work environment that is adapted to the physiological and psychological needs of workers?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-149">
          <Toggle
            className={toggle4Props.className}
            buttonSecondaryProps={toggle4Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-112-8">
            <div className="modernization-criteria valign-text-middle inter-bold-mineral-green-18px">
              {modernizationCriteria}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Social6;
