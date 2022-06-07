import Card from './Card';
import './css/listaWords.css';
import { palavras } from "../data";

function ListaWords(props) {
   

    return (
        <Card className="listaWords-container">
            <h3>Lista de Palavras</h3>
            
            <h1>{props.title}</h1>
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