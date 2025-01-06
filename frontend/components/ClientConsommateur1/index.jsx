import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import Frame136 from "../Frame136";
import Frame144 from "../Frame144";
import Frame11732 from "../Frame11732";
import "./ClientConsommateur1.css";
export let cc_allData1 = [];
export let cc_yesCount1 = 0;

function ClientConsommateur1(props) {
  const {
    x1200PxLogo_Icam__20081,
    pleaseAnswerTheFollowingQuestions,
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
    navItems3Props,
    toggle1Props,
    frame1361Props,
    frame1362Props,
    frame1363Props,
    toggle2Props,
    frame1364Props,
    frame1365Props,
    frame1366Props,
    toggle3Props,
    frame1367Props,
    frame144Props,
    frame1368Props,
    toggle4Props,
  } = props;

  function clicked() {
    const button = event.target; // Récupère le bouton qui a été cliqué
    if (button.classList.contains("frame-4-5")) {
      // Vérifie si c'est un bouton 'oui'
      cc_yesCount1++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${cc_yesCount1}`); // Affiche le nombre de boutons 'Oui' sélectionnés
      button.disabled = true; // Désactive le bouton 'oui' qui a été cliqué
      button.classList.add("enabled"); // Ajoute la classe 'enabled' au bouton 'oui'
    } else if (button.classList.contains("frame-4-6")) {
      // Vérifie si c'est un bouton 'non'

      button.disabled = true; // Désactive le bouton 'non' qui a été cliqué
      button.classList.add("enabled"); // Désactive le bouton 'non' qui a été cliqué
    }
  }

  const history = useHistory();

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
    cc_allData1 = cc_allData1.concat(data); // Concatène les nouvelles données à allData
    console.log(cc_allData1);
    history.push("/client-consommateur-2");
    
    return cc_allData1;
  }

  return (
    <div className="container-center-horizontal">
      <div className="client-consommateur-1 screen">
        <div className="overlap-group-29">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-29"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-9">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <p className="please-answer-the-following-questions-8 valign-text-middle bevan-normal-white-20px">
          {pleaseAnswerTheFollowingQuestions}
        </p>
        <div className="emploirelation-employeur-employ-3">
          <div className="emploi-relation-employeur-employ-1-2">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-pass-on-produ subtitel"
                htmlFor="doyoupassonproductprogressinformationtoods"
              >
                Do you pass on product progress information to ODs?
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
                className="number-of-disputes-a subtitel"
                htmlFor="numberofdisputesandorout-of-courtsettlementsconcerningthecompanydoyouhavedisputesandorout-of-courtsettlements"
              >
                Number of disputes and/or out-of-court settlements concerning
                the company (Do you have disputes and/or out-of-court
                settlements?)
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
                className="are-you-audited-by-b subtitel"
                htmlFor="areyouauditedbybodiessuchasthecnil"
              >
                Are you audited by bodies such as the CNIL?
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
          <div className="emploi-relation-employeur-employ-3">
            <div className="frame-154">
              <Toggle
                className={toggle2Props.className}
                buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
              />
            </div>
            <section>
              <label
                className="do-you-have-safety-notices subtitel"
                htmlFor="doyouhavesafetynotices"
              >
                Do you have safety notices?
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
                className="do-you-have-one-or-m subtitel"
                htmlFor="doyouhaveoneormorecustomerproductrecallproceduresinvolvinghealthandsafetyofthecustomerconsumer"
              >
                Do you have one or more customer product recall procedures
                involving health and safety of the customer/consumer?
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
                className="do-you-have-wms-ware subtitel"
                htmlFor="doyouhavewmswarehousemanagementsoftwaretomanagethemovementandstorageofproducts"
              >
                Do you have WMS (warehouse management software) to manage the
                movement and storage of products?
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
          <div className="emploi-relation-employeur-employ-2-2">
            <Toggle
              className={toggle3Props.className}
              buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-take-measures-for-data-protection subtitel"
                htmlFor="doyoutakemeasuresfordataprotection"
              >
                Do you take measures for data protection?
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
                className="do-you-have-justifie subtitel"
                htmlFor="doyouhavejustifiedcomplaintsaboutprivacyviolationsorlossofcustomerdata"
              >
                Do you have justified complaints about privacy violations or
                loss of customer data?
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
                className="are-you-audited-by-b-1 subtitel"
                htmlFor="areyouauditedbybodiessuchasthecnilverificationofdataregisters"
              >
                Are you audited by bodies such as the CNIL? (verification of
                data registers)
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
        <div className="flex-row-76">
          <Toggle
            className={toggle4Props.className}
            buttonSecondaryProps={toggle4Props.buttonSecondaryProps}
          />
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

export default ClientConsommateur1;
