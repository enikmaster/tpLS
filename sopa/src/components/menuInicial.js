import './css/menu.css'
import {useState} from 'react';
import Selector from './Selector';

const MenuInicial = () => {

    let menu = 'Menu';
    let inicio = 'Iniciar Jogo';
    let pontos = 'Ver Pontuações';

    const IniciaJogo = () => {
    }
    const HighScore = () => {
    }

    return (

        <div class="MenuInicial">
            <h3> {menu} </h3>
            <Selector/>
            <button onClick={HighScore} className="HighScore editButt"  > {pontos}</button>
            <button onClick={HighScore} className="HighScore editButt"  > {inicio}</button>
        </div >

    )
}


export default MenuInicial;