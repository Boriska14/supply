import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./Modernization3.css";
export let m_allData3 = [];
export let m_yesCount3 = 0;

function Modernization3(props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [yesCount3, setYesCount3] = useState(0); // Initialize yesCount state
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
      m_yesCount3++;
      setYesCount3((prevYesCount) => prevYesCount + 1);
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
    m_allData3 = m_allData3.concat(data); // Concatène les nouvelles données à allData
    console.log(m_allData3);
    console.log(m_yesCount3);
    history.push("/modernization-4");
    return m_allData3;
  }

  return (
    <div className="container-center-horizontal">
      <div className="modernization-3 screen">
        <div className="overlap-group-81">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-80"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-46">
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
          Score: {m_yesCount3} / {totalQuestions}
        </p>
        <div className="emploirelation-employeur-employ-13">
          <div className="emploi-relation-employeur-employ-1-10">
            <Toggle
              className={toggle1Props.className}
              buttonSecondaryProps={toggle1Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-sensors subtitel"
                htmlFor="doyouhavesensorsandactuatorsinstalledinthemachines"
              >
                Do you have sensors and actuators installed in the machines?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you have sensors and actuators installed in the machines?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you have sensors and actuators installed in the machines?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have sensors and actuators installed in the machines?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you have sensors and actuators installed in the machines?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you have sensors and actuators installed in the machines?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you have sensors and actuators installed in the machines?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="are-they-connected-to-the-internet subtitel"
                htmlFor="aretheyconnectedtotheinternet"
              >
                Are they connected to the internet?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked("Are they connected to the internet?", "Yes")
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Are they connected to the internet?"] ===
                    "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Are they connected to the internet?"] ===
                    "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked("Are they connected to the internet?", "No")
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Are they connected to the internet?"] ===
                    "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Are they connected to the internet?"] ===
                    "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
          <div className="emploi-relation-employeur-employ-2-11">
            <Toggle
              className={toggle2Props.className}
              buttonSecondaryProps={toggle2Props.buttonSecondaryProps}
            />
            <section>
              <label
                className="do-you-have-an-iot-network subtitel"
                htmlFor="doyouhaveaniotnetwork"
              >
                Do you have an IOT network?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() => clicked("Do you have an IOT network?", "Yes")}
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions["Do you have an IOT network?"] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have an IOT network?"] === "No"
                  }
                ></input>
                <input
                  onClick={() => clicked("Do you have an IOT network?", "No")}
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions["Do you have an IOT network?"] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions["Do you have an IOT network?"] === "Yes"
                  }
                ></input>
              </div>
            </section>
            <section>
              <label
                className="do-you-know-in-real subtitel"
                htmlFor="doyouknowinrealtimethestateoftheproductionline"
              >
                Do you know in real time the state of the production line?
              </label>
              <div className="ouinon-45 ouinon-1-1">
                <input
                  onClick={() =>
                    clicked(
                      "Do you know in real time the state of the production line?",
                      "Yes"
                    )
                  }
                  type="button"
                  value="Yes"
                  className={`frame-4-5 ${
                    selectedOptions[
                      "Do you know in real time the state of the production line?"
                    ] === "Yes"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you know in real time the state of the production line?"
                    ] === "No"
                  }
                ></input>
                <input
                  onClick={() =>
                    clicked(
                      "Do you know in real time the state of the production line?",
                      "No"
                    )
                  }
                  type="button"
                  value="No"
                  className={`frame-4-6 ${
                    selectedOptions[
                      "Do you know in real time the state of the production line?"
                    ] === "No"
                      ? "enabled"
                      : ""
                  }`}
                  disabled={
                    selectedOptions[
                      "Do you know in real time the state of the production line?"
                    ] === "Yes"
                  }
                ></input>
              </div>
            </section>
          </div>
        </div>
        <div className="flex-row-147">
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

export default Modernization3;
