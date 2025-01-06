import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import Frame136 from "../Frame136";
import Frame11732 from "../Frame11732";
import "./Quality2.css";
export let q_allData2 = [];
export let q_yesCount2 = 0;

function Quality2(props) {
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
    toggle4Props,
  } = props;

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
    q_allData2 = q_allData2.concat(data); // Concatène les nouvelles données à allData
    console.log(q_allData2);
    history.push("/Quality-3");
    return q_allData2;
  }

  return (
    <div className="container-center-horizontal">
      <div className="quality-2 screen">
        <div className="overlap-group-44">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-43"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-20">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <NavItems2 />
          </div>
        </div>
        <div className="emploirelation-employeur-employ-10">
          <div className="emploi-relation-employeur-employ-6">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
            <label
              className="do-you-have-a-custom subtitel"
              htmlFor="doyouhaveacustomersatisfactionpercentage"
              
            >
              Do you have a customer satisfaction percentage?
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
              className="is-it-below-30 subtitel"
              htmlFor="isitbelow30"
              
            >
              Is it below 30%?
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
              className="is-it subtitel"
              htmlFor="isitbetween30and60"
              
            >
              Is it between 30% and 60%?
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
          <div className="emploi-relation-employeur-employ-2-8">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
            <label
              className="is-it subtitel"
              htmlFor="isitbetween60and90"
              
            >
              Is it between 60% and 90%?
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
              className="is-it subtitel"
              htmlFor="isithigherthan90"
              
            >
              Is it higher than 90%?
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
              className="does-the-manager-ens subtitel"
              htmlFor="doesthemanagerensurethatcustomerrequirementsaremet"
              
            >
              Does the manager ensure that customer requirements are met?
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
          <div className="emploi-relation-employeur-employ-6">
            <Toggle
              className={toggle3Props.className}
              buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
            />
            <section>
            <label
              className="do-you-communicate-t subtitel"
              htmlFor="doyoucommunicatetoemployeesthepointsofattentionwhereproductandservicecomplianceisatrisk"
              
            >
              Do you communicate to employees the points of attention where product and service compliance is at risk?
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
        <div className="flex-row-90">
          <Toggle
            className={toggle4Props.className}
            buttonSecondaryProps={toggle4Props.buttonSecondaryProps}
          />
          <button
            onClick={saveData} className="frame-113-51">
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

export default Quality2;
