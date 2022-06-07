import React, { useState } from 'react';
import Card from './Card';
import './css/listaWords.css';
import { palavras } from "../data";

function ListaWords(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <Card className="listaWords-container">
            <h3>Lista de Palavras</h3>
            <button onClick={clickHandler}>Start Game</button>
            <h1>{title}</h1>
            <div>
                {palavras.map((data, key) => {
                    return (
                        <Card className="word" key={key}> {data.value}</Card>
                    );
                })}
            </div>
        </Card>
    );
}

export default ListaWords;