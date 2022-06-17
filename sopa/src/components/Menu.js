import "./css/menu.css";
import "./css/selectorCus.css"
import { useState } from "react";
//import TopTen from "./components/TopTen";
import { highScores } from "../defaultScores";

function Menu(props) {
    
  const { onLevelChange } = props;
  let menu = "Menu";
  let inicio = "Iniciar Jogo";
  let pontos = "Ver Pontuações";
  let nivel;

  

  

  const onHighScoreClick = () => {
    console.log('entrei')
  
    let sortedScores = highScores.sort((c1, c2) => (c1.value < c2.value) ? 1 : (c1.value > c2.value) ? -1 : 0);
    {sortedScores.map((data, key) => {
      return (
          <div key={key}> {data.name} - {data.value} points</div>
      );
  })}
  
    console.log(sortedScores)
  }
  
    

  const IniciaJogo = () => {};


  return (
    <div className="MenuInicial">
      <div className="level-selector">
        <label className="custom-selector">
          <select onChange={onLevelChange} name="levels" id="leves">
            <option value="1">Facil</option>
            <option value="2">Intermedio</option>
            <option value="3">Dificil</option>
          </select>
        </label>
      </div>
      <button onClick={onHighScoreClick} className="HighScore editButt">
        {" "}
        {pontos}
      </button>
      <button onClick={IniciaJogo} className="Inicio editButt">
        {" "}
        {inicio}
      </button>
    </div>
  );
}

export default Menu;
