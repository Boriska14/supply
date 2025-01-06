import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import Frame136 from "../Frame136";
import "./Cost2.css";
import jsPDF from "jspdf";
import { c_allData1, c_yesCount1 } from "../Cost1";
export let c_sum = 0;

function Cost2(props) {
  const {
    x1200PxLogo_Icac__20081,
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
    inputType8,
    inputPlaceholder8,
    inputType9,
    inputPlaceholder9,
    qualityCriteria,
    navItems3Props,
    toggle1Props,
    frame1361Props,
    frame1362Props,
    frame1363Props,
    frame1364Props,
    frame1365Props,
    toggle2Props,
    frame1366Props,
    frame1367Props,
    frame1368Props,
    frame1369Props,
    toggle3Props,
  } = props;

  let c_yesCount2 = 0;
  function clicked() {
    const button = event.target; // Récupère le bouton qui a été cliqué
    if (button.classList.contains("frame-4-5")) {
      // Vérifie si c'est un bouton 'oui'
      c_yesCount2++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${c_yesCount2}`); // Affiche le nombre de boutons 'Oui' sélectionnés
      button.disabled = true; // Désactive le bouton 'oui' qui a été cliqué
      button.classList.add("enabled"); // Ajoute la classe 'enabled' au bouton 'oui'
    } else if (button.classList.contains("frame-4-6")) {
      // Vérifie si c'est un bouton 'non'
      button.disabled = true; // Désactive le bouton 'non' qui a été cliqué
      button.classList.add("enabled"); // Désactive le bouton 'non' qui a été cliqué
    }
  }

  const history = useHistory();
  let c_allData2 = [];

  function saveData() {
    const sections = document.getElementsByTagName("section");
    const data = [];

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const question = section.innerText.split("\n")[0];
      const enabledValue = section.querySelector(".enabled").value;
      const questionObj = {
        question: question,
        answer: enabledValue,
      };

      data.push(questionObj);
    }

    c_allData2 = c_allData2.concat(data); // Concatenate the new data to c_allData2
    const c_allData = c_allData1.concat(c_allData2); // Update c_allData

    c_sum = c_yesCount1 + c_yesCount2;
    console.log(c_allData2);

    console.log(c_allData);

    generatePdf(c_allData); // Call the generatePdf function with the updated array
    // connect();
    history.push("/Quality-1");
  }

  function generatePdf(c_allData) {
    // Créer un nouveau document PDF
    const doc = new jsPDF();
    const lineHeight = 20;
    const pageHeight = doc.internal.pageSize.height - 40;
    let y = 20;

    // Parcourir les données dans c_allData et ajouter chaque question et réponse au document PDF
    c_allData.forEach((data, index) => {
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

    // Enregistrer le document PDF
    doc.save("Cost_Criteria.pdf");
  }

  return (
    <div className="container-center-horizontal">
      <div className="cost-2-1 screen">
        <div className="overlap-group-38">
          <Link to="/home">
            <img
              className="x1200px-logo_icac_-_2008-1-37"
              src={x1200PxLogo_Icac__20081}
              alt="1200px-Logo_ICAc_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-16">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <div className="emploirelation-employeur-employ-7">
          <div className="emploi-relation-employeur-employ-1-5">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-a-budget subtitel"
                htmlFor="doyouhaveabudgetformachinemaintenance"
              >
                Do you have a budget for machine maintenance?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
            <section>
              <label
                className="have-you-defined-a-b subtitel"
                htmlFor="haveyoudefinedabudgetforexternalservices"
              >
                Have you defined a budget for external services?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
            <section>
              <label
                className="x-you-4 subtitel"
                htmlFor="doyouhavedifferentsuppliers"
              >
                Do you have different suppliers?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
            <section>
              <label
                className="x-you-4 subtitel"
                htmlFor="areyouabletochangesuppliersdependingonprices"
              >
                Are you able to change suppliers depending on prices?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
            <section>
              <label
                className="x-you-4 subtitel"
                htmlFor="doyoucontrolyourtransportcosts"
              >
                Do you control your transport costs?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
          </div>
          <div className="emploi-relation-employeur-employ-2-6">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="x-you-4 subtitel"
                htmlFor="doyouknowthepriceoftheproductexcludingrawmaterials"
              >
                Do you know the price of the product excluding raw materials?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
            <section>
              <label
                className="x-you-4 subtitel"
                htmlFor="doyouknowtheeconomiclosseslinkedtothenon-conformingproductdisquality"
              >
                Do you know the economic losses linked to the non-conforming
                product (disquality)?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-5 subtitel"
                htmlFor="doyouplanabudgetfornon-voluntarybreakage"
              >
                Do you plan a budget for non-voluntary "breakage"?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-5 subtitel"
                htmlFor="doyouknowyouroptimalquantityofproducttobeprofitable"
              >
                Do you know your optimal quantity of product to be profitable?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={clicked}
                  type="button"
                  value="Yes"
                  className="frame-4-5"
                ></input>
                <input
                  onClick={clicked}
                  type="button"
                  value="No"
                  className="frame-4-6"
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-85">
          <Toggle
            className={toggle3Props.className}
            buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
          />
          <button className="frame-113-51">
            <div
              onClick={saveData}
              className="quality-criteria valign-text-middle inter-bold-mineral-green-18px"
            >
              {qualityCriteria}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cost2;