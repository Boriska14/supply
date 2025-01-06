import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems2 from "../NavItems2";
import NavItems3 from "../NavItems3";
import Toggle from "../Toggle";
import Frame136 from "../Frame136";
import Frame144 from "../Frame144";
import Frame11732 from "../Frame11732";
import "./Quality1.css";
export let q_allData1 = [];
export let q_yesCount1 = 0;

function Quality1(props) {
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
    navItems2Props,
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
      q_yesCount1++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${q_yesCount1}`); // Affiche le nombre de boutons 'Oui' sélectionnés
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
    q_allData1 = q_allData1.concat(data); // Concatène les nouvelles données à allData
    console.log(q_allData1);
    history.push("/Quality-2");
    return q_allData1;
  }

  return (
    <div className="container-center-horizontal">
      <div className="quality-1 screen">
        <div className="overlap-group-32">
          <div className="rectangle-3-14"></div>
          <NavItems2 className={navItems2Props.className} />
          <NavItems3
            className={navItems3Props.className}
            frame1172Props={navItems3Props.frame1172Props}
            frame1162Props={navItems3Props.frame1162Props}
            frame1132Props={navItems3Props.frame1132Props}
          />
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-32"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <p className="please-answer-the-following-questions-11 valign-text-middle bevan-normal-white-20px">
            {pleaseAnswerTheFollowingQuestions}
          </p>
        </div>
        <div className="emploirelation-employeur-employ-5">
          <div className="emploi-relation-employeur-employ-1-3">
            <Toggle className={toggle1Props.className} buttonSecondaryProps={toggle1Props.buttonSecondaryProps} />
            <section>
            <label
              className="do-you-do-reviews subtitel"
              htmlFor="doyoudoreviews"
              
            >
              Do you do reviews?
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
              className="in-paper-format subtitel"
              htmlFor="inpaperformat"
              
            >
              In paper format?
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
              className="in-digital-format subtitel"
              htmlFor="indigitalformat"
            >
              In digital format?
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
          <div className="emploi-relation-employeur-employ-3-1">
            <Toggle className={toggle2Props.className} buttonSecondaryProps={toggle2Props.buttonSecondaryProps} />
            <section>
              <label
              className="do-you-have-a-review subtitel"
              htmlFor="doyouhaveareviewspecifyingrequirementsnotformulatedbythecustomerbutnecessaryforthespecifieduse"
           
            >
              Do you have a review specifying requirements not formulated by the customer but necessary for the specified use?
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
              className="in-paper-format-1 subtitel"
              htmlFor="inpaperformat"
            >
              In paper format?
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
              className="in-digital-format-1 subtitel"
              htmlFor="indigitalformat"
            
            >
              In digital format?
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
          <div className="emploi-relation-employeur-employ-2-4">
            <Toggle className={toggle3Props.className} buttonSecondaryProps={toggle3Props.buttonSecondaryProps} />
            <section>
            <label
              className="do-you-have-a-review-1 subtitel"
              htmlFor="doyouhaveareviewspecifyingtherequirementsoftheorganisation"
              
            >
              Do you have a review specifying the requirements of the organisation?
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
              className="in-paper-format-2 subtitel"
              htmlFor="inpaperformat"
            
            >
              in paper format?
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
              className="in-digital-format-2 subtitel"
              htmlFor="indigitalformat"
            
            >
In digital format?
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
        <div className="flex-row-79">
          <Toggle className={toggle4Props.className} buttonSecondaryProps={toggle4Props.buttonSecondaryProps} />
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

export default Quality1;
