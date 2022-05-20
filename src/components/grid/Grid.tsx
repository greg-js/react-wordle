import { MAX_CHALLENGES, MAX_VISIBLE_LINES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  solution: string
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  isPeeking?: boolean
  currentRowClassName: string
  isHardMode: boolean
}

export const Grid = ({
  solution,
  guesses,
  currentGuess,
  isRevealing,
  isPeeking,
  currentRowClassName,
  isHardMode
}: Props) => {
  const visibleLines = isHardMode ? MAX_VISIBLE_LINES - 1 : MAX_VISIBLE_LINES

  const empties: string[] = Array.from(Array(Math.max(0, visibleLines - guesses.length - 1)))

  return (
    <>
      {guesses.slice(-visibleLines).map((guess, i, arr) => (
        <CompletedRow
          key={i}
          solution={solution}
          guess={guess}
          isRevealing={isRevealing && arr.length - 1 === i}
          isPeeking={isPeeking && arr.length - 1 === i}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuess} className={currentRowClassName} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </>
  )
}
