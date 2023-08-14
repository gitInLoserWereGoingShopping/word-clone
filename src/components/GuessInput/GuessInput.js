import React from 'react';

function GuessInput({ guesses, setGuesses }) {
    const [guess, setGuess] = React.useState('');
    const handleSubmit = (e) => { 
        e.preventDefault();
        if (guess.length !== 5) {
            alert('Please provide a 5 letter guess 💖');
        }
        else if (guesses.includes(guess)) {
            alert('Already guessed that, try a new 5 letter guess 😺');
        }
        else {
            console.info({ guess });
            setGuesses([...guesses, guess]);
            setGuess('');
        }
    };
    const handleChange = (e) => {
        const nextGuess = e.target.value.toUpperCase();
        const lastCharEntered = nextGuess[nextGuess.length - 1];
        if (nextGuess.length === 0) {
            setGuess('');
        } else if (lastCharEntered.match(/[A-Z]/)) {
            setGuess(nextGuess);
        }
    };
    return (
        <form id='guess-input-wrapper' onSubmit={handleSubmit}>
            <label htmlFor='guess-input'>Enter guess:</label>
            <input
                id='guess-input'
                type='text'
                title='Please provide a 5 letter guess 💖'
                required
                pattern='[A-Za-z]{5}'
                minLength={5}
                maxLength={5}
                value={guess}
                onChange={handleChange}
            />
        </form>
    )
}

export default GuessInput;