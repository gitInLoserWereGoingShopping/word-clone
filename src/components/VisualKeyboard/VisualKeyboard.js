import React from "react";

function VisualKeyboard({ letterStatuses, handleLetterSelect }) {
  //QWERTY keyboard layout
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⬅'];
  const QWERTY = [row1, row2, row3];
  return (
    <div className='keyboard'>
      {QWERTY.map((row, rowId) => (
        <div key={`keyboard-row-${rowId}`} className='keyboard row'>
          {row.map(letter => (
            <button
              key={`keyboard-${letter}`}
              className={`cell ${letterStatuses[letter]}`}
              onClick={() => handleLetterSelect(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
};

export default VisualKeyboard;
