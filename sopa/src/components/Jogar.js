import "./css/divGrid.css";
import { useState } from "react";
//import { palavras } from "../data";
import ListaWords from "./ListaWords";

const Jogar = (props) => {
  let i = 0;
  let s = [];
  let x = props.gridN;
  //let names=['Jenna', 'Johnny', 'Erica', 'Amy', 'Steve', 'Julia', 'Tony', 'Alexis', 'James', 'Clara', 'Mark', 'Michelle'];

  for (i = 0; i < x * x; i++) {
    s.push(i);
  }
  // "Ola tenho " + gridN + ' anos'
  // `ola tenho ${gridN} anos`
  return (
    <div className="tabuleiro">
      <div className="gridWrapper">
        <div className="infoJogo">
          <h3 className="tempoJogo">Tempo de jogo: 000</h3>
          <h3 className="scoreJogo">Pontuação: 000</h3>
          <h3 className="levelJogo">Nível: Pussy</h3>
        </div>
        <div className={`DivGrid${x}`}>
          {s.map((items) => (
            <div id={items} className="inGrid">
              0{" "}
            </div>
          ))}
        </div>
      </div>
      <ListaWords />
    </div>
  );
}

export default Jogar;
