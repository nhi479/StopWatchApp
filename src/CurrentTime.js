import React from 'react'

const CurrentTime = ({time}) => { 
  const hh = String(Math.floor(time / 1000 / 60 / 60)).padStart(2, "0");
  const mm = String(Math.floor(time / 1000 / 60) % 60).padStart(2, "0");
  const ss = String(Math.floor(time / 1000) % 60).padStart(2, "0");
  const ms = String(time % 1000).padStart(3, "0");

  return (
    <code>
      <span>{hh}</span>:<span>{mm}</span>:<span>{ss}</span>:<span>{ms}</span>
    </code>
  )
}

export default CurrentTime