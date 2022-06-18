import "./css/divGrid.css";
import { useState } from "react";
import ListaTopTen from "./ListaTopTen";
import ListaWords from "./ListaWords";

const Jogar = (props) => {
  let i = 0;
  let j = 0;
  let jr = 0;
  let s = [];
  let arr = [];
  let comp = [];
  let o;
  let x = props.gridN;

  let names = ['JENNA', 'JOHNY', 'ERICA', 'AMMY', 'STEVE', 'JULIA', 'TONY', 'ALEXIS', 'JAMES', 'CLARA', 'MARK', 'MICHELE'];
  const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const letrasSize = letras.length;
  let namesAux = names;
  let listWords = names.map((items) =>
    <li>{items}</li>
  );

  //funcao para preencher a grid com letras e escolher x palavras random
  function letra() {
    let k = Math.floor(Math.random() * letrasSize);
    o = letras[k];
    return o;
  }
  for (i = 0; i < x * x; i++) {
    let n = letra();
    s.push(i);
  }
  //cria lista 
  escolheListaPalavras(x);
  function escolheListaPalavras(x) {
    let xc = names.length - 5;
    for (i = 0; i < names.length - 5; i++) {
      let n = Math.floor(Math.random() * xc);
      let k = namesAux.splice(n, 1);
      xc--;
    }
    return namesAux;
  }
  //cria array2d para poder confirmar letras e palavras
  function criarDoisDArray(arr) {
    let count = 0;
    for (i = 0; i < x; i++) {
      for (j = 0; j < x; j++) {
        arr[i] = [""];
      }
    }
    for (i = 0; i < x; i++) {
      for (j = 0; j < x; j++) {
        arr[i][j] = s[count];
        count++;
      }
    }
    return arr;
  }
  //retorna o index em coluna 
  function verificaColuna(row, l) {
    let count = 0;
    let kil;
    for (j = 0; j < x; j++) {
      if (arr[row][j] == s[l]) {
        kil = j;
      }
    }
    return kil;


  }

  function reverse(word) {
    return [...word].reverse().join("")
  }

  //ESCREVE HORIZONTAL E->D
  function verificalinhad(size, l, word, sc) {
    let m = l;
    let verify = 0;
    let linhad = 0;
    i = 0;
    if (Number.isInteger(s[l]) == true || s[l] == word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (sc <= x) {
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l + i]) == true) {
          linhad++;
        }
        else if (s[l + i] == word[i]) {
          linhad++;
        }
      }
      if (linhad == size) {
        m = l;
        for (i = 0; i < size; i++) {
          s[m] = word[i];
          m++;
        }
        criarDoisDArray(arr);
        return 1;
      }
      else
        return 0;
    }

    return 0;
  }
  //ESCREVE HORIZONTAL D>E
  function verificalinhae(size, column, l, word, sc) {
    let m = l;
    let verify = 0;
    let linhae = 0;
    i = 0;
    if (Number.isInteger(s[l]) == true || s[l] == word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (column - size >= 0) {
      m = l;
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[m--]) == true) {
          linhae++;
        }
        else if (s[m--] == word[i]) {
          linhae++;
        }
      }
      if (linhae == size) {
        m = l;
        for (i = 0; i < word.length; i++) {
          s[m--] = word[i];
        }
        criarDoisDArray(arr);
        return 1;
      }
      else
        return 0;
    }
    return 0;
  }

  //ESCREVE VERTICAL C->B
  function verificac(size, l, word, row) {
    let m = l;
    let verify = 0;
    let linhac = 0;
    let valorx = 0;
    if (Number.isInteger(s[l]) == true || s[l] == word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (size + row <= x) {
      //console.log("Verify: " + verify);
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l + valorx]) == true) {
          linhac++;
          valorx += x;
        }
        else if (s[l + valorx] == word[i]) {
          linhac++;
          valorx += valorx;
        }
      }
      if (linhac == size) {
        m = l;
        valorx = 0;
        for (i = 0; i < size; i++) {
          s[l + valorx] = word[i];
          valorx += x;
        }
        criarDoisDArray(arr);
        return 1;
      }
      else
        return 0;
      return 0;
    }
    return 0;

  }

  //ESCREVE VERTICAL B->C
  function verificab(size, l, word, row) {
    let m = l;
    let verify = 0;
    let linhac = 0;
    let valorx = 0;
    if (Number.isInteger(s[l]) == true || s[l] == word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (row - size >= 0) {
      console.log("ERROS:::: " + verify);
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l - valorx]) == true) {
          linhac++;
          valorx += x;
        }
        else if (s[l - valorx] == word[i]) {
          linhac++;
          valorx += valorx;
        }
      }
      if (linhac == size) {
        valorx = 0;
        for (i = 0; i < size; i++) {
          s[l - valorx] = word[i];
          valorx += x;
        }
        criarDoisDArray(arr);
        return 1;
      }
      else
        return 0;
    }
    return 0;
  }


  //serve para escolheraleatoriamente o index para cada palavra
  escolhePosicaoParaPalavra();
  function escolhePosicaoParaPalavra() {
    criarDoisDArray(arr);
    let f = 0;
    let ver = 1;
    let size;
    let word;
    let row;
    let column;
    let sc;
    let l;
    let random;
    for (f = 0; f < namesAux.length; f++) {

      do {
        l = Math.floor(Math.random() * (x * x));
        size = namesAux[f].length;
        word = namesAux[f];
        row = Math.floor(l / x);
        column = verificaColuna(row, l);
        sc = column + size;
        //ver = verificalinhad(size, l, word, sc);
        random = Math.floor(Math.random() * (4));
        switch (random) {
          case 0:
            ver = verificalinhad(size, l, word, sc);
            break;
          case 1:
            ver = verificalinhae(size, column, l, word, sc);
            break;
          case 2:
            ver = verificac(size, l, word, row);
            break;
          case 3:
            ver = verificab(size, l, word, row);
            break;
          /*
*/
          default:
            break;
        }
      } while (ver === 0);
      console.log("Valor de random: " + random + " Linha: " + row + " Coluna: " + column + " Palavra: " + word + " VALOR DE L " + l);
    }

    for (i = 0; i < x * x; i++) {
      if (Number.isInteger(s[i]) == true) {
        s[i] = letra();
      }
    }
  }

  return (
    <div className="tabuleiro">
      <div className="gridWrapper">
        <div className="infoJogo">
          <h3 className="tempoJogo">Tempo de jogo: 000</h3>
          <h3 className="scoreJogo">Pontuação: 000</h3>
          <h3 className="levelJogo">Nível: Pussy</h3>
        </div>
        <div className={`DivGrid${x}`}>

          {s.map((items) => (
            <div id={jr++} className="inGrid">
              {items}{" "}
            </div>
          ))}
        </div>
      </div>
      <ListaWords />
      <ListaTopTen />
    </div>
  );
}

export default Jogar;
