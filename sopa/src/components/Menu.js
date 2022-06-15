import "./css/menu.css";
import "./css/selectorCus.css"
import { useState } from "react";

function Menu(props) {
    
  const { onLevelChange } = props;
  let menu = "Menu";
  let inicio = "Iniciar Jogo";
  let pontos = "Ver Pontuações";
  let nivel;

  const IniciaJogo = () => {};
  const HighScore = () => {};

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
      <button onClick={HighScore} className="HighScore editButt">
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
