import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./components/css/divGrid.css";
import Jogar from "./components/Jogar";



function App() {
  const [gridN, setGridN] = useState("0");

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
    - Header -
      > Título
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
    - Footer -
      > "trabalho realizado por X, Y e Z no âmbito da cadeira de Linguagens Script"
    */
   
    <div className="App">
      <Header />
      <Menu onLevelChange={handleLevelChange} />
      <Jogar gridN={gridN} />
      <Footer />
      {
        //<Timer />
        // <Selector
        //   onLevelChange = {handleLevelChange}
        //   />
        //<Dificuldade selected={selected} setSelected={setSelected}/>
        //<ListaWords />
        //<Menu />
      }
    </div>
  );
}

export default App;
