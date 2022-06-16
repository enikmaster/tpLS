import "./css/divGrid.css";
import { useState } from "react";
import { palavras } from "../data";

function Jogar(props) {
  let i = 0;
  let s = [];
  let x = props.gridN;
  let names = ['Jenna', 'Johnny', 'Erica', 'Amy', 'Steve', 'Julia', 'Tony', 'Alexis', 'James', 'Clara', 'Mark', 'Michelle'];
  let listWords = names.map((items) =>
    <li>{items}</li>
  );

  for (i = 0; i < x * x; i++) {
    s.push(i);
  }

  return (
    <div className="main_div">
      <div className={`DivGrid${x} hidden`}>

        {s.map((items) => (
          <div id={items} className="inGrid">
            0{" "}
          </div>
        ))}
      </div>
      <div className="sidemenu">
        <ul>{listWords}</ul>
      </div>


    </div >
  );
}

export default Jogar;
