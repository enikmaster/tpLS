import React, {useState} from "react";

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
                word: addedWord,
            }
            //setNewWordId(palavras.length + 1);
            //let tamPalavras = palavras.length;
            //console.log(newData);
            props.onMimiApertaAqui(newData);
        } else {
            console.log('Lista cheia!')
        }
        setAddedWord('');
    };


    return (
        <div className="addWord-container">
            <form onSubmit={onSubmitHandler}>
                <label for='addWord'>Adicione uma palavra até 6 letras.</label>
                <input title='addWord' value={addedWord} type='text' maxlength='6' onChange={newWordChangeHandler} />
                <button type='submit'>Add word</button>
            </form>
        </div>
    );
};

export default NewWord;