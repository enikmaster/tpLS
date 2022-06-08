import './css/dificuldade.css';
import { useState } from "react";

function Dificuldade({selected,setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["Fácil", "Intermédio", "Difícil"];

    return (
        <div className = "dropdown"> 
            <div className = "dropdown-btn" onClick = {(e) => setIsActive(!isActive)}> {selected} <span className = "fas fa-caret-down"></span>  </div> 
                {isActive && (
                       <div className = "dropdown-content">
                           {options.map((option) => (
                               <div 
                                    onClick={(e) => {
                                        setSelected(option);
                                        setIsActive(false);
                               }}
                           
                           className="nivel"
                        >
                            {option}
                       </div> 
                    ))}
                   </div>
                )}
        </div> 
    );
}

  //<div className = "nivel" id = "1"> Fácil </div>
  //<div className = "nivel" id = "2"> Intermédio </div> 
  //<div className = "nivel" id = "3"> Difícil </div>

export default Dificuldade;