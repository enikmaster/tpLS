import Header from "./components/Header";
import Footer from "./components/Footer";
// import ListaWords from './components/ListaWords';
import Menu from "./components/Menu";
// import Timer from './components/Timer';
import "./components/css/divGrid.css";
import { useState } from "react";
import Jogar from "./components/Jogar";

function App() {
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [gridN, setGridN] = useState("0");

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
    switch (value) {
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
    - Header -
      > Título
    - Menu inicial -
      > começar jogo
      > ver highscores
    - Tabuleiro de jogo -
    - Lista de palavras -
    - Pontuação final -
    - Lista de pontuações -
    - tempo de jogo -
    - seleção de nível - 
    - pop-up fim do jogo -
    - Footer -
      > "trabalho realizado por X, Y e Z no âmbito da cadeira de Linguagens Script"
    */
   
    <div className="App">
      <Header />
      {
        //<Timer />
        // <Selector
        //   onLevelChange = {handleLevelChange}
        //   />
        //<Dificuldade selected={selected} setSelected={setSelected}/>
        //<ListaWords />
        //<Menu />
      }

      <Menu
        onLevelChange={handleLevelChange}
        selectedLevel={selectedLevel}
      />
      
      <Jogar gridN={gridN}
      />

      <Footer />
    </div>
  );
}

export default App;
