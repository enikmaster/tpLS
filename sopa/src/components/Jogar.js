import "./css/divGrid.css";
import { useState } from "react";

function Jogar(props) {
  let i = 0;
  let s = [];
  let x = props.gridN;
  let names=['Jenna', 'Johnny', 'Erica', 'Amy', 'Steve', 'Julia', 'Tony', 'Alexis', 'James', 'Clara', 'Mark', 'Michelle'];

  for (i = 0; i < x * x; i++) {
    s.push(i);
  }
  // "Ola tenho " + gridN + ' anos'
  // `ola tenho ${gridN} anos`
  return (
    <div className={`DivGrid${x}`}>
      {s.map((items) => (
        <div id={items} className="inGrid">
          0{" "}
        </div>
      ))}
    </div>
  );
}

export default Jogar;
