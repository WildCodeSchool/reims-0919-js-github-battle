/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */

import React from 'react'
import './Profile1Phone.css'
import ButtonTheResultsAppears from './ButtonTheResultsAppears'
import Commit from './Commit'
import './progressBar.css'
import Follower from './Follower'



const Comparison = (props) => (
  <div id="comparison">
    <h1>Results</h1>
    <div className="VS-phone">
      {/* <figure>
       
        <img className="avatar-result" src={props.firstAvatar_Url} alt="avatar user one" />
        
      </figure> */}
      {/* <h2>VS</h2>
      <figure>
        <img className="avatar-result" src={props.secondAvatar_Url} alt="avatar user two" />
        
      </figure> */}
      <p></p>
    
      <div className="boxProgressBar">
        
        <Commit  firstUserRepos={props.firstUserRepos} secondUserRepos={props.secondUserRepos} />
      </div> 
      
      
    </div>
    
  </div>
)



export default Comparison
