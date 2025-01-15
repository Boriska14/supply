import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./LeadTime2.css";
import jsPDF from "jspdf";
import { l_allData1, l_yesCount1 } from "../LeadTime1";
export let l_sum = 0;
export let l_yesCount2 = 0;

function LeadTime2(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount2, setYesCount2] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Ical__20081,
    costCriteria,
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
      l_yesCount2++;
      setYesCount2((prevYesCount) => prevYesCount + 1);
    }
  }

  const history = useHistory();
  let l_allData2 = [];

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

    l_allData2 = l_allData2.concat(data); // Concatenate the new data to l_allData2
    const l_allData = l_allData1.concat(l_allData2); // Update l_allData

    l_sum = l_yesCount1 + l_yesCount2;
    console.log(l_allData1);

    console.log(l_allData);
    console.log(l_sum);

    generatePdf(l_allData); // Call the generatePdf function with the updated array
    // connect();
  }

  function generatePdf(l_allData) {
    // Créer un nouveau document PDF
    const doc = new jsPDF();
    const lineHeight = 20;
    const pageHeight = doc.internal.pageSize.height - 40;
    let y = 20;

    // Parcourir les données dans l_allData et ajouter chaque question et réponse au document PDF
    l_allData.forEach((data, index) => {
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
      body: JSON.stringify(l_allData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error saving data to MongoDB");
        }
        history.push("/cost-1");
      })
      .catch((error) => {
        console.error(error);
        // Gérer l'erreur
      });

    // Enregistrer le document PDF
    doc.save("Lead time_Criteria.pdf");
  }

  return (
    <div className="container-center-horizontal">
      <div className="lead-time-2 screen">
        <div className="overlap-group-39">
          <div className="nav-items-container-17">
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
          Score: {l_yesCount2} / {totalQuestions}
        </p>
        <div className="emploirelation-employeur-employ-8">
          <div className="emploi-relation-employeur-employ-1-6">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="are-you-experiencing subtitel"
                htmlFor="areyouexperiencingproductiondelaysduetotechnicalproblems"
              >
                Are you experiencing production delays due to technical
                problems?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Are you experiencing production delays due to technical problems?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Are you experiencing production delays due to technical problems?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are you experiencing production delays due to technical problems?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Are you experiencing production delays due to technical problems?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Are you experiencing production delays due to technical problems?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are you experiencing production delays due to technical problems?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="is-it-physical-serv subtitel"
                htmlFor="isitphysicalservhavemeasuresbeenputinplacetoavoidtheseinconvenienceserinthecompany"
              >
                Is it physical (servHave measures been put in place to avoid
                these inconveniences?er in the company)?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Is it physical (servHave measures been put in place to avoid these inconveniences?er in the company)?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Is it physical (servHave measures been put in place to avoid these inconveniences?er in the company)?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Is it physical (servHave measures been put in place to avoid these inconveniences?er in the company)?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Is it physical (servHave measures been put in place to avoid these inconveniences?er in the company)?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Is it physical (servHave measures been put in place to avoid these inconveniences?er in the company)?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Is it physical (servHave measures been put in place to avoid these inconveniences?er in the company)?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="have-value-added-and subtitel"
                htmlFor="havevalueaddedandnon-valueaddeditemsbeenidentified"
              >
                Have value added and non-value added items been identified?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Have value added and non-value added items been identified?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Have value added and non-value added items been identified?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Have value added and non-value added items been identified?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Have value added and non-value added items been identified?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Have value added and non-value added items been identified?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Have value added and non-value added items been identified?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="emploi-relation-employeur-employ-3-3">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-unsold-products subtitel"
                htmlFor="doyouhaveunsoldproducts"
              >
                Do you have unsold products?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Do you have unsold products?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Do you have unsold products?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have unsold products?"] === "No"
                  }
                ></input>
                <input
                  onClick={() => clicked("Do you have unsold products?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Do you have unsold products?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have unsold products?"] === "Yes"
                  }
                ></input>
              </div>
            </section>

            <section>
              <label
                className="how-long-on-average subtitel"
                htmlFor="howlongonaveragedoyoustoreaproduct"
              >
                How long, on average, do you store a product?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "How long, on average, do you store a product?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "How long, on average, do you store a product?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "How long, on average, do you store a product?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "How long, on average, do you store a product?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "How long, on average, do you store a product?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "How long, on average, do you store a product?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="in-the-clou-do-you-h subtitel"
                htmlFor="inthecloudoyouhavestock-outshowoftend"
              >
                In the cloud, do you have stock-outs?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("In the cloud, do you have stock-outs?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["In the cloud, do you have stock-outs?"] ===
                    "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["In the cloud, do you have stock-outs?"] ===
                    "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("In the cloud, do you have stock-outs?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["In the cloud, do you have stock-outs?"] ===
                    "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["In the cloud, do you have stock-outs?"] ===
                    "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="emploi-relation-employeur-employ-2-7">
            <Toggle
              className={toggle3Props.className}
              buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-international-customers subtitel"
                htmlFor="doyouhaveinternationalcustomers"
              >
                Do you have international customers?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("Do you have international customers?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Do you have international customers?"] ===
                    "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have international customers?"] ===
                    "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("Do you have international customers?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Do you have international customers?"] ===
                    "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have international customers?"] ===
                    "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="if-so-do-you-have-bu subtitel"
                htmlFor="ifsodoyouhavebufferstoragefacilities"
              >
                If so, do you have buffer storage facilities?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "If so, do you have buffer storage facilities?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "If so, do you have buffer storage facilities?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "If so, do you have buffer storage facilities?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "If so, do you have buffer storage facilities?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "If so, do you have buffer storage facilities?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "If so, do you have buffer storage facilities?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="emploi-relation-employeur-employ-2-item subtitel"
                htmlFor="doyouhaveadelayrate"
              >
                Do you have a delay rate?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Do you have a delay rate?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Do you have a delay rate?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have a delay rate?"] === "No"
                  }
                ></input>
                <input
                  onClick={() => clicked("Do you have a delay rate?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Do you have a delay rate?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have a delay rate?"] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="emploi-relation-employeur-employ-2-item subtitel"
                htmlFor="ifsohowmuchisit"
              >
                If so, how much is it?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("If so, how much is it?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["If so, how much is it?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={selectedOptions["If so, how much is it?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("If so, how much is it?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["If so, how much is it?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={selectedOptions["If so, how much is it?"] === "Yes"}
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-86">
          <Toggle
            className={toggle4Props.className}
            buttonSecondaryProps={toggle4Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-112-5">
            <div className="cost-criteria valign-text-middle inter-bold-mineral-green-18px">
              {costCriteria}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadTime2;
