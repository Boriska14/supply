import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItems3 from "../NavItems3";
import NavItems2 from "../NavItems2";
import Toggle from "../Toggle";
import "./ClientConsommateur2.css";
import jsPDF from "jspdf";
import { cc_allData1, cc_yesCount1 } from "../ClientConsommateur1";
import { s_sum } from "../Social6";
import { company_name } from "../Aquisition";
import { e_sum } from "../Environmental5";
import { m_sum } from "../Modernization4";
import { l_sum } from "../LeadTime2";
import { c_sum } from "../Cost2";
import { q_sum } from "../Quality6";

export let cc_sum = 0;

function ClientConsommateur2(props) {
  const {
    x1200PxLogo_Icam__20081,
    navItems3Props,
    toggle1Props,
    toggle2Props,
    toggle3Props,
  } = props;

  let cc_yesCount2 = 0;

  function clicked(event) {
    const button = event.target; // Récupère le bouton qui a été cliqué
    if (button.classList.contains("frame-4-5")) {
      cc_yesCount2++; // Incrémente le compteur de bouton 'Oui'
      console.log(`Number of yesButton selected: ${cc_yesCount2}`);
    }
    button.disabled = true; // Désactive le bouton cliqué
    button.classList.add("enabled"); // Ajoute la classe 'enabled' au bouton
  }

  const history = useHistory();
  let cc_allData2 = [];

  function saveData() {
    const sections = document.getElementsByTagName("section");
    const data = [];

    for (let section of sections) {
      const question = section.innerText.split("\n")[0];
      const enabledButton = section.querySelector(".enabled");
      if (enabledButton) {
        const enabledValue = enabledButton.value;
        data.push({ question, answer: enabledValue });
      }
    }

    cc_allData2 = [...cc_allData2, ...data]; // Concaténer les nouvelles données
    const cc_allData = [...cc_allData1, ...cc_allData2];

    cc_sum = cc_yesCount1 + cc_yesCount2;
    console.log("Collected Data:", cc_allData2);
    console.log("Combined Data:", cc_allData);

    generatePdf(cc_allData); // Générer le PDF
  }

  function generatePdf(cc_allData) {
    const doc = new jsPDF();
    const lineHeight = 10;
    const pageHeight = doc.internal.pageSize.height - 20;
    let y = 20;

    cc_allData.forEach((data, index) => {
      const question = `Question ${index + 1}: ${data.question}`;
      const answer = `Réponse: ${data.answer}`;
      const splitQuestion = doc.splitTextToSize(
        question,
        doc.internal.pageSize.width - 20
      );

      if (y + splitQuestion.length * lineHeight > pageHeight) {
        doc.addPage();
        y = 20;
      }

      doc.text(splitQuestion, 10, y);
      y += splitQuestion.length * lineHeight;

      doc.text(answer, 10, y);
      y += lineHeight;
    });

    const data = {
      enterprise: company_name,
      Social: { Total: s_sum },
      Environnement: { Total: e_sum },
      Quality: { Total: q_sum },
      Cost: { Total: c_sum },
      Lead_time: { Total: l_sum },
      Modernisation: { Total: m_sum },
      ClientConsommateur: { Total: cc_sum },
    };

    fetch("http://127.0.0.1:8000/save-points", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error saving data to MongoDB");
        console.log("Data successfully saved!");
      })
      .catch((error) => console.error("Save error:", error));

    doc.save("Client_Consommateur_Criteria.pdf");
    history.push("/cur-performances");
  }

  return (
    <div className="container-center-horizontal">
      <div className="client-consommateur-2 screen">
        <div className="overlap-group-26">
          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-26"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>
          <div className="nav-items-container-7">
            <NavItems3 {...navItems3Props} />
            <NavItems2 />
          </div>
        </div>
        {/* Questions Section */}
        <div className="emploirelation-employeur-employ">
          <Toggle {...toggle1Props} />
          {/* Repeatable Section */}
          <section>
            <label>Is your complaint rate above 75%?</label>
            <div>
              <input onClick={clicked} value="Yes" className="frame-4-5" />
              <input onClick={clicked} value="No" className="frame-4-6" />
            </div>
          </section>
        </div>
        <button className="frame-113-69" onClick={saveData}>
          Go to results
        </button>
      </div>
    </div>
  );
}

export default ClientConsommateur2;
