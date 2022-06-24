import { useState } from 'react';

function TopTenButton() {
  //const [mostra, setMostra] = useState(false);

  const onHighScoreClick = () => {
    //setMostra(!mostra);
    let element = document.getElementById("Top10");
    element.classList.toggle("hidden");
  };

  return (
    <div className="menuTop10">
      <button onClick={onHighScoreClick} className="editButt">Top10</button>
    </div>
  );
}

export default TopTenButton;
