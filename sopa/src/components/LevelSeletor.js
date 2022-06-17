import React from "react";

import './css/levelSelector.css';

const LevelSelector = (props) => {
    const onLevelChangeHandler = (event) => {
        props.onSelectLevel(event.target.value);
    };

    return (
      <div className="level-selector">
        <label className="custom-selector">
          <select value={props.currentLevel} onChange={onLevelChangeHandler} name="levels" id="leves">
            <option value="0">Selecionar...</option>
            <option value="1">Fácil</option>
            <option value="2">Médio</option>
            <option value="3">Difícil</option>
          </select>
        </label>
      </div>
    );
};

export default LevelSelector;