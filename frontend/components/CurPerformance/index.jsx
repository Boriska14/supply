import React from "react";
import { Link } from "react-router-dom";
import NavItems3 from "../NavItems3";
import Frame11332 from "../Frame11332";
import Frame114 from "../Frame114";
import Frame115 from "../Frame115";
import Frame117 from "../Frame117";
import "./CurPerformance.css";

function CurPerformance(props) {
  const {
    x1200PxLogo_Icam__20081,
    resultPropositions,
    place,
    formalismesEnFonct,
    navItems3Props,
    frame11332Props,
    currentResults,
    previousResults,
  } = props;

  // Function to calculate improvement percentage
  const calculateAmeliorationPercentage = (current, previous) => {
    if (previous === 0) return "N/A";
    return (((current - previous) / previous) * 100).toFixed(2) + "%";
  };

  // Metrics names for display
  const metrics = [
    "Client/ Consomateur",
    "Environment",
    "Quality",
    "Social",
    "Modernization",
    "Lead Time",
    "Cost",
  ];

  return (
    <div className="container-center-horizontal">
      <div className="cur-performance-10 screen">
        <div className="overlap-group-91">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-88"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-52">
            <NavItems3
              className={navItems3Props.className}
              frame1172Props={navItems3Props.frame1172Props}
              frame1162Props={navItems3Props.frame1162Props}
              frame1132Props={navItems3Props.frame1132Props}
            />
            <div className="nav-items-2-56">
              <Frame11332 className={frame11332Props.className} />
              <Frame114 />
              <Frame115 />
              <div className="frame-116-181">
                <div className="result-propositions valign-text-middle inter-medium-white-18px">
                  {resultPropositions}
                </div>
              </div>
              <Frame117 />
            </div>
          </div>
        </div>

        <div className="flex-row-154">
          <Link to="/analysis">
            <div className="frame-5-25">
              <div className="place-273 valign-text-middle inter-bold-tropical-rain-forest-18px">
                {place}
              </div>
            </div>
          </Link>
          <p className="formalismes-en-fonct-1 valign-text-middle bevan-normal-white-20px">
            {formalismesEnFonct}
          </p>
        </div>

        <div className="container1">
          {/* Previous Results */}
          <div className="container2">
            <h2>Previous Results</h2>
            {metrics.map((metric, index) => (
              <label
                key={`prev-${metric}`}
                className="x25-4 inter-bold-rum-swizzle-56px"
              >
                {metric}: {previousResults[index]}
              </label>
            ))}
          </div>

          {/* Current Results */}
          <div className="container3">
            <h2>Current Results</h2>
            {metrics.map((metric, index) => (
              <label
                key={`current-${metric}`}
                className="x25-4 inter-bold-rum-swizzle-56px"
              >
                {metric}: {currentResults[index]}
              </label>
            ))}
          </div>

          {/* Amelioration Percentage */}
          <div className="container4">
            <h2>Amelioration Percentage</h2>
            {metrics.map((metric, index) => (
              <label
                key={`amelioration-${metric}`}
                className="x25-4 inter-bold-rum-swizzle-56px"
              >
                {metric}:{" "}
                {calculateAmeliorationPercentage(
                  currentResults[index],
                  previousResults[index]
                )}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurPerformance;
