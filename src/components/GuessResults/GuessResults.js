import React from "react";
// import NUM_OF_GUESSES_ALLOWED from '../../constants';

function GuessResults({ guesses }) {
  // return (
  //   <div className='guess-results'>
  //     {range(NUM_OF_GUESSES_ALLOWED).map(index => (
  //       <p key={`guess-${index}`} className='guess'>
  //         {Array.from(guesses[index]).map(letter => (
  //           <span className='cell'>{letter}</span>
  //         ))}
  //         {/* 2 arrays
  //           1st arr: from 0 to guesses.length
  //             render row of letters from each guess
  //           2nd arr: from guesses.length to end of num of guesses allowed
  //             render empty row
  //         */}
  //       </p>
  //     ))}
  //   </div>
  // );
  return (
    <div className='guess-results'>
      {guesses.map((guess, idx) => (
        <p key={`guess-${idx}`} className='guess'>
          {Array.from(guess).map(letter => (
            <span className='cell'>{letter}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
