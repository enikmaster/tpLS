import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./components/css/divGrid.css";
import Jogar from "./components/Jogar";
import Timer from "./components/Timer";

function App() {
  const [gridN, setGridN] = useState("0");
  const [gameStarted, setGameStarted] = useState(false);
  
  const onGameStart = () => {
    if (gameStarted == true) {
      setGameStarted(false)
    }
    else {setGameStarted(true)}
  }
  


  const handleLevelChange = (level) => {
    const value = level;
    switch (value) {
      case "0":
        setGridN(0);
        break;
      case "1":
        setGridN(8);
        break;
      case "2":
        setGridN(10);
        break;
      case "3":
        setGridN(15);
        break;
      default:
        console.log("invalido");
        break;
    }
  };

  return (
    /* 
    == Components ==
    - Menu -
      == Elementos que trigam ==
      - seleção de nível 
      - start game button
      - top 10 button
      == Elementos consequência do trigger ==
      - top 10 -
      - Pontuação -
      - tempo de jogo -
    - Tabuleiro de jogo -
      - grid -
      - Lista de palavras -
    */
   
    <div className="App">
      <Header />
      <Menu onLevelChange={handleLevelChange} 
      onGameStart={onGameStart}
      />
      <Timer 
      gameStarted = {gameStarted}
      setGameStarted = {setGameStarted}
      />
      <Jogar 
      gridN={gridN}
      />
      <Footer />
    </div>
  );
}

export default App;
