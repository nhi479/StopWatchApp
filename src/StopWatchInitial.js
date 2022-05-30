import React from 'react'
import CurrentTime from './CurrentTime'

const StopWatchInitial = ({ onStart }) => {
  return (
    <>
      <h2>Initial</h2>
      <CurrentTime time={0}/>
      <button onClick={onStart}>Start</button>
    </>
  )
}

export default StopWatchInitial