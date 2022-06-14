//import './css/selector.css'
//import Card from './Card';
//


function Selector(props) {
    const {selectedLevel, onLevelChange} = props;
  
    return (
        <div className="level-selector">
            
            <select onChange={onLevelChange} name="levels" id="leves">
                
                <option value="1">fácil</option>
                <option value="2">intermedio</option>
                <option value="3">dificil</option>
            </select>
        </div>
        
    )
}
export default Selector;