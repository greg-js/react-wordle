export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."
export const LAST_SUCCESSFUL_TIME_TEXT = 'Last time'
export const AVERAGE_SUCCESSFUL_TIME_TEXT = 'Average time'
export const PERSONAL_BEST_TEXT = 'Best time'
export const LOAD_IN_PROGRESS_GAME_TEXT = (solution: string) =>
  `You can't refresh this time-based game. The word was ${solution}. Loading new game..`
export const LOAD_FINISHED_GAME_TEXT = (solution: string) =>
  `You guessed the previous word (${solution}). Loading new game..`
export const START_NEW_GAME_WHILE_RUNNING_TEXT = (solution: string) => `You failed to guess '${solution}'. Updating stats and loading a new word..`
export const TOTAL_GUESSES_TEXT = 'Total guesses'
export const AVERAGE_GUESSES_TEXT = 'Guesses/winning game'
export const MOST_GUESSES_TEXT = 'Most guesses to win'
export const LEAST_GUESSES_TEXT = 'Least guesses to win'
export const TOTAL_TIME_PLAYED_TEXT = 'Total time in winning games'
export const GUESSES_PER_SECOND_TEXT = 'Guesses/second (for winning games)'
