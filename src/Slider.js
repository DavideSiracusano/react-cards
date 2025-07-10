import data from "./data";
import { useState } from "react";
import { GelatoCard } from "./Gelati";

const Slider = () => {
  const [gelati, setGelati] = useState([]);

  const menu1 = data.filter((item) => item.categoria === "cono");
  const menu2 = data.filter((item) => item.categoria === "coppetta");
  const menu3 = data.filter((item) => item.categoria === "stick");

  return (
    <div className="slider">
      <h1>Gelati</h1>
      <button className="slider-button" onClick={() => setGelati(menu1)}>
        Coni
      </button>
      <button className="slider-button" onClick={() => setGelati(menu2)}>
        Coppette
      </button>
      <button className="slider-button" onClick={() => setGelati(menu3)}>
        Stick
      </button>
      <div className="gelati">
        {gelati.map((gelato) => (
          <GelatoCard key={gelato.id} gelato={gelato} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
