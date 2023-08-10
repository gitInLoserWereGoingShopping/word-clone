import React from 'react';

function SadBanner({answer}) {
  return (
    <div className='sad banner'>
      <p>Almost! The correct answer is:
      <strong>{` ${answer}`}</strong>.</p>
    </div>
  );
}

export default SadBanner;
