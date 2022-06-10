import React, { useMemo, useState } from 'react'
import StopWatchInitial from './StopWatchInitial';
import StopWatchRunning from './StopWatchRunning';
import StopWatchPaused from './StopWatchPaused';

const LAPS_MAX_LENGTH = 10;

const getStopWatchStatus = (started, isPausing) => {
  if (!started) {
    return 'initial';
  } else if (started && !isPausing) {
    return 'running';
  } else if (started && isPausing) {
    return 'paused';
  }
}

const StopWatch = () => {
  const [started, setStarted] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [pausedTime, setPausedTime] = useState(null);
  const [pausedDuration, setPausedDuration] = useState(0);
  const [laps, setLaps] = useState([]);

  const onStart = () => {
    setStarted(true);
    setStartTime(Date.now());
  }

  const onPause = (time) => {
    setIsPausing(true);
    setPausedTime(time);
  }
  
  const onReset = () => {
    setIsPausing(false);
    setStarted(false);
    setStartTime(null);
    setPausedDuration(0)
    setPausedTime(null);
    setLaps([]);
  }
  
  const onResume = (time) => {
    setIsPausing(false);
    setPausedDuration(stoppedDuration => stoppedDuration + time);
  }

  const onLap = (time) => {
    setLaps(laps => {
      if (laps.length < LAPS_MAX_LENGTH) {
        return [...laps, time];
      } else {
        const newLaps = [...laps, time];
        newLaps.shift();
        return newLaps;
      }
    })
  }

  const stopWatchStatus = useMemo(() => getStopWatchStatus(started, isPausing), [started, isPausing])

  return (
    <>
      {stopWatchStatus === 'initial' && (
        <StopWatchInitial onStart={onStart}/>
      )}
      {stopWatchStatus === 'running' && (
        <StopWatchRunning onPause={onPause} onLap={onLap} laps={laps} startTime={startTime} pausedDuration={pausedDuration}/>
      )}
      {stopWatchStatus === 'paused' && (
        <StopWatchPaused onReset={onReset} onResume={onResume} laps={laps} pausedTime={pausedTime}/>
      )}
    </>
  )
}

export default StopWatch