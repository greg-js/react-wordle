import { useState, useEffect } from 'react'
import { TimeDisplay } from './TimeDisplay'
import './Timer.css'

type Props = {
  isGameBegun: boolean
  isGameWon: boolean
}

export const Timer = ({
  isGameBegun,
  isGameWon
}: Props) => {
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [time, setTime] = useState(0)
  
  const startTimer = () => {
    setIsRunning(true)
    setIsPaused(false)
  }

  useEffect(() => {
    let interval: any = null

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime(time => time + 10)
      }, 10)
    } else clearInterval(interval)

    if (isGameBegun) {
      if (!isGameWon && !isRunning) {
        startTimer()
      }

      if (isGameWon && isRunning) {
        setIsPaused(!isPaused)
        setIsRunning(false)
      }
    }


    return () => {
      clearInterval(interval)
    }
  }, [isRunning, isPaused, isGameBegun, isGameWon, setIsPaused])

  return (
    <div className="timer fixed rounded mx-5 bg-white">
      <TimeDisplay time={time} />
    </div>
  )
}
