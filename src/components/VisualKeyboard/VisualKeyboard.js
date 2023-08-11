import React from "react";

function VisualKeyboard({ letterStatuses }) {
  //QWERTY keyboard layout
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const QWERTY = [row1, row2, row3];
  return (
    <div className='keyboard'>
      {QWERTY.map((row, rowId) => (
        <div key={`keyboard-row-${rowId}`} className='keyboard row'>
          {row.map(letter => (
            <span
              key={`keyboard-${letter}`}
              className={`cell ${letterStatuses[letter]}`}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
};

export default VisualKeyboard;
