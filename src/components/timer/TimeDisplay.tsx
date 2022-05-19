type TextProps = {
  time: number
}

export const textTimeDisplay = ({ time }: TextProps) => `${`0${Math.floor((time / 60000) % 60)}`.slice(-2)}:${`0${Math.floor((time / 1000) % 60)}`.slice(-2)}.${`0${Math.floor((time / 10) % 100)}`.slice(-2)}`

type Props = {
  time: number
  isStatDisplay?: boolean
}

export const TimeDisplay = ({
  time,
  isStatDisplay = false,
}: Props) => {
  const minutes = Math.floor((time / 60000) % 60)
  const seconds = Math.floor((time / 1000) % 60)
  const milliseconds = Math.floor((time / 10) % 100)

  const normalClasses = 'digit text-4xl flex items-center justify-center font-bold'
  const statsDisplayClasses = 'digit--small text-2xl flex items-center justify-center font-bold'

  return (
    <div className={isStatDisplay ? statsDisplayClasses : normalClasses}>
      {time === 0 ? (
        <span>None</span>
      ) : (
        <>
          <span>
            {`0${minutes}`.slice(-2)}
          </span>
          <span>
            :
          </span>
          <span>
            {`0${seconds}`.slice(-2)}
          </span>
          <span>
            .
          </span>
          <span>
            {`0${milliseconds}`.slice(-2)}
          </span>
        </>
      )}
    </div>
  )
}
