import React from "react";
import { useNavigate } from "react-router-dom";

export const MyListPrincipal: React.FC = () => {
  const navigate = useNavigate();
  const photoRick = require("../img/Rick.jpg");
  const PhotoGit = require("../img/github.png");

  return (
    <div className="container">
      <div className="h1-main">
        <h1>Ya estas registrados</h1>
        <h3>Selecciona uno de los dos botones</h3>
      </div>
      <div className="button-Git">
        <p>Esta Api visualizas el usuario de GitHub </p>
        <img src={PhotoGit} alt="" className="img-git" />
        <button onClick={() => navigate("/list")}>Api de GitHub</button>
      </div>
      <div className="button-Rick">
        <p>Esta Api ves todos los personajes de Rick & Morty</p>
        <img src={photoRick} alt="" className="img-rick" />
        <button onClick={() => navigate("/listRick")}>Api Rick y Morty</button>
      </div>
    </div>
  );
};
