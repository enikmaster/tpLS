import './css/footer.css';
import logo from './img/logo.png';

function Footer() {
    return (
        <footer>
            <h3 id="realizado">Este trabalho foi realizado no âmbito da disciplina de Linguagens Script, por:</h3> 
            <div>Diogo Franco</div>
            <div>Filipe Carvalho</div>
            <div>Lourenço McBride</div>
            <br></br>
            <div>ISEC 2021/22</div>
            <img src={logo} alt="Logo do ISEC"></img> 
            
        </footer>
    );
}

export default Footer