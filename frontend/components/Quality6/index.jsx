import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import Frame136 from "../Frame136";
import Frame11732 from "../Frame11732";
import "./Quality6.css";
import jsPDF from "jspdf";
import { q_allData1, q_yesCount1 } from "../Quality1";
import { q_allData2, q_yesCount2 } from "../Quality2";
import { q_allData3, q_yesCount3 } from "../Quality3";
import { q_allData4, q_yesCount4 } from "../Quality4";
import { q_allData5, q_yesCount5 } from "../Quality5";
export let q_sum = 0;


function Quality6(props) {
  const {
    x1200PxLogo_Icam__20081,
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
    inputType10,
    inputPlaceholder10,
    inputType11,
    inputPlaceholder11,
    navItems3Props,
    toggle1Props,
    frame1361Props,
    frame1362Props,
    frame1363Props,
    frame1364Props,
    toggle2Props,
    frame1365Props,
    frame1366Props,
    frame1367Props,
    frame1368Props,
    toggle3Props,
    frame1369Props,
    frame13610Props,
    frame13611Props,
    toggle4Props,
  } = props;


  let q_yesCount6 = 0;
  function clicked() {
    const button = event.target; // Récupère le bouton qui a été cliqué
    if (button.classList.contains("frame-4-5")) {
      // Vérifie si c'est un bouton 'oui'
      q_yesCount2++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${q_yesCount2}`); // Affiche le nombre de boutons 'Oui' sélectionnés
      button.disabled = true; // Désactive le bouton 'oui' qui a été cliqué
      button.classList.add("enabled"); // Ajoute la classe 'enabled' au bouton 'oui'
    } else if (button.classList.contains("frame-4-6")) {
      // Vérifie si c'est un bouton 'non'
      button.disabled = true; // Désactive le bouton 'non' qui a été cliqué
      button.classList.add("enabled"); // Désactive le bouton 'non' qui a été cliqué
    }
  }

  const history = useHistory();
  let q_allData6 = [];

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

    q_allData6 = q_allData6.concat(data); // Concatenate the new data to q_allData2
    const q_allData = q_allData1.concat(
      q_allData2,
      q_allData3,
      q_allData4,
      q_allData5,
      q_allData6,
    );// Update q_allData

    q_sum = q_yesCount1 + q_yesCount2 + q_yesCount3 + q_yesCount4 + q_yesCount5 + q_yesCount6;
    console.log(q_allData6);

    console.log(q_allData);

    generatePdf(q_allData); // Call the generatePdf function with the updated array
    // connect();
    history.push("/client-consommateur-1");
  }

  function generatePdf(q_allData) {
    // Créer un nouveau document PDF
    const doc = new jsPDF();
    const lineHeight = 20;
    const pageHeight = doc.internal.pageSize.height - 40;
    let y = 20;

    // Parcourir les données dans q_allData et ajouter chaque question et réponse au document PDF
    q_allData.forEach((data, index) => {
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
    doc.save("Quality_Criteria.pdf");
  }

  return (
    <div className="container-center-horizontal">
      <div className="quality-6 screen">
        <div className="overlap-group-40">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-39"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-18">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <div className="emploirelation-employeur-employ-9">
          <div className="emploi-relation-employeur-employ-1-7">
            <Toggle className={toggle1Props.className} buttonSecondaryProps={toggle1Props.buttonSecondaryProps} />
            <section>
              <label
              className="is-the-measuring-equ subtitel"
              htmlFor="isthemeasuringequipmentcalibratedandorcheckedatspecifiedintervalsorbeforeuseagainstmeasuringstandardsthatcanbelinkedtointernationalornationalmeasuringstandards"
              
            >
              Is the measuring equipment calibrated and/or checked at specified intervals, or before use, against measuring standards that can be linked to international or national measuring standards?
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
              className="where-such-standards subtitel"
              htmlFor="wheresuchstandardsdonotexististhereferenceusedforcalibrationorverificationkeptasdocumentedinformation"
              >
                Where such standards do not exist, is the reference used for calibration or verification kept as documented information?
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
              className="is-the-measuring-equ-1 subtitel"
              htmlFor="isthemeasuringequipmentidentifiedtodeterminethevalidityofitscalibration"
              >
                Is the measuring equipment identified to determine the validity of its calibration?
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
              className="is-the-measuring-equ-2 subtitel"
              htmlFor="isthemeasuringequipmentprotectedagainstadjustmentdamageordeteriorationthatcouldinvalidatethecalibration"
              
            >
              Is the measuring equipment protected against adjustment, damage or deterioration that could invalidate the calibration?
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
          <div className="emploi-relation-employeur-employ-5">
            <Toggle className={toggle2Props.className} buttonSecondaryProps={toggle2Props.buttonSecondaryProps} />
            <section>
              <label
              className="are-the-quality-obje subtitel"
              htmlFor="arethequalityobjectivesconsistentwiththequalitypolicy"
              
            >
              Are the quality objectives consistent with the quality policy?
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
              className="are-the-quality-objectives-measurable subtitel"
              htmlFor="arethequalityobjectivesmeasurable"
              
            >
              Are the quality objectives measurable?
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
              className="do-the-quality-objec subtitel"
              htmlFor="dothequalityobjectivestakeintoaccounttherequirements"
              
            >
              Do the quality objectives take into account the requirements?
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
              className="are-the-quality-obje-1 subtitel"
              htmlFor="arethequalityobjectivesmonitoredandcommunicated"
              
            >
              Are the quality objectives monitored and communicated?
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
          <div className="emploi-relation-employeur-employ-5">
            <Toggle className={toggle3Props.className} buttonSecondaryProps={toggle3Props.buttonSecondaryProps} />
            <section>
            <label
              className="do-you-react-to-non-compliance subtitel"
              htmlFor="doyoureacttonon-compliance"
              
            >
              Do you react to non-compliance?
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
              className="do-you-take-action-t subtitel"
              htmlFor="doyoutakeactiontocontrolandcorrectit"
              
            >
              Do you take action to control and correct it?
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
              className="do-you-take-responsi subtitel"
              htmlFor="doyoutakeresponsibilityfortheconsequence"
              
            >
              Do you take responsibility for the consequence?
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
        <div className="flex-row-87">
          <Toggle className={toggle4Props.className} buttonSecondaryProps={toggle4Props.buttonSecondaryProps} />
          <button
            onClick={saveData} className="frame-113-67">
              <div
            className="next valign-text-middle inter-bold-mineral-green-18px"
          >
            Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quality6;
