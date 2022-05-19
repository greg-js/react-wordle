import { useState, useEffect } from 'react'
import { TimeDisplay } from './TimeDisplay'
import './Timer.css'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  isGameBegun: boolean
  isGameWon: boolean
  isGameLost: boolean
  isRevealing: boolean
  time: number
  setTime: (value: number) => void
}

export const Timer = ({
  isGameBegun,
  isGameWon,
  isGameLost,
  isRevealing,
  time,
  setTime
}: Props) => {
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(true)

  const startTimer = () => {
    setIsRunning(true)
    setIsPaused(false)
  }

  useEffect(() => {
    let interval: any = null
    const isGameOver = isGameWon || isGameLost;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime(time + 10)
      }, 10)
    } else clearInterval(interval)

    if (isGameBegun) {
      if (!isGameOver && !isRunning) {
        startTimer()
      }

      if (isRevealing || (isGameOver && isRunning)) {
        setIsPaused(true)
        setIsRunning(false)
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [setTime, time, isRunning, isPaused, isGameBegun, isGameWon, isGameLost, setIsPaused, isRevealing])

  return isGameBegun ? (
    <div className="timer px-2 bg-white">
      <TimeDisplay time={time} />
    </div>
  ) : (
    <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
  )
}
