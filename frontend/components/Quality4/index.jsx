import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import Frame136 from "../Frame136";
import Frame11732 from "../Frame11732";
import "./Quality4.css";
export let q_allData4 = [];
export let q_yesCount4 = 0;

function Quality4(props) {
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
    navItems3Props,
    toggle1Props,
    frame1361Props,
    frame1362Props,
    frame1363Props,
    frame1364Props,
    toggle2Props,
    frame1365Props,
    frame1366Props,
    toggle3Props,
  } = props;

  function clicked() {
    const button = event.target; // Récupère le bouton qui a été cliqué
    if (button.classList.contains("frame-4-5")) {
      // Vérifie si c'est un bouton 'oui'
      q_yesCount4++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${q_yesCount4}`); // Affiche le nombre de boutons 'Oui' sélectionnés
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
    q_allData4 = q_allData4.concat(data); // Concatène les nouvelles données à allData
    console.log(q_allData4);
    history.push("/Quality-5");
    return q_allData4;
  }

  return (
    <div className="container-center-horizontal">
      <div className="quality-4 screen">
        <div className="overlap-group-62">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-61"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-31">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <div className="emploirelation-employeur-employ-11">
          <div className="emploi-relation-employeur-employ-1-8">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-a-quality-manager subtitel"
                htmlFor="doyouhaveaqualitymanager"
              >
                Do you have a quality manager?
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
                className="are-the-necessary-co subtitel"
                htmlFor="arethenecessarycompetencesofthepersonsworkingontheperformanceandeffectivenessofthequalitymanagementsystemdefined"
              >
                Are the necessary competences of the person(s) working on the
                performance and effectiveness of the quality management system
                defined?
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
                className="do-you-have-job-desc subtitel"
                htmlFor="doyouhavejobdescriptionsthattakeintoaccounttherequirementsofthequalitymanagementsystem"
              >
                Do you have job descriptions that take into account the
                requirements of the quality management system?
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
                className="is-this-documentatio subtitel"
                htmlFor="isthisdocumentationdigitisedandaccessibletoallstaff"
              >
                Is this documentation digitised and accessible to all staff?
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
          <div className="emploi-relation-employeur-employ-2-9">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="has-an-indicator-bee subtitel"
                htmlFor="hasanindicatorbeensetuptoevaluatemeasuretheeffectivenessoftheactionsundertakeninthefieldofcompetencemanagementawarenesstraining"
              >
                Has an indicator been set up to evaluate/measure the
                effectiveness of the actions undertaken in the field of
                competence management, awareness, training?
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
                className="is-the-indicator-vis subtitel"
                htmlFor="istheindicatorvisibletoallandeasilyaccessible"
              >
                Is the indicator visible to all and easily accessible?
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
        <div className="flex-row-120">
          <Toggle
            className={toggle3Props.className}
            buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-113-67">
            <div className="next valign-text-middle inter-bold-mineral-green-18px">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quality4;
