import React, {useState} from 'react';
import Card from './Card';
import NewWord from './NewWord';
import Palavra from './Palavra';
import './css/listaWords.css';

const INITIAL_WORDS = [{
    id: 1,
    name: 'Jenna',
    },{
    id: 2,
    name: 'Johny',
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