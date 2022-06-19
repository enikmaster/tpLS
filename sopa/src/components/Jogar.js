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

  let names = ['JENNA', 'JOHNY', 'ERICA', 'AMMY', 'STEVE', 'JULIA', 'TONY', 'ALEXIS', 'JAMES', 'CLARA', 'MARK', 'MICHEE'];
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
  escolheListaPalavras();

  function escolheListaPalavras() {
    let wordsshowing = 0;

    x === 8 ? wordsshowing = 6 : (x === 10 ? wordsshowing = 8 : wordsshowing = 10);
    for (i = 0; i < (names.length - wordsshowing); i++) {
      let n = Math.floor(Math.random() * (names.length--));
      //console.log(i + " valor de namesAux" + namesAux.length);
      let k = namesAux.splice(n, 1);
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
      if (arr[row][j] === s[l]) {
        kil = j;
      }
    }
    return kil;


  }

  function reverse(word) {
    return [...word].reverse().join("")
  }

  //ESCREVE HORIZONTAL E->D
  function verificalinhad(size, l, word, sc, column) {
    let m = l;
    let verify = 0;
    let linhad = 0;
    i = 0;
    if (Number.isInteger(s[l]) === true || s[l] === word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (sc <= x) {
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l + i]) === true) {
          linhad++;
        }
        else if (s[l + i] === word[i]) {
          linhad++;
        }
      }
      if (linhad === size) {
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
    if (Number.isInteger(s[l]) === true || s[l] === word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (column - size >= 0) {
      m = l;
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[m--]) === true || (s[m--] === word[i])) {
          linhae++;
        }

      }
      if (linhae === size) {
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
    if (Number.isInteger(s[l]) === true || s[l] === word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (row - size >= 0) {
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l + valorx]) === true || (s[l + valorx] === word[i])) {
          linhac++;
          valorx += x;
        }
      }
      if (linhac === size) {
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
    }
    return 0;
  }

  //ESCREVE VERTICAL B->C
  function verificab(size, l, word, row, column) {
    let m = l;
    let verify = 0;
    let linhac = 0;
    let valorx = 0;
    if (Number.isInteger(s[l]) === true || s[l] === word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (row - size >= 0) {
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l - valorx]) === true || (s[l - valorx] === word[i])) {
          linhac++;
          valorx += x;
        }
        if (linhac === size) {
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
  }
  //ESCREVE VERTICAL B->C
  function verificab(size, l, word, row, column) {
    let m = l;
    let verify = 0;
    let linhac = 0;
    let valorx = 0;
    if (Number.isInteger(s[l]) === true || s[l] === word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (row - size >= 0) {
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l - valorx]) === true || (s[l - valorx] === word[i])) {
          linhac++;
          valorx += x;
        }
        if (linhac === size) {
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
  }

  //ESCREVE DIAGONAL CIMA PARA BAIXO PARA AMBOS LADOS
  function verificadc(size, l, word, row, column) {
    let m = l;
    let verify = 0;
    let linhac = 0;
    let valorx = 0;

    if (Number.isInteger(s[l]) === true || s[l] === word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }

    if ((row + size) <= x && (column + 1 - size) >= 0) {
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l + valorx]) === true || (Number.isInteger(s[l + valorx]) === word[i])) {
          linhac++;
          valorx += x - 1;
        }
      }
      if (linhac === size) {
        valorx = 0;
        for (i = 0; i < size; i++) {
          s[l + valorx] = word[i];
          valorx += x - 1;
        }
        criarDoisDArray(arr);
        return 1;
      }
    }
    if (column + size <= x && size + row <= x) {
      let linhacC = 0;
      valorx = 0;
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l + valorx]) === true || (Number.isInteger(s[l + valorx]) === word[i])) {
          linhacC++;
          valorx += x + 1;
        }
      }
      if (linhacC === size) {
        valorx = 0;
        for (i = 0; i < size; i++) {
          s[l + valorx] = word[i];
          valorx += x + 1;
        }
        criarDoisDArray(arr);
        return 1;
      }
      else
        return 0;

    }
    else
      return 0;
  }



  //ESCREVE DIAGONAL CIMA PARA BAIXO PARA AMBOS LADOS
  function verificadcinv(size, l, word, row, column, arr) {
    let m = l;
    let verify = 0;
    let linhac = 0;
    let valorx = 0;

    if (Number.isInteger(s[l]) === true || s[l] === word[i]) {
      verify = 1;
    }
    if (verify != 1) {
      return 0;
    }
    if (linhac === 1) {

    }

    if (((column + 1) + size <= x) && (((row + 1)) - size >= 0)) {
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l - valorx]) === true || ((s[l - valorx]) === word[i])) {
          linhac++;
          valorx += x - 1;
        }
      }
      if (linhac === size) {
        valorx = 0;
        for (i = 0; i < size; i++) {
          s[l - valorx] = word[i];
          valorx += x - 1;
        }
        criarDoisDArray(arr);
        return 1;
      }
      else
        return 0;
    }

    else if (column + 1 - size >= 0 && row + 1 - size <= x) {
      linhac = 0;
      for (i = 0; i < size; i++) {
        if (Number.isInteger(s[l - valorx]) === true || ((s[l - valorx]) === word[i])) {
          linhac++;
          valorx += x + 1;
        }
      }
      if (linhac === size) {
        valorx = 0;
        for (i = 0; i < size; i++) {
          s[l - valorx] = word[i];
          valorx += x + 1;
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
    let ver = 0;
    let size;
    let word;
    let row;
    let column;
    let sc;
    let l;
    let random;
    for (f = 0; f < namesAux.length; f++) {

      do {
        size = namesAux[f].length;
        word = namesAux[f];
        l = Math.floor(Math.random() * (x * x));
        random = Math.floor(Math.random() * (5));
        row = Math.floor(l / x);
        column = verificaColuna(row, l);
        sc = column + size;
        ver = 1;
/*

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
          case 4:
            ver = verificadc(size, l, word, row, column);
            break;
          case 5:
            ver = verificadcinv(size, l, word, row, column, arr);
            console.log(ver);
            break;

          default:
            ver = 0;
            break;
        }*/

      } while (ver === 0);
      console.log(`Palavras: ${word} Linha: ${row}  Coluna: ${column}`);
    }

    for (i = 0; i < x * x; i++) {
      if (Number.isInteger(s[i]) === true) {
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
