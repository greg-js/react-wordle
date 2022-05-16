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
    <div>
      <span className="digit mx-1">
        {`0${minutes}`.slice(-2)}
      </span>
      <span className="digit mx-1">
        {`0${seconds}`.slice(-2)}
      </span>
      <span className="digit mx-1">
        {`0${milliseconds}`.slice(-2)}
      </span>
    </div>
  )
}
