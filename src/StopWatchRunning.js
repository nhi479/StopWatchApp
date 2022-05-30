import React, {useEffect, useState} from 'react'
import CurrentTime from './CurrentTime'

const StopWatchRunning = ({ onPause, onLap, laps, startTime, pausedDuration }) => {
  const time = useNow() - startTime - pausedDuration;

  return (
    <>
      <h2>Running</h2>
      <CurrentTime time={time}/>
      <div>
        <button onClick={() => onPause(time)}>Pause</button>
        <button onClick={() => onLap(time)}>Lap</button>
      </div>
      {laps.map((lap) => (<CurrentTime time={lap} key={lap}/>))}
    </>
  )
}

const useNow = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    let id;

    const repaint = () => {
      setNow(Date.now());
      id = requestAnimationFrame(repaint);
    }
  
    repaint();

    return () => {
      cancelAnimationFrame(id)
    }
  })

  return now;
}

export default StopWatchRunning