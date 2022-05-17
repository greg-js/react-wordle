import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  PlayIcon
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
  setTime
}: Props) => {
  return (
    <div className="mb-4">
      <div className="navbar-content relative px-5">
        <div className="flex">
          <InformationCircleIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <PlayIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
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
    </div>
  )
}
