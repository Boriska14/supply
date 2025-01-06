import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems2 from "../NavItems2";
import NavItems3 from "../NavItems3";
import Toggle from "../Toggle";
import Frame136 from "../Frame136";
import Frame144 from "../Frame144";
import Frame11732 from "../Frame11732";
import "./Cost1.css";
export let c_allData1 = [];
export let c_yesCount1 = 0;

function Cost1(props) {
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
    inputType10,
    inputPlaceholder10,
    inputType11,
    inputPlaceholder11,
    inputType12,
    inputPlaceholder12,
    inputType13,
    inputPlaceholder13,
    navItems2Props,
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
    frame144Props,
    frame13610Props,
    frame13611Props,
    frame13612Props,
    toggle4Props,
  } = props;

  function clicked() {
    const button = event.target; // Récupère le bouton qui a été cliqué
    if (button.classList.contains("frame-4-5")) {
      // Vérifie si c'est un bouton 'oui'
      c_yesCount1++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${c_yesCount1}`); // Affiche le nombre de boutons 'Oui' sélectionnés
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
    c_allData1 = c_allData1.concat(data); // Concatène les nouvelles données à allData
    console.log(c_allData1);
    history.push("/cost-2");
    return c_allData1;
  }

  return (
    <div className="container-center-horizontal">
      <div className="cost-1-1 screen">
        <div className="overlap-group-31">
          <div className="rectangle-3-13"></div>
          <NavItems2 className={navItems2Props.className} />
          <NavItems3
            className={navItems3Props.className}
            frame1172Props={navItems3Props.frame1172Props}
            frame1162Props={navItems3Props.frame1162Props}
            frame1132Props={navItems3Props.frame1132Props}
          />
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-31"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <p className="please-answer-the-following-questions-10 valign-text-middle bevan-normal-white-20px">
            {pleaseAnswerTheFollowingQuestions}
          </p>
        </div>
        <div className="emploirelation-employeur-employ-4">
          <div className="emploi-relation-employeur-employ-4">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-a-follow subtitel"
                htmlFor="doyouhaveafollow-upofrawmaterialsstocksex_erp"
              >
                Do you have a follow-up of raw materials, stocks... (ex: ERP)?
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
                className="do-you-have-a-current-average-cost-price subtitel"
                htmlFor="doyouhaveacurrentaveragecostprice"
              >
                Do you have a current average cost price?
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
                className="x-you subtitel"
                htmlFor="areyourrawmaterialcostsfixed"
              >
                Are your raw material costs fixed?
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
              <label className="x-you subtitel" htmlFor="doyouusethefifomethod">
                Do you use the FIFO method?
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
          <div className="emploi-relation-employeur-employ-4">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-analyse-stock-data-in-real-time subtitel"
                htmlFor="doyouanalysestockdatainrealtime"
              >
                Do you analyse stock data in real time?
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
                className="do-you-have-a-roundi subtitel"
                htmlFor="doyouhavearoundingstocksystemtomakethemostofthespace"
              >
                Do you have a rounding stock system? to make the most of the
                space
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
                className="in-case-of-shortage subtitel"
                htmlFor="incaseofshortagedoyouhaveasafetystock"
              >
                In case of shortage, do you have a safety stock?
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
                className="calculation-of-the-cost-of-the-stock subtitel"
                htmlFor="calculationofthecostofthestock"
              >
                Calculation of the cost of the stock?
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
          <div className="emploi-relation-employeur-employ-2-3">
            <Toggle
              className={toggle3Props.className}
              buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-know-your-market subtitel"
                htmlFor="doyouknowyourmarket"
              >
                Do you know your market?
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
                className="have-you-defined-your-market-share subtitel"
                htmlFor="haveyoudefinedyourmarketshare"
              >
                Have you defined your market share?
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
                className="do-you subtitel"
                htmlFor="doyouknowwhereyoustandinrelationtothecompetition"
              >
                Do you know where you stand in relation to the competition?
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
                className="do-you subtitel"
                htmlFor="doyouknowyourdirectcompetitor"
              >
                Do you know your direct competitor?
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
                className="do-you subtitel"
                htmlFor="doyouhaveanyanalysisoftheseasonalityofyourproducts"
              >
                Do you have any analysis of the seasonality of your products?
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
        <div className="flex-row-78">
          <Toggle
            className={toggle4Props.className}
            buttonSecondaryProps={toggle4Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-112-5">
            <div className="next valign-text-middle inter-bold-mineral-green-18px">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cost1;
