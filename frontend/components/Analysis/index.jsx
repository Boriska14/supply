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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error performing inferences");
        }
        return response.json();
      })
      .then((data) => {
        setResult(data);
        alert("Successful Analysis");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to perform analysis");
      });
  }

  // Fonction pour sauvegarder uniquement les erreurs en PDF
  function saveAsPDF() {
    if (!result || !Array.isArray(result) || result.length === 0) {
      alert("No results or errors to save!");
      return;
    }
  
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;
    let currentVerticalPosition = 20; // Starting vertical position for content
  
    // Set document title and font
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Rapport d'Erreurs d'Analyse", pageWidth / 2, currentVerticalPosition, { align: "center" });
    currentVerticalPosition += 20; // Adjust position after title
  
    // Add a line under the title for separation
    pdf.setDrawColor(0);
    pdf.setLineWidth(0.5);
    pdf.line(10, currentVerticalPosition, pageWidth - 10, currentVerticalPosition);
    currentVerticalPosition += 10; // Adjust position after the line
  
    // Set font for errors content
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
  
    // Filter errors from the results
    const errors = result.filter(item => item.error);
    if (errors.length === 0) {
      alert("No errors found to save in the PDF!");
      return;
    }
  
    // Add each error to the PDF
    errors.forEach((item, index) => {
      // Add the error number as a heading
      const errorTitle = `Erreur ${index + 1}:`;
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.text(errorTitle, 10, currentVerticalPosition);
      currentVerticalPosition += 10; // Adjust position after error title
  
      // Add the error message with body text
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      const errorMessage = item.error || "Unknown error"; // Ensure error exists
      const lines = pdf.splitTextToSize(errorMessage, pageWidth - 20);
  
      // Check if the text exceeds the page height and add a new page if necessary
      const lineHeight = pdf.getLineHeight();
      if (currentVerticalPosition + lineHeight * lines.length > pageHeight - 30) {
        pdf.addPage();
        currentVerticalPosition = 20; // Reset position for new page
      }
  
      lines.forEach((line, lineIndex) => {
        pdf.text(line, 10, currentVerticalPosition + lineHeight * lineIndex);
      });
  
      currentVerticalPosition += lineHeight * lines.length + 15; // Add spacing after error
  
      // Add a line after each error for separation
      pdf.setDrawColor(0);
      pdf.setLineWidth(0.5);
      pdf.line(10, currentVerticalPosition, pageWidth - 10, currentVerticalPosition);
      currentVerticalPosition += 10; // Adjust position after line
    });
  
    // Add footer with the date of report generation
    const currentDate = new Date().toLocaleDateString();
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(10);
    const footerText = `Generated on: ${currentDate}`;
    pdf.text(footerText, pageWidth - 10 - pdf.getTextWidth(footerText), pageHeight - 10, { align: "right" });
  
    // Save the PDF
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
