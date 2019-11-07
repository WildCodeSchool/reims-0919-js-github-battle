import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import {followerDecimal} from "./Follower";
import {followerSecondUser} from "./Follower";
import {percentDecimal} from "./Commit";
import {percentSecondUser} from "./Commit";

const resultUser1= (percentDecimal + followerDecimal )/2
const resultUser2= (percentSecondUser + followerSecondUser)/2

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
          return Math.min(oldCompleted + diff, resultUser1);
        });
      }
  
      const timer = setInterval(progress, 100);
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className={classes.root}>
        <div>
          <div className='commitBar'>
              <p className='firstUserResult'>{resultUser1}%</p>
              <p>/</p>
              <p className='secondUserResult'>{resultUser2}%</p>
          </div>
        <LinearProgress className= 'commitBarResult' id='progressBar' variant="determinate" value={completed} />
        </div>
        <br />
       
      
      </div>
    );
  }

  export default LinearDeterminate