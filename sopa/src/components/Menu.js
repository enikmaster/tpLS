import "./css/menu.css";
import "./css/selectorCus.css"
import { useState } from "react";
import { highScores } from "../defaultScores";
import TopTen from "./TopTen";

function Menu(props) {
    
  const { onLevelChange } = props;
  let menu = "Menu";
  let inicio = "Iniciar Jogo";
  let pontos = "Ver Pontuações";
  let nivel;

  const IniciaJogo = () => {};


  return (
    <div className="Menu">
      <div className="level-selector">
        <label className="custom-selector">
          <select onChange={onLevelChange} name="levels" id="leves">
            <option value="1">Facil</option>
            <option value="2">Intermedio</option>
            <option value="3">Dificil</option>
          </select>
        </label>
      </div>
      <TopTen />
      
      <button onClick={IniciaJogo} className="Inicio editButt">
        {" "}
        {inicio}
      </button>
    </div>
  );
}

export default Menu;
