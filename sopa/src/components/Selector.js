//import './css/selector.css'
import Card from './Card';

const Selector = () => {
    return (
        <Card className="level-selector">
            <select name="levels" id="leves">
                <option value="1">Fácil</option>
                <option value="2">Médio</option>
                <option value="3">Difícil</option>
            </select>
        </Card>
    )
}

export default Selector;