import { useEffect, useState } from 'react'
import { Tooltip } from 'react-tippy'
import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  PlayIcon,
  StopIcon
} from '@heroicons/react/outline'
import { Timer } from '../timer/Timer'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
  isGameBegun: boolean
  isGameWon: boolean
  isGameLost: boolean
  isRevealing: boolean
  time: number
  setTime: (value: number) => void
  loadNewGame: () => void
  endGame: () => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
  isGameBegun,
  isGameWon,
  isGameLost,
  isRevealing,
  time,
  setTime,
  loadNewGame,
  endGame
}: Props) => {
  const [shouldShowPrompt, setShouldShowPrompt] = useState(true)

  useEffect(() => {
    if (!isGameBegun) {
      setShouldShowPrompt(true)
    } else setShouldShowPrompt(false)
  }, [isGameBegun, setShouldShowPrompt])

  return (
    <div className="mb-16">
      <div className="navbar-content relative px-5">
        <div className="flex">
          <InformationCircleIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          {!isGameBegun || isGameWon || isGameLost ? (
            <Tooltip
              html={(<span className="px-2 py-1 bg-indigo-600 text-white rounded-full ml-2">Load a new word</span>)}
              position="right"
            >
              <PlayIcon
                className="h-6 w-6 cursor-pointer dark:stroke-white"
                onClick={() => loadNewGame()}
              />
            </Tooltip>
          ) : (
            <Tooltip
              html={(<span className="px-2 py-1 bg-indigo-600 text-white rounded-full ml-2">Give up</span>)}
              position="right"
            >
              <StopIcon
                className="h-6 w-6 cursor-pointer dark:stroke-white"
                onClick={() => endGame()}
              />
            </Tooltip>
          )}
        </div>
        <div className="timer-wrapper text-center">
          <Timer
            isGameWon={isGameWon}
            isGameLost={isGameLost}
            isGameBegun={isGameBegun}
            isRevealing={isRevealing}
            time={time}
            setTime={setTime}
          />
        </div>
        <div className="flex">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
      {shouldShowPrompt ? (
        <div className="w-full relative">
          <p className="w-full absolute type-prompt text-center bg-green-400 p-2">
            Start typing to play
          </p>
        </div>
      ) : null}
    </div>
  )
}
