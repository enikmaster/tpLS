import React, {useState} from "react";
import './css/newWord.css'

const NewWord = (props) => {
    const [addedWord, setAddedWord] = useState('');

    const newWordChangeHandler = (event) => {
        setAddedWord(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (props.tamPalavras <= 20) {
            const newData = {
                id: props.tamPalavras+1,
                name: addedWord,
            }
            props.onMimiApertaAqui(newData);
        } else {
            console.log('Lista cheia!')
        }
        setAddedWord('');
    };


    return (
        <div className="addWord-container">
            <form onSubmit={onSubmitHandler}>
                <label htmlFor='addWord'>Adicione uma palavra at‚ 6 letras.</label>
                <input title='addWord' value={addedWord} type='text' maxLength='6' onChange={newWordChangeHandler} required />
                <button type='submit' className="editButt">Add word</button>
            </form>
        </div>
        
    );
};

export default NewWord;