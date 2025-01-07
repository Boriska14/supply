import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItems3 from "../NavItems3";
import Frame11332 from "../Frame11332";
import Frame114 from "../Frame114";
import Frame232 from "../Frame232";
import Frame222 from "../Frame222";
import jsPDF from "jspdf";
import "./Analysis.css";

function Analysis(props) {
  const [result, setResult] = useState(null);

  const {
    analysis,
    label,
    x1200PxLogo_Icam__20081,
    place,
    formalismesEnFonct,
    navItems3Props,
    frame11332Props,
    frame232Props,
    frame222Props,
    toggleProps,
  } = props;

  // Fonction d'inférence pour récupérer les résultats
  function inference() {
    fetch("http://127.0.0.1:8000/inferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Log de la réponse de l'API
        // Vérification de la structure de la réponse
        if (data && data.errors && Array.isArray(data.errors)) {
          const responseData = data.errors; // Accéder directement à 'errors'
          setResult(responseData);
          alert("Successful Analysis");
        } else {
          console.error("Expected an array of errors but got:", data);
          alert("Failed: Response is not an array of errors.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to perform analysis");
      });
  }

  // Fonction pour générer et sauvegarder le PDF
  function saveAsPDF() {
    // Vérification de si result est un tableau et contient des erreurs
    if (!result || !Array.isArray(result) || result.length === 0) {
      alert("No results or errors to save!");
      return;
    }

    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;
    let currentVerticalPosition = 20;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Rapport d'Erreurs d'Analyse", pageWidth / 2, currentVerticalPosition, { align: "center" });
    currentVerticalPosition += 20;

    pdf.setDrawColor(0);
    pdf.setLineWidth(0.5);
    pdf.line(10, currentVerticalPosition, pageWidth - 10, currentVerticalPosition);
    currentVerticalPosition += 10;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);

    // Ajouter les erreurs dans le PDF directement à partir de 'result'
    if (Array.isArray(result) && result.length > 0) {
      console.log("Filtered Errors:", result);  // Affichage dans la console pour vérifier les erreurs

      // Ajouter les erreurs dans le PDF
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.text("Liste des erreurs :", 10, currentVerticalPosition);
      currentVerticalPosition += 10;

      // Ajouter les erreurs une par une dans le PDF
      result.forEach((error, index) => {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
        pdf.text(`${index + 1}. ${error}`, 10, currentVerticalPosition);
        currentVerticalPosition += 8;  // Espace entre les erreurs
      });

      currentVerticalPosition += 15;
    } else {
      alert("No errors found in the API response.");
      return;
    }

    pdf.setDrawColor(0);
    pdf.setLineWidth(0.5);
    pdf.line(10, currentVerticalPosition, pageWidth - 10, currentVerticalPosition);
    currentVerticalPosition += 10;

    const currentDate = new Date().toLocaleDateString();
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(10);
    const footerText = `Generated on: ${currentDate}`;
    pdf.text(footerText, pageWidth - 10 - pdf.getTextWidth(footerText), pageHeight - 10, { align: "right" });

    pdf.save(`analysis_errors_${currentDate}.pdf`);
  }

  return (
    <div className="container-center-horizontal">
      <div className="analysis-88 screen">
        <div className="overlap-group-13">
          <div className="rectangle-2"></div>

          <NavItems3
            className={navItems3Props.className}
            frame1172Props={navItems3Props.frame1172Props}
            frame1162Props={navItems3Props.frame1162Props}
            frame1132Props={navItems3Props.frame1132Props}
          />

          <div className="nav-items-2-17">
            <Frame11332 className={frame11332Props.className} />
            <Frame114 />

            <Link to="/analysis">
              <div className="frame-115-115">
                <div className="analysis-89 valign-text-middle inter-medium-white-18px">
                  {analysis}
                </div>
              </div>
            </Link>

            <Frame232 headerMenuDefault2Props={frame232Props.headerMenuDefault2Props} />

            <div className="label-98 inter-medium-star-dust-18-1px">{label}</div>
          </div>

          <Link to="/home">
            <img
              className="x1200px-logo_icam_-_2008-1-13"
              src={x1200PxLogo_Icam__20081}
              alt="1200px-Logo_ICAM_-_2008 1"
            />
          </Link>

          <Link to="/functional-view">
            <Frame222>{frame222Props.children}</Frame222>
          </Link>

          <Link to="/visual-management-1">
            <div className="frame-5-9">
              <div className="place-74 valign-text-middle inter-bold-tropical-rain-forest-18px">
                {place}
              </div>
            </div>
          </Link>

          <p className="formalismes-en-fonct valign-text-middle">
            {formalismesEnFonct}
            <button className="bu" onClick={inference}>Analysis</button>
            <button className="bu" onClick={saveAsPDF}>Save Errors as PDF</button>
          </p>

          <div className="body">
            {result && (
              <div className="result-groups">
                {result
                  .reduce((acc, item) => {
                    const documentIndex = item.DocumentIndex;
                    const existingItem = acc.find(
                      (groupedItem) =>
                        groupedItem.documentIndex === documentIndex
                    );

                    if (existingItem) {
                      existingItem.results.push(item);
                    } else {
                      acc.push({
                        documentIndex,
                        results: [item],
                      });
                    }

                    return acc;
                  }, [])
                  .map((group, groupIndex) => (
                    <div key={groupIndex} className="result-box">
                      <h2>
                        Document {group.documentIndex + 1} Results
                      </h2>
                      <br />
                      <div className="scrollable-container">
                        {group.results.map((item, index) => (
                          <div key={index} className="result-item">
                            {item.Element && (
                              <>
                                <p>Analysis: {item.Analysis}</p>
                                <p>
                                  Element Info: Row {item.Element.row}, Column{" "}
                                  {item.Element.column}, Heading {item.Element.heading}, Document{" "}
                                  {item.Element.doc}
                                </p>
                              </>
                            )}
                            {!item.Element && <p>{item.Analysis}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
