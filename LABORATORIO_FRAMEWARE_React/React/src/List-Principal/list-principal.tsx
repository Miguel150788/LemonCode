import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const MyListPrincipal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Ya estas registrados</h1>
      <h3>Selecciona uno de los dos botones</h3>
      <button onClick={() => navigate("/list")}>Api de GitHub</button>
      <p></p>
      <button onClick={() => navigate("/listRick")}>Api Rick y Morty</button>
    </>
  );
};
