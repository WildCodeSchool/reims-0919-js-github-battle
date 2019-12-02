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
  const commit1 = props.firstUserRepos
  const commit2 = props.secondUserRepos
  const commitotal = (commit1 + commit2)
  const commitPercent = (commit1 / commitotal) * 100
  const percentDecimal = Math.round(commitPercent * 1) / 1
  const percentSecondUser = Math.round((100 - commitPercent) * 1) / 1

  const follower1 = props.firstUserFollowers
  const follower2 = props.secondUserFollowers
  const followertotal = (follower1 + follower2)
  const followerPercent = (follower1 / followertotal) * 100
  const followerDecimal = Math.round(followerPercent * 1) / 1
  const followerSecondUser = Math.round((100 - followerPercent) * 1) / 1

  const publicGists1 = props.firstUserPublic_Gists
  const publicGists2 = props.secondUserPublic_Gists
  const publicGistsTotal = (publicGists1 + publicGists2)
  const publicGistsPercent = (publicGists1 / publicGistsTotal) * 100
  const publicGistsDecimal = Math.round(publicGistsPercent * 1) / 1
  const publicGistsSecondUser = Math.round((100 - publicGistsPercent) * 1) / 1

  const resultUser1 = Math.round(((percentDecimal + followerDecimal + publicGistsDecimal) / 3) / 1)
  const resultUser2 = Math.round(((percentSecondUser + followerSecondUser + publicGistsSecondUser) / 3) / 1 )
  const classes = useStyles()
  const [completed, setCompleted] = React.useState(0)

  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldCompleted + diff, resultUser1)
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
      {resultUser1}%
      </p>
      <LinearProgress id="progressBar" variant="determinate" value={completed} />
      <p className="secondUserResult">
      {resultUser2}%
      </p>
      <br />
    </div>

  </div>
//     <div className={classes.root}>
//       <div>
//         <div className="commitBar">
//           <p className="firstUserResult">
//             {resultUser1}
// %
//           </p>
//           <p>/</p>
//           <p className="secondUserResult">
//             {resultUser2}
// %
//           </p>
//         </div>
//         <LinearProgress className="commitBarResult" id="progressBar" variant="determinate" value={completed} />
//       </div>
//       <br />


//     </div>
  )
}

export default LinearDeterminate
