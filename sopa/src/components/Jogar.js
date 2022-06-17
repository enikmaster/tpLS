import "./css/divGrid.css";
import { useState } from "react";
import { palavras } from "../data";

function Jogar(props) {
  let i = 0;
  let j = 0;
  let jr = 0;
  let s = [];
  let arr = [];
  let comp =[];
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

  //funcao para preencher a grid com letras e escolher x palavras random
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

  //funcao para escrever a palavra no index random 
  function verificaOndeEscreverPalavra(size, column, l, word) {
    let m = l;
    let sc = size + column;
   
   /* for(i=0; i<word.length; i++){
      comp[i]=s[m];
      m++;
    }*/
   // console.log(comp);
    if (sc <= x) {
      m=l;
      for (i = 0; i < word.length; i++) {
        s[m] = word[i];
        m++;
      }
      criarDoisDArray(arr);
      return;
    }
    if ((column - size) % x > 0) {
      m=l;
      let tam = size;
      word = reverse(word);
      console.log(word);
      for (i = 0; i < size; i++) {
        s[m-tam] = word[i];
         tam--;
      }
      criarDoisDArray(arr);
      return;
    }
    return;

  }
  //serve para escolheraleatoriamente o index para cada palavra
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
