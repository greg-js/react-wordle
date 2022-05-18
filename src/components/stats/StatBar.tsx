import { TimeDisplay } from '../timer/TimeDisplay'
import { GameStats } from '../../lib/localStorage'
import {
  TOTAL_TRIES_TEXT,
  SUCCESS_RATE_TEXT,
  CURRENT_STREAK_TEXT,
  BEST_STREAK_TEXT,
  LAST_SUCCESSFUL_TIME_TEXT,
  PERSONAL_BEST_TEXT,
  TOTAL_GUESSES_TEXT,
  AVERAGE_GUESSES_TEXT,
  MOST_GUESSES_TEXT,
  LEAST_GUESSES_TEXT,
  AVERAGE_SUCCESSFUL_TIME_TEXT
} from '../../constants/strings'

type Props = {
  gameStats: GameStats
}

const StatItem = ({
  label,
  value,
  isTimeStat = false
}: {
  label: string
  value: string | number
  isTimeStat?: boolean
}) => {
  return isTimeStat ? (
    <div className="items-center justify-evenly m-1 w-50pc dark:text-white">
      <div>{label}</div>
      <TimeDisplay time={Number(value)} isStatDisplay />
    </div>
  ) : (
    <div className="items-center justify-center m-1 w-50pc dark:text-white">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}

export const StatBar = ({ gameStats }: Props) => {
  const gamesWon = gameStats.totalGames - gameStats.gamesFailed
  const totalGuesses = gameStats.guessCounts.reduce((prev, cur) => (prev + cur), 0)
  const guessesPerSuccessfulGame = totalGuesses ? totalGuesses / gamesWon : 'N/A'
  const mostGuesses = totalGuesses ? Math.max(...gameStats.guessCounts) : 'N/A'
  const leastGuesses = totalGuesses ? Math.min(...gameStats.guessCounts.filter(guess => guess !== 0)) : 'N/A'
  const successfulTimeHistory = gameStats.timeHistory.filter(time => time !== 0)
  const averageTime = gamesWon > 0 ? Math.floor(successfulTimeHistory.reduce((prev, cur) => (prev + cur), 0) / gamesWon) : 0

  return (
    <div>
      <div className="flex justify-evenly my-2">
        <StatItem label={LAST_SUCCESSFUL_TIME_TEXT} value={gameStats.lastSuccessfulTime} isTimeStat />
        <StatItem label={AVERAGE_SUCCESSFUL_TIME_TEXT} value={averageTime} isTimeStat />
        <StatItem label={PERSONAL_BEST_TEXT} value={gameStats.personalBest} isTimeStat />
      </div>
      <div className="flex justify-center my-2">
        <StatItem label={TOTAL_TRIES_TEXT} value={gameStats.totalGames} />
        <StatItem label={SUCCESS_RATE_TEXT} value={`${gameStats.successRate}%`} />
        <StatItem label={CURRENT_STREAK_TEXT} value={gameStats.currentStreak} />
        <StatItem label={BEST_STREAK_TEXT} value={gameStats.bestStreak} />
      </div>
      <div className="flex justify-center my-2">
        <StatItem label={TOTAL_GUESSES_TEXT} value={totalGuesses} />
        <StatItem label={AVERAGE_GUESSES_TEXT} value={guessesPerSuccessfulGame} />
        <StatItem label={MOST_GUESSES_TEXT} value={mostGuesses} />
        <StatItem label={LEAST_GUESSES_TEXT} value={leastGuesses} />
      </div>
    </div>
  )
}
