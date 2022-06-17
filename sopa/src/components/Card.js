import './css/card.css';

const Card = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default Card;