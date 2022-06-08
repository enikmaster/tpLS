import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Menu from './components/Menu';
import Selector from './components/Selector';
import ListaWords from './components/ListaWords';
import MenuInicial from './components/menuInicial';
import Dificuldade from './components/Dificuldade';
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("Dificuldade");
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
    <Selector />
    <Dificuldade selected={selected} setSelected={setSelected}/>
    <MenuInicial />
    <Menu />
    <Body />
    <ListaWords />
    <Footer />
    </div>
  );
}

export default App;
