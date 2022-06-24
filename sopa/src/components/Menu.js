import "./css/menu.css";
import "./css/levelSelector.css"
import { useState } from "react";

import LevelSelector from "./LevelSeletor";
import TopTen from "./TopTen";

function Menu(props) {
  const [newLevel, setNewLevel] = useState(false);

  // const mostraTopHandler = mostra => {
  //   props.onMostraTop(mostra);
  // }
    
  const selectedLevelHandler = level => {
    setNewLevel(level);
    props.onLevelChange(level);
  };
  const funcaoGameStarted = () => {
    props.onGameStart(true);
  };
  // const [startedGame, setStartedGame] = useState('0');
  // const [viewTop, setViewTop] = useState('0');

  return (
    <div className="Menu">
      <LevelSelector currentLevel={newLevel} onSelectLevel={selectedLevelHandler} />
      <TopTen /> { /* onMostra={mostraTopHandler} */ }

      <button value='0' type="button" onClick={funcaoGameStarted} className="Inicio editButt">Jogar</button>
      
    </div>
  );
}

export default Menu;