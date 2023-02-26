import React from "react";
import { Link } from "react-router-dom";
import { List } from "./list-Api-RickMorty-filter";

export const ListApiRickMorty: React.FC = () => {
  const { filter, setFilter, member } = List();
  return (
    <div className="root-list-pag">
      <h2 className="h2-rick">Tienes 826 Personajes para elegir!!! </h2>
      <input
        className="input-rick"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="container-list-rick">
        <h3 className="list-rick">
          {"Id: "}
          {member.id}
        </h3>
        <h3 className="list-rick">
          {"Name: "}
          {member.name}
        </h3>
        <h3 className="list-rick">
          {"Status: "}
          {member.status}
        </h3>
        <h3 className="list-rick">
          {"Species: "}
          {member.species}
        </h3>
        <h3 className="rick">
          <img src={member.image} alt="" />
        </h3>
      </div>
      <Link to={"/listPrincipal"} className="Link">
        Volver a la pagina principal
      </Link>
    </div>
  );
};
