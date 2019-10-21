import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
const commit1= 1200
const commit2= 12

const commitotal= (commit1 + commit2)
const commitPercent= (commit1/commitotal) * 100
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

 function LinearDeterminate() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, commitPercent);
      });
    }

    const timer = setInterval(progress, 250);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress id='progressBar' variant="determinate" value={completed} />
      <br />
     
    
    </div>
  );
}
console.log(commitPercent + '%')
export default LinearDeterminate