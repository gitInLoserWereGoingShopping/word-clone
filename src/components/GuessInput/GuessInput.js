import React from 'react';

function GuessInput({ guesses, setGuesses }) {
    const [guess, setGuess] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (guess.length !== 5) {
            alert('Please provide a 5 letter guess');
        }
        else if (guesses.includes(guess)) {
            alert('Already guessed that, try a new 5 letter guess');
        }
        else {
            console.info({ guess });
            setGuesses([...guesses, guess]);
            setGuess('');
        }
    };
    const handleChange = (e) => {
        setGuess(e.target.value.toUpperCase());
    };
    return (
        <form id='guess-input-wrapper' onSubmit={handleSubmit}>
            <label htmlFor='guess-input'>Enter guess:</label>
            <input id='guess-input' type='text' value={guess} onChange={handleChange}/>
        </form>
    )
}

export default GuessInput;