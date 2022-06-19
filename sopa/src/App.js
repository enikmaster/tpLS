import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./components/css/divGrid.css";
import Jogar from "./components/Jogar";

function App() {
  const [gridN, setGridN] = useState("0");
  const [timer, setTimer] = useState(100);
  const [gameStarted, setGameStarted] = useState(false);
  let timerID;


  //timer
  useEffect(() => {
    if (gameStarted) {
      timerID = setInterval(() => {
        setTimer(timer-1);
        }
      , 1000);
      console.log(timer)
    if (timer == 0){
      setGameStarted(false)
      setTimer(100)
    }
    }
    else {
      setTimer(100)
    }
    return() => {
      clearInterval(timerID)
    }
  })


const onGameStart = (gameStart) => {
  if (gameStarted == true) {
    setGameStarted(false)
    
  }
  else {
    setGameStarted(true);
    console.log("testing");
  }
 
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
      gameStarted = {gameStarted}
      onGameStart={onGameStart}
      />
      <Jogar 
      gameStarted = {gameStarted}
      gridN={gridN} 
      timer={timer}
      />
      <Footer />
    </div>
  );
}

export default App;
