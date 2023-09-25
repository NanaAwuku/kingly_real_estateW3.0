import React from 'react';

function Spinner() {
  return (
    <div
      className="inline-block h-8 w-8 animate-spinner-grow-0.75s-linear-infinite rounded-full bg-current align-minus-0.125em opacity-0 motion-reduce:animate-spinner-grow-1.5s-linear-infinite"
      role="status"
    >
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip:rect(0,0,0,0)"
      >
        Loading...
      </span>
    </div>
  );
}

export default Spinner;
