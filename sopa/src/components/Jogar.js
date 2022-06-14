import './css/divGrid.css'
import { useState } from "react";

function Jogar(props) {
  const {selectedLevel} = props;
  
  let i = 0;
  let x;
  let gridN="";
  let facil = 1;
  let medio = 2;
  let dificil = 3;
  let s = [];
  console.log("jogar: " + selectedLevel.value)
  if (selectedLevel.value == facil) {
    x = 10;
    gridN="DivGrid10";
  }
  
  if (selectedLevel == medio) {
    x = 15;
    gridN="DivGrid15";
  }
  
  if (selectedLevel == dificil) {
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
let numOfCards;
    switch (value) {
      // Level: Beginner
      case '1':
        numOfCards = 3;
        break;
      // Level: Intermediate
      case '2':
        numOfCards = 6;
        break;
      // Level: Advanced
      case '3':
        numOfCards = 10;
        break;
      default:
        numOfCards = 0;
        break;
    }