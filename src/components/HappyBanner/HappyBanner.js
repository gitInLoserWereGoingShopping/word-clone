import React from 'react';

function HappyBanner({ numOfGuesses }) {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congrats!</strong> Got it in
        <strong>{` ${numOfGuesses} guesses`}</strong>
      </p>
    </div>
  );
}

export default HappyBanner;
