import './css/divGrid.css'
import { useState } from "react";

function Jogar() {
  var i = 0;
  var x;
  var dificuladade = 10;
  var facil = 10;
  var medio = 5;
  var dificil = 20;
  var s = [];

  if (dificuladade === facil) {
    x = 10;
  }

  if (dificuladade === medio) {
    x = 15;
  }

  if (dificuladade === dificil) {
    x = 20;
  }

  for (i = 0; i < x * x; i++) {
    s.push(i);
  }

  return(
     <div className="DivGrid">
        {s.map((items)=>(
            <div id = {items} className = "inGrid">
               {items} </div>
        ))}
    </div>
  )
}

export default Jogar;
