import React, { useState } from "react";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import "./Aquisition.css";

export let company_name = "";
export let company_size = 0;
export let activity_sector = "";

function Aquisition(props) {
  const {
    ellipse116,
    x1200PxLogo_Icam__20081,
    companyName,
    inputType1,
    inputPlaceholder1,
    companySize,
    inputType2,
    inputPlaceholder2,
    activitySector,
    inputType3,
    inputPlaceholder3,
    measuringForm,
    navItems3Props,
  } = props;

  const [companyNameValue, setCompanyNameValue] = useState("");
  const [companySizeValue, setCompanySizeValue] = useState("");
  const [activitySectorValue, setActivitySectorValue] = useState("");

  function updateDataFromInput() {
    company_name = companyNameValue;
    company_size = companySizeValue;
    activity_sector = activitySectorValue;

    const currentDate = Date.now();

    const data = {
      company_name: company_name,
      company_size: company_size,
      activity_sector: activitySector,
      date_added: currentDate,
    };

    fetch("http://127.0.0.1:8000/api/save-enterprises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error saving data to MongoDB");
        }
        console.log("Data saved successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function navigateToHome() {
    window.location.href = "/home";
  }

  function navigateToMeasuringForm() {
    window.location.href = "/measuring-form";
  }

  return (
    <div className="container-center-horizontal">
      <div className="aquisition-27 screen">
        <img className="ellipse-116" src={ellipse116} alt="Ellipse 116" />
        <div className="overlap-group3-3">
          <div className="flex-row-10">
            <img
              onClick={navigateToHome}
              className="x1200px-logo_icam_-_2008-1-3"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
              style={{ cursor: "pointer" }}
            />
            <NavItems3
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
          </div>
          <NavItems2 />
        </div>

        <div className="group-89">
          <div className="group-92">
            <div className="overlap-group-3">
              <div className="rectangle-4360"></div>
              <section>
                <label className="company-name subtitel">{companyName}</label>
                <input
                  className="tap-here-4 subtitel"
                  name="taphere"
                  placeholder="Tap Here"
                  type="text"
                  value={companyNameValue}
                  onChange={(e) => setCompanyNameValue(e.target.value)}
                  required
                />
              </section>
            </div>
          </div>
        </div>

        <div className="overlap-group2-3">
          <div className="group-91">
            <div className="group-93">
              <div className="overlap-group-4">
                <div className="rectangle-4360-1"></div>
                <section>
                  <label className="company-size subtitel">{companySize}</label>
                  <input
                    className="tap-here-5 subtitel"
                    name="taphere"
                    placeholder={inputPlaceholder2}
                    type="number"
                    value={companySizeValue}
                    onChange={(e) => setCompanySizeValue(e.target.value)}
                    required
                  />
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="group-94">
          <div className="overlap-group-3">
            <div className="overlap-group-5">
              <div className="rectangle-4360"></div>
              <section>
                <label className="activity-sector subtitel">
                  {activitySector}
                </label>
                <input
                  className="tap-here-6 subtitel"
                  name="taphere"
                  placeholder={inputPlaceholder3}
                  type="text"
                  value={activitySectorValue}
                  onChange={(e) => setActivitySectorValue(e.target.value)}
                  required
                />
              </section>
            </div>
          </div>
        </div>

        <button onClick={updateDataFromInput} className="frame-105">
          Save data
        </button>

        <button onClick={navigateToMeasuringForm} className="frame-105">
          <div className="measuring-form valign-text-middle inter-bold-mineral-green-18px">
            {measuringForm}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Aquisition;
