import "./css/menu.css";
import "./css/levelSelector.css"
import { useState } from "react";
import LevelSelector from "./LevelSeletor";

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
    <div className="MenuInicial">
      <LevelSelector
      currentLevel={newLevel}
      onSelectLevel={selectedLevelHandler} />
      <button value='0' type="button" onStartGame={onStartGameHandler} className="Inicio editButt">Jogar</button>
      <button type="button" onTopTen={onTopTenHandler} className="HighScore editButt">Ver Top 10</button>
    </div>
  );
}

export default Menu;
