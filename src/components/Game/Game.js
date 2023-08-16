import React from 'react';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import VisualKeyboard from '../VisualKeyboard/VisualKeyboard';
import NewAndImprovedGuessInputHopefully from '../NewAndImprovedGuessInputHopefully/NewAndImprovedGuessInputHopefully';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS, initialLetterStatuses } from '../../data';

// Pick a random word on every pageload.
let answer = sample(WORDS);
const newAnswer = () => {
  answer = sample(WORDS);
};
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

//initialize letter statuses for visual keyboard
const letterStatuses = initialLetterStatuses;
const refreshLetterStatuses = () => {
  Object.keys(letterStatuses).forEach(letter => {
    letterStatuses[letter] = 'incorrect';
  });
};

function Game() {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  //list of guesses here
  const [guesses, setGuesses] = React.useState([]);
  const numOfGuessesRemaining = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const maxGuessesReached = numOfGuessesRemaining === 0;
  const isAnswered = guesses.includes(answer);
  const isGuessInputEnabled = !(isAnswered || maxGuessesReached);
  console.log({numOfGuessesRemaining, maxGuessesReached});
  const newGame = () => {
    refreshLetterStatuses();
    newAnswer();
    console.info({ answer });
    setGuesses([]);
  };
  const handleLetterSelect = (letter) => {
    let nextTentativeGuess = tentativeGuess;
    if (tentativeGuess.length < 5) {
      nextTentativeGuess = tentativeGuess + letter;
    }
    if (letter === '⬅') {
      nextTentativeGuess = tentativeGuess.slice(0, tentativeGuess.length - 1);
    }
    setTentativeGuess(nextTentativeGuess);
  };
  const handleSubmit = () => {
    if (tentativeGuess.length !== 5) {
        alert('Please provide a 5 letter guess 💖');
    }
    else if (guesses.includes(tentativeGuess)) {
        alert('Already guessed that, try a new 5 letter guess 😺');
    }
    else {
        console.info({ tentativeGuess });
        setGuesses([...guesses, tentativeGuess]);
        setTentativeGuess('');
    }
  };
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} letterStatuses={letterStatuses}/>
      {(isAnswered || maxGuessesReached) ? <button className='loss new-game' onClick={newGame}>New Game</button> : null}
      {isGuessInputEnabled ? <NewAndImprovedGuessInputHopefully tentativeGuess={tentativeGuess} handleSubmit={handleSubmit}/> : null}
      {isAnswered ? <HappyBanner numOfGuesses={guesses.length}/> : null}
      {(maxGuessesReached && !isAnswered) ? <SadBanner answer={answer}/> : null}
      <VisualKeyboard letterStatuses={letterStatuses} handleLetterSelect={handleLetterSelect}/>
    </>
  );
}

export default Game;
