import React, { useEffect, useState } from 'react'
import CurrentTime from './CurrentTime'

const StopWatchPaused = ({ onReset, onResume, laps, pausedTime }) => {
  const [pausedDuration, setPausedDuration] = useState(null)

  useEffect(() => {
    setPausedDuration(Date.now())
  }, [])

  return (
    <>
      <h2>Paused</h2>
      <CurrentTime time={pausedTime}/>
      <div>
        <button onClick={() => onResume(Date.now() - pausedDuration)}>Resume</button>
        <button onClick={onReset}>Reset</button>
      </div>
      {laps.map((lap) => (<CurrentTime time={lap} key={lap}/>))}
    </>
  )
}

export default StopWatchPaused