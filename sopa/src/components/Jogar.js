import "./css/divGrid.css";
import { useState } from "react";
import { palavras } from "../data";

function Jogar(props) {
  let i = 0;
  let j = 0;
  let jr = 0;
  let s = [];
  let arr = [];
  let o;
  let x = props.gridN;
  let names = ['JENNA', 'JOHNY', 'ERICA', 'AMMY', 'STEVE', 'JULIA', 'TONY', 'ALEXIS', 'JAMES', 'CLARA', 'MARK', 'MICHELE'];
  const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const letrasSize = letras.length;
  let namesAux = names;
  let namesSize = names.length;
  let listWords = names.map((items) =>
    <li>{items}</li>
  );
  function letra() {
    let k = Math.floor(Math.random() * letrasSize);
    o = letras[k];
    return o;
  }

  for (i = 0; i < x * x; i++) {
    let n = letra();
    s.push(n);
  }
  //cria lista 
  escolheListaPalavras(x);
  function escolheListaPalavras(x) {
    let xc = namesSize;
    for (i = 0; i < namesSize - 5; i++) {
      let n = Math.floor(Math.random() * xc);
      let k = namesAux.splice(n, 1);
      xc--;
    }
    return namesAux;
  }
  //cria array2d
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

  function verificaColuna(row, l) {
    for (i = row; i <= row; i++) {
      for (j = 0; j < x; j++) {
        if (arr[i][j] == s[l]) {
          return j;
        }
      }
    }
  }
  function reverse(word) {
    return [...word].reverse().join("")
  }
  function verificaOndeEscreverPalavra(size, column, l, word) {
    let m = l;
    console.log(size);
    let sc = size + column;
    if (sc < x) {
      for (i = 0; i < word.length; i++) {
        s[m] = word[i];
        m++;
      }
    }
    else if(column-size>0) {
      word = reverse(word);
      for (i = 0; i < size; i++) {
        s[m-size] = word[i];
        m++;
      }

    }

    return;
  }

  escolhePosicaoParaPalavra();
  function escolhePosicaoParaPalavra() {
    criarDoisDArray(arr);
    let f = 0;
    for (f = 0; f < namesAux.length; f++) {
      let l = Math.floor(Math.random() * (x * x));
      let size = namesAux[f].length;
      let word = namesAux[f];
      let row = Math.floor(l / x);
      let column = verificaColuna(row, l);
      console.log(namesAux[f] + " " + l);
      console.log(row + " " + column);
      verificaOndeEscreverPalavra(size, column, l, word);
    }
  }


  return (
    <div className="main_div">
      <div className={`DivGrid${x} hidden`}>

        {s.map((items) => (
          <div id={jr++} className="inGrid">
            {items}{" "}
          </div>
        ))}
      </div>
      <div className="sidemenu">
        <ul>{listWords}</ul>
      </div>


    </div >
  );
}

export default Jogar;
