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
  const publicGists1 = props.firstUserPublic_Gists
  const publicGists2 = props.secondUserPublic_Gists
  const publicGistsTotal = (publicGists1 + publicGists2)
  const publicGistsPercent = (publicGists1 / publicGistsTotal) * 100
  const publicGistsDecimal = Math.round(publicGistsPercent * 1) / 1
  const publicGistsSecondUser = Math.round((100 - publicGistsPercent) * 1) / 1


  const classes = useStyles()
  const [completed, setCompleted] = React.useState(0)

  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldCompleted + diff, publicGistsDecimal)
      })
    }

    const timer = setInterval(progress, 100)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={classes.root}>
      <div>
        <div className="commitBar">
          <p className="firstUserResult">
            {publicGistsDecimal}
%
          </p>
          <p>/</p>
          <p className="secondUserResult">
            {publicGistsSecondUser}
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
