import "./css/menu.css";
import "./css/levelSelector.css"
import { useState } from "react";

import LevelSelector from "./LevelSeletor";
import TopTen from "./TopTen";
//import Timer from "./Timer";


function Menu(props) {
  const [newLevel, setNewLevel] = useState('0');
    
  const selectedLevelHandler = level => {
    setNewLevel(level);
    props.onLevelChange(level);
  };
  // const [startedGame, setStartedGame] = useState('0');
  // const [viewTop, setViewTop] = useState('0');

  const onStartGameHandler = () => {};
  const onTopTenHandler = () => {};

  return (
    <div className="Menu">
      <LevelSelector currentLevel={newLevel} onSelectLevel={selectedLevelHandler} />
      <TopTen />

      <button value='0' type="button" onStartGame={onStartGameHandler} className="Inicio editButt">Jogar</button>
    </div>
  );
}

export default Menu;