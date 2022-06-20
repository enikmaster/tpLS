import React, {useState} from 'react';
import Card from './Card';
import NewWord from './NewWord';
import Palavra from './Palavra';
import './css/listaWords.css';

const INITIAL_WORDS = [{
    id: 1,
    name: 'JENNA',
    },{
    id: 2,
    name: 'JOHNNY',
    },{
    id: 3,
    name: 'ERICA',
    },{
    id: 4,
    name: 'AMY',
    },{
    id: 5,
    name: 'STEVE',
    },{
    id: 6,
    name: 'JULIA',
    },{
    id: 7,
    name: 'TONY',
    },{
    id: 8,
    name: 'ALEXIS',
    },{
    id: 9,
    name: 'JAMES',
    },{
    id: 10,
    name: 'CLARA',
    }
];

function ListaWords(props) {
    const [palavras, setPalavras] = useState(INITIAL_WORDS);

    const mimiApertaAquiHandler = (newData) => {
        setPalavras((prevPalavras) => {
            return [...prevPalavras, newData];
        });
        props.criaLista(palavras);
    };

    return (
        <Card className="listaWords-container">
            <h3>Lista de Palavras</h3>
            <div>
                {palavras.map((palavra) => (<Palavra palavraNome={palavra.name} key={palavra.id} />))}
            </div>
            <NewWord
            onMimiApertaAqui={mimiApertaAquiHandler}
            tamPalavras={palavras.length} />
        </Card>

    );
}

export default ListaWords;