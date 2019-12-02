/* eslint-disable react/destructuring-assignment */
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

  const commit1 = props.firstUserRepos
  const commit2 = props.secondUserRepos
  const commitotal = (commit1 + commit2)
  const commitPercent = (commit1 / commitotal) * 100
  const percentDecimal = Math.round(commitPercent * 1) / 1
  const percentSecondUser = Math.round((100 - commitPercent) * 1) / 1

  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 10) {
          return 10
        }
        const diff = Math.random() * 10
        return Math.min(oldCompleted + diff, percentDecimal)
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
          {percentDecimal}%
        </p>
        <LinearProgress id="progressBar" variant="determinate" value={completed} />
        <p className="secondUserResult">
          {percentSecondUser}%
        </p>
        <br />
      </div>
    </div>
  )
}

export default LinearDeterminate
