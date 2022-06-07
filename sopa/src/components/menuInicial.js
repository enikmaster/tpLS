import './css/menu.css'
import {useState} from 'react';

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
            <button onClick={IniciaJogo} className="IniciaJogo editButt"> {inicio}</button>
            <button onClick={HighScore} className="HighScore editButt"  > {pontos}</button>
            <div> s</div>
        </div >

    )
}


export default MenuInicial;