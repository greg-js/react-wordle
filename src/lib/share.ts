import { getGuessStatuses } from './statuses'
import { unicodeSplit } from './words'
import { GAME_TITLE } from '../constants/strings'
import { UAParser } from 'ua-parser-js'
import { textTimeDisplay } from '../components/timer/TimeDisplay'

const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()

export const shareStatus = (
  solution: string,
  guesses: string[],
  isHardMode: boolean,
  isDarkMode: boolean,
  isHighContrastMode: boolean,
  handleShareToClipboard: () => void,
  time: number,
  isGameWon: boolean
) => {
  const textToShare =
    `I just played ${GAME_TITLE}${isHardMode ? ' (hard mode)' : ''} and ${isGameWon ? 'guessed' : 'failed to guess'} the word in ${textTimeDisplay({ time })}, using ${guesses.length} guesses\n\n` +
    generateEmojiGrid(
      solution,
      guesses,
      getEmojiTiles(isDarkMode, isHighContrastMode)
    ) + `\n\nTry it out at https://main.d1imbzohz0om1w.amplifyapp.com/`


  const shareData = { text: textToShare }

  let shareSuccess = false

  try {
    if (attemptShare(shareData)) {
      navigator.share(shareData)
      shareSuccess = true
    }
  } catch (error) {
    shareSuccess = false
  }

  if (!shareSuccess) {
    navigator.clipboard.writeText(textToShare)
    handleShareToClipboard()
  }
}

export const generateEmojiGrid = (
  solution: string,
  guesses: string[],
  tiles: string[]
) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(solution, guess)
      const splitGuess = unicodeSplit(guess)

      return splitGuess
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return tiles[0]
            case 'present':
              return tiles[1]
            default:
              return tiles[2]
          }
        })
        .join('')
    })
    .join('\n')
}

const attemptShare = (shareData: object) => {
  return (
    // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
    browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
    webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
    navigator.canShare &&
    navigator.canShare(shareData) &&
    navigator.share
  )
}

const getEmojiTiles = (isDarkMode: boolean, isHighContrastMode: boolean) => {
  let tiles: string[] = []
  tiles.push(isHighContrastMode ? '🟧' : '🟩')
  tiles.push(isHighContrastMode ? '🟦' : '🟨')
  tiles.push(isDarkMode ? '⬛' : '⬜')
  return tiles
}
