import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import './progressBar.css'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})


function LinearDeterminate(props) {
  const classes = useStyles()
  const [completed, setCompleted] = React.useState(0)

  const follower1 = props.firstUserFollowers
  const follower2 = props.secondUserFollowers
  const followertotal = (follower1 + follower2)
  const followerPercent = (follower1 / followertotal) * 100
  const followerDecimal = Math.round(followerPercent * 1) / 1
  const followerSecondUser = Math.round((100 - followerPercent) * 1) / 1


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

    const timer = setInterval(progress, 100)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={classes.root}>
      <div className="percentWithBar">
        <p className="firstUserResult">
          {followerDecimal}%
        </p>
        <LinearProgress id="progressBar" variant="determinate" value={completed} />
        <p className="secondUserResult">
          {followerSecondUser}%
        </p>
        <br />
      </div>
    </div>
  )
}

export default LinearDeterminate
