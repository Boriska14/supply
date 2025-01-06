import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import Ouinon from "../Ouinon";
import Frame11732 from "../Frame11732";
import "./Quality5.css";
export let q_allData5 = [];
export let q_yesCount5 = 0;

function Quality5(props) {
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
    ouinon1Props,
    ouinon2Props,
    ouinon3Props,
    toggle2Props,
    ouinon4Props,
    ouinon5Props,
    ouinon6Props,
    toggle3Props,
  } = props;

  function clicked() {
    const button = event.target; // Récupère le bouton qui a été cliqué
    if (button.classList.contains("frame-4-5")) {
      // Vérifie si c'est un bouton 'oui'
      q_yesCount5++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${q_yesCount5}`); // Affiche le nombre de boutons 'Oui' sélectionnés
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
    q_allData5 = q_allData5.concat(data); // Concatène les nouvelles données à allData
    console.log(q_allData5);
    history.push("/Quality-6");
    return q_allData5;
  }

  return (
    <div className="container-center-horizontal">
      <div className="quality-5 screen">
        <div className="overlap-group-49">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-48"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-21">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <div className="developpement-et-capital-humain-1">
          <div className="developpement-et-capital-humain">
            <Toggle className={toggle1Props.className} buttonSecondaryProps={toggle1Props.buttonSecondaryProps} />
            <section>
            <label
              className="do-you-carry-out-int subtitel"
              htmlFor="doyoucarryoutinternalauditsatplannedintervalstodeterminewhethertheqmscomplieswiththeorganisationsrequirements"
              
            >
              Do you carry out internal audits at planned intervals to determine whether the QMS complies with the organisation's requirements?
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
              className="do-you-6 subtitel"
              htmlFor="doyoucarryoutinternalauditstoverifythattheqmsiscompliant"
             
            >
              Do you carry out internal audits to verify that the QMS is compliant?
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
              className="do-you-6 subtitel"
              htmlFor="doyoucarryoutatleast2peryear"
              >
                Do you carry out at least 2 per year?
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
          <div className="developpement-et-capital-humain">
            <Toggle className={toggle2Props.className} buttonSecondaryProps={toggle2Props.buttonSecondaryProps} />
            <section>
            <label
              className="do-you-define-the-au subtitel"
              htmlFor="doyoudefinetheauditcriteriaandthescopeofeachaudit"
              >
                Do you define the audit criteria and the scope of each audit?
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
              className="do-you-6 subtitel"
              htmlFor="doyouhavespecificauditorstoensureimpartialityoftheaudits"
              >
                Do you have specific auditors to ensure impartiality of the audits?
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
              className="do-you-6 subtitel"
              htmlFor="doyouensurethattheauditresultsarereportedtotherelevantmanagement"
              
            >
              Do you ensure that the audit results are reported to the relevant management?
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
        <div className="flex-row-92">
          <Toggle className={toggle3Props.className} buttonSecondaryProps={toggle3Props.buttonSecondaryProps} />
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

export default Quality5;
