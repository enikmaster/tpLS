import logo from './logo.svg';
//import './assets/css/app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Ola from './components/Ola';

function App() {
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
    <Ola />
    <Footer />
    </div>
  );
}

export default App;
