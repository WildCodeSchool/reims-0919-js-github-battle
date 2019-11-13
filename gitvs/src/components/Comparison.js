/* eslint-disable react/destructuring-assignment */
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
    <div className="VS-phone">
      <figure>

        <img className="avatar-result" src={props.firstAvatar_Url} alt="avatar user one" />

      </figure>
      <h2>VS</h2>
      <figure>
        <img className="avatar-result" src={props.secondAvatar_Url} alt="avatar user two" />

      </figure>
    </div>
    <div className="boxProgressBar">
      <div>
        <Commit firstUserRepos={props.firstUserRepos} secondUserRepos={props.secondUserRepos} />
      </div>
    </div>
    <button type="button" value="Masquer">Résults !</button>
  </div>
)


export default Comparison
