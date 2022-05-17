type Props = {
  time: number
}

export const TimeDisplay = ({
  time
}: Props) => {
  const minutes = Math.floor((time / 60000) % 60)
  const seconds = Math.floor((time / 1000) % 60)
  const milliseconds = Math.floor((time / 10) % 100)

  return (
    <div className="digit text-4xl flex items-center justify-center">
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
    </div>
  )
}
