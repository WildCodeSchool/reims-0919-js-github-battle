import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'


const follower1 = 5026
const follower2 = 349
const followertotal = (follower1 + follower2)
const followerPercent = (follower1 / followertotal) * 100
export const followerDecimal = Math.round(followerPercent * 1) / 1
export const followerSecondUser = Math.round((100 - followerPercent) * 1) / 1


const useStyles = makeStyles({
  root: {
    flexGrow: 1,

  },
})

function LinearDeterminate() {
  const classes = useStyles()
  const [completed, setCompleted] = React.useState(0)

  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldCompleted + diff, followerDecimal)
      })
    }

    const timer = setInterval(progress, 1400)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={classes.root}>
      <div>
        <div className="commitBar">
          <p className="firstUserResult">
            {followerDecimal}
%
          </p>
          <p>/</p>
          <p className="secondUserResult">
            {followerSecondUser}
%
          </p>
        </div>
        <LinearProgress id="progressBar" variant="determinate" value={completed} />
      </div>
      <br />


    </div>
  )
}

export default LinearDeterminate
