import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Modernization4.css";
import jsPDF from "jspdf";
import { m_allData1, m_yesCount1 } from "../Modernization1";
import { m_allData2, m_yesCount2 } from "../Modernization2";
import { m_allData3, m_yesCount3 } from "../Modernization3";
export let m_sum = 0;
export let m_yesCount4 = 0;

function Modernization4(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount4, setYesCount4] = useState(0); // Initialize yesCount state
  const [m_totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
    inputType6,
    inputPlaceholder6,
    leadTimeCriteria,
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
      m_yesCount4++;
      setYesCount4((prevYesCount) => prevYesCount + 1);
    }
  }

  const history = useHistory();
  let m_allData4 = [];

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

    m_allData4 = m_allData4.concat(data); // Concatenate the new data to m_allData4
    const m_allData = m_allData1.concat(m_allData2, m_allData3, m_allData4); // Update m_allData

    m_sum = m_yesCount1 + m_yesCount2 + m_yesCount3 + m_yesCount4;
    console.log(m_allData4);

    console.log(m_allData);
    console.log(m_sum);

    generatePdf(m_allData); // Call the generatePdf function with the updated array
    // connect();
    history.push("/lead-time-1");
  }

  function generatePdf(m_allData) {
    // Créer un nouveau document PDF
    const doc = new jsPDF();
    const lineHeight = 20;
    const pageHeight = doc.internal.pageSize.height - 40;
    let y = 20;

    // Parcourir les données dans m_allData et ajouter chaque question et réponse au document PDF
    m_allData.forEach((data, index) => {
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

    fetch("http://127.0.0.1:8000/save-answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(m_allData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error saving data to MongoDB");
        }
        history.push("/lead-time-1");
      })
      .catch((error) => {
        console.error(error);
        // Gérer l'erreur
      });

    // Enregistrer le document PDF
    doc.save("Modernization_Criteria.pdf");
  }

  return (
    <div className="container-center-horizontal">
      <div className="modernization-4 screen">
        <div className="overlap-group-84">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-84"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-50">
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
          Score: {yesCount4} / {m_totalQuestions}
        </p>
        <div className="emploirelation-employeur-employ-14">
          <div className="emploi-relation-employeur-employ-1-11">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="are-your-different-s subtitel"
                htmlFor="areyourdifferentsystemsabletocommunicatewitheachother"
              >
                Are your different systems able to communicate with each other?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Are your different systems able to communicate with each other?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Are your different systems able to communicate with each other?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are your different systems able to communicate with each other?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Are your different systems able to communicate with each other?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Are your different systems able to communicate with each other?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are your different systems able to communicate with each other?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-have-any-means-of-communication subtitel"
                htmlFor="doyouhaveanymeansofcommunication"
              >
                Do you have any means of communication?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("Do you have any means of communication?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have any means of communication?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have any means of communication?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("Do you have any means of communication?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have any means of communication?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have any means of communication?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="emploi-relation-employeur-employ-1-item subtitel"
                htmlFor="isttpaper"
              >
                Is it paper?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Is it paper?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Is it paper?"] === "Yes" ? "enabled" : ""
                  }`}
                  disabled={selectedOptions["Is it paper?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("Is it paper?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Is it paper?"] === "No" ? "enabled" : ""
                  }`}
                  disabled={selectedOptions["Is it paper?"] === "Yes"}
                ></input>
              </div>
            </section>
            <section>
              <label
                className="emploi-relation-employeur-employ-1-item subtitel"
                htmlFor="isitoral"
              >
                Is it Oral?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Is it Oral?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Is it Oral?"] === "Yes" ? "enabled" : ""
                  }`}
                  disabled={selectedOptions["Is it Oral?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("Is it Oral?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Is it Oral?"] === "No" ? "enabled" : ""
                  }`}
                  disabled={selectedOptions["Is it Oral?"] === "Yes"}
                ></input>
              </div>
            </section>
            <section>
              <label
                className="emploi-relation-employeur-employ-1-item subtitel"
                htmlFor="isitbymail"
              >
                Is it by mail?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Is it by mail?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Is it by mail?"] === "Yes" ? "enabled" : ""
                  }`}
                  disabled={selectedOptions["Is it by mail?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("Is it by mail?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Is it by mail?"] === "No" ? "enabled" : ""
                  }`}
                  disabled={selectedOptions["Is it by mail?"] === "Yes"}
                ></input>
              </div>
            </section>
            <section>
              <label
                className="emploi-relation-employeur-employ-1-item subtitel"
                htmlFor="isitanapplicationsuitelikegooglemicrosoft"
                placeholder={inputPlaceholder6}
                type={inputType6}
              >
                Is it an Application Suite like Google , microsoft ?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Is it an Application Suite like Google , microsoft ?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Is it an Application Suite like Google , microsoft ?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Is it an Application Suite like Google , microsoft ?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Is it an Application Suite like Google , microsoft ?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Is it an Application Suite like Google , microsoft ?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Is it an Application Suite like Google , microsoft ?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="emploi-relation-employeur-employ-1-item subtitel"
                htmlFor="isthedataproducedusedtomakedecisions"
              >
                Is the data produced used to make decisions?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Is the data produced used to make decisions?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Is the data produced used to make decisions?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Is the data produced used to make decisions?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Is the data produced used to make decisions?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Is the data produced used to make decisions?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Is the data produced used to make decisions?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="emploi-relation-employeur-employ-2-12">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-operators-have-ac subtitel"
                htmlFor="dooperatorshaveaccesstoanintelligentuserinterface"
              >
                Do operators have access to an intelligent user interface?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do operators have access to an intelligent user interface?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do operators have access to an intelligent user interface?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do operators have access to an intelligent user interface?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do operators have access to an intelligent user interface?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do operators have access to an intelligent user interface?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do operators have access to an intelligent user interface?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-151">
          <Toggle
            className={toggle3Props.className}
            buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-112-9">
            <div className="lead-time-criteria valign-text-middle inter-bold-mineral-green-18px">
              {leadTimeCriteria}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modernization4;
