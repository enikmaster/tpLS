import './css/divGrid.css'
import { useState } from "react";

function Jogar() {
  var i = 0;
  var x;
  var gridN="";
  var dificuladade = 10;
  var facil = 10;
  var medio = 5;
  var dificil = 20;
  var s = [];

  if (dificuladade === facil) {
    x = 10;
    gridN="DivGrid10";
  }
  
  if (dificuladade === medio) {
    x = 15;
    gridN="DivGrid15";
  }
  
  if (dificuladade === dificil) {
    x = 20;
    gridN="DivGrid20";
  }

  for (i = 0; i < x * x; i++) {
    s.push(i);
  }


  return(
     <div className={gridN}>
        {s.map((items)=>(
            <div id = {items} className = "inGrid">
               {items} </div>
        ))}
    </div>
  )
}

export default Jogar;
