import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Modernization2.css";
export let m_allData2 = [];
export let m_yesCount2 = 0;

function Modernization2(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount2, setYesCount2] = useState(0); // Initialize yesCount state
  const [totalQuestions, setTotalQuestions] = useState(0);
  const {
    x1200PxLogo_Icam__20081,
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
      m_yesCount2++;
      setYesCount2((prevYesCount) => prevYesCount + 1);
    }
  }

  const history = useHistory();

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
    m_allData2 = m_allData2.concat(data); // Concatène les nouvelles données à allData
    console.log(m_allData2);
    console.log(m_yesCount2);
    history.push("/modernization-3");
    return m_allData2;
  }

  return (
    <div className="container-center-horizontal">
      <div className="modernization-2-1 screen">
        <div className="overlap-group-37">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-36"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-15">
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
          Score: {m_yesCount2} / {totalQuestions}
        </p>
        <div className="emploirelation-employeur-employ-6">
          <div className="emploi-relation-employeur-employ-1-4">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-a-database subtitel"
                htmlFor="doyouhaveadatabase"
              >
                Do you have a database?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Do you have a database?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Do you have a database?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={selectedOptions["Do you have a database?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("Do you have a database?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Do you have a database?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have a database?"] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="is-it-physical-server-in-the-company subtitel"
                htmlFor="isitphysicalserverinthecompany"
              >
                Is it physical (server in the company)?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("Is it physical (server in the company)?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Is it physical (server in the company)?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Is it physical (server in the company)?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("Is it physical (server in the company)?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Is it physical (server in the company)?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Is it physical (server in the company)?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label className="in-the-cloud subtitel" htmlFor="inthecloud">
                In the Cloud?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("In the Cloud?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["In the Cloud?"] === "Yes" ? "enabled" : ""
                  }`}
                  disabled={selectedOptions["In the Cloud?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("In the Cloud?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["In the Cloud?"] === "No" ? "enabled" : ""
                  }`}
                  disabled={selectedOptions["In the Cloud?"] === "Yes"}
                ></input>
              </div>
            </section>
          </div>
          <div className="emploi-relation-employeur-employ-2-5">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-free-access-to-all-your-data subtitel"
                htmlFor="doyouhavefreeaccesstoallyourdata"
              >
                Do you have free access to all your data?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("Do you have free access to all your data?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have free access to all your data?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have free access to all your data?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("Do you have free access to all your data?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have free access to all your data?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have free access to all your data?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="os-all-the-data-shared subtitel"
                htmlFor="osallthedatashared"
              >
                Os all the data shared?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Os all the data shared?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Os all the data shared?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={selectedOptions["Os all the data shared?"] === "No"}
                ></input>
                <input
                  onClick={() => clicked("Os all the data shared?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Os all the data shared?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Os all the data shared?"] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="x-you-3 subtitel"
                htmlFor="doyouuseservicessuchas_iaaspaassaas"
              >
                Do you use services such as: IaaS, Paas, Saas?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you use services such as: IaaS, Paas, Saas?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you use services such as: IaaS, Paas, Saas?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you use services such as: IaaS, Paas, Saas?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you use services such as: IaaS, Paas, Saas?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you use services such as: IaaS, Paas, Saas?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you use services such as: IaaS, Paas, Saas?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="x-you-3 subtitel"
                htmlFor="areyouabletostoreallthedataprovidedbyyourlotnetwork"
              >
                Are you able to store all the data provided by your lot network?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Are you able to store all the data provided by your lot network?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Are you able to store all the data provided by your lot network?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are you able to store all the data provided by your lot network?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Are you able to store all the data provided by your lot network?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Are you able to store all the data provided by your lot network?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Are you able to store all the data provided by your lot network?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-84">
          <Toggle
            className={toggle3Props.className}
            buttonSecondaryProps={toggle3Props.buttonSecondaryProps}
          />
          <button onClick={saveData} className="frame-112-4">
            <div className="next valign-text-middle inter-bold-mineral-green-18px">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modernization2;
