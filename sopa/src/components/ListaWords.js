import React, {useState} from 'react';
import Card from './Card';
import NewWord from './NewWord';
import './css/listaWords.css';

function ListaWords(props) {
    const palavras = [{
        id: 1,
        name: 'Jenna',
    },{
        id: 2,
        name: 'Johnny',
    },{
        id: 3,
        name: 'Erica',
    },{
        id: 4,
        name: 'Amy',
    },{
        id: 5,
        name: 'Steve',
    },{
        id: 6,
        name: 'Julia',
    },{
        id: 7,
        name: 'Tony',
    },{
        id: 8,
        name: 'Alexis',
    },{
        id: 9,
        name: 'James',
    },{
        id: 10,
        name: 'Clara',
    }];

    const mimiApertaAquiHandler = (newData) => {
        const wordData = {
            ...newData
        };
        palavras.push(wordData);
        console.log(palavras);
    };
    // const [newWordId, setNewWordId] = useState(palavras.length);
    // const onClickHandler = () => {
    //     if (palavras.length <= 20) {
    //         setNewWordId(palavras.length + 1);
    //         //let tamPalavras = palavras.length;
    //         console.log(newWordId);
    //     } else {
    //         console.log('Lista cheia!')
    //     }
    // }

    return (
        <Card className="listaWords-container">
            <h3>Lista de Palavras</h3>
            <div>
                {palavras.map((data, key) => {
                    return (
                        <Card className="word" key={key}>{data.name}</Card>
                    );
                })}
            </div>
            <NewWord
            onMimiApertaAqui={mimiApertaAquiHandler}
            tamPalavras={palavras.length} />
        </Card>
    );
}

export default ListaWords;