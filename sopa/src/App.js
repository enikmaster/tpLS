import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Menu from './components/Menu';
import Selector from './components/Selector';
import ListaWords from './components/ListaWords';
import MenuInicial from './components/menuInicial';
import Dificuldade from './components/Dificuldade';

//import Jogar from './components/Jogar';
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("Dificuldade");
  

  // Tirar o valor da select box e criar a grid baseada nesse valor.
  const [selectedLevel, setSelectedLevel] = useState("0");

  const handleLevelChange = (event) => {
    const {value} = event.currentTarget;
    setSelectedLevel(value);
  

  
    console.log({value});


  let i = 0;
  let x;
  let gridN="";
  let s = [];
  console.log("value: " + value)
// alterei de 'if' para 'switch' pq só verifica igualdade de caracter.

  switch(value) {
    case '1':
      console.log('entrei')
      x = 10;
      gridN="DivGrid10";
      break;
    case '2':
      console.log('entrei')
      x = 15;
      gridN="DivGrid15";
      break;
    case '3':
      console.log('entrei')
      x = 20;
      gridN="DivGrid20";
      break;
    default:
      console.log('invalido');
      break;
  }

  for (i = 0; i < x * x; i++) {
    s.push(i);
  }
  return(
   <div className={gridN}>
      {s.map((items)=>(
          <div id = {items} className = "inGrid">
             {items} </div>
      ))}
  </div>
)

  }

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
    <Selector 
      onLevelChange = {handleLevelChange}
      />
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
/*



<select onChange={clickHandler} name="levels" id="leves">
                
   <option value="1">facil</option>
   <option value="2">intermedio</option>
   <option value="3">dificil</option>
   </select>


//timer
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let i=0;
  let s;
  const clickHandler = (e) => {
    const { value } = e.currentTarget;
    setSelectedLevel(value);

    let numOfCards;
    switch (value) {
      // Level: Beginner
      case '1':
        numOfCards = 3;
        for (i = 0; i < 3 * 3; i++) {
          s.push(i);

          {s.map((items)=>(
            <div id = {items} className = "inGrid">
               {items} </div>
        ))}
        }
        break;
      // Level: Intermediate
      case '2':
        numOfCards = 6;
        break;
      // Level: Advanced
      case '3':
        numOfCards = 10;
        break;
      default:
        numOfCards = 0;
        break;
    }
  }

*/