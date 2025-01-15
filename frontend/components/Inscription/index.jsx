import { Link, useHistory } from "react-router-dom";
import React, { useState, history } from "react";
import Frame94 from "../Frame94";
import Frame95 from "../Frame95";
import "./Inscription.css";
  
function Inscription(props) {
  const {
    aerialViewContainerCargoShipSea1,
    subtract,
    polygon1,
    polygon2,
    login,
    x1200PxLogo_Icam__20081,
    polygon3,
    frame94Props,
    frame95Props,
  } = props;

  function createUser(username, password) {
    const history = useHistory();
  
    const userData = {
      username: username,
      password: password
    };
  
    fetch(process.env.API_URL + "/api/users", {
      method: 'POST', // Utilisez la méthode POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData); // Afficher la réponse JSON dans la console
      // Rediriger vers la page de connexion
      history.push('/connexion');
    })
    .catch(error => {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
    });
  }
  
  

  return (
    <div className="container-center-horizontal">
      <form className="inscription screen" name="form8" action="form8" method="post">
        <div className="overlap-group2-12">
          <img
            className="aerial-view-container-cargo-ship-sea-1-1"
            src={aerialViewContainerCargoShipSea1}
            alt="aerial-view-container-cargo-ship-sea 1"
          />
          <Frame94 className={frame94Props.className} />
          <Frame95 className={frame95Props.className} />
          <div className="ellipse-1-1"></div>
          <div className="ellipse-2-1"></div>
          <img className="subtract-1" src={subtract} alt="Subtract" />
          <img className="polygon-1-1" src={polygon1} alt="Polygon 1" />
          <img className="polygon-2-1" src={polygon2} alt="Polygon 2" />
          <a href="javascript:SubmitForm('form8')">
            <div className="frame-1-19"></div>
          </a>

            <button onClick={createUser}>
            <div className="login-1 valign-text-middle inter-extra-bold-bone-13px">{login}</div>
            </button>

          <img className="x1200px-logo_icam_-_20081" src={x1200PxLogo_Icam__20081} alt="1200px-Logo_ICAM_-_20081" />
        </div>
        <img className="polygon-3-1" src={polygon3} alt="Polygon 3" />
      </form>
    </div>
  );
}

export default Inscription;