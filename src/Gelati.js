import React from "react";
import data from "./data";

const Gelati = () => {
  return (
    <div className="gelati">
      {data.map((item) => (
        <GelatoCard key={item.id} gelato={item} />
      ))}
    </div>
  );
};

const GelatoCard = ({ gelato }) => {
  return (
    <div className="gelato-card">
      <img src={gelato.img} alt={gelato.nome} />
      <div>
        <h2>{gelato.nome}</h2>
        <p>{gelato.descrizione}</p>
        <p>{gelato.prezzo}</p>
      </div>
    </div>
  );
};

export default Gelati;
export { GelatoCard };
