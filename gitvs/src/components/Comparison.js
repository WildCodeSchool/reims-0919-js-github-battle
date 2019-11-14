/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */

import React from 'react'
import './Profile1Phone.css'
import ButtonTheResultsAppears from './ButtonTheResultsAppears'
import Commit from './Commit'
import './progressBar.css'
import Follower from './Follower'
import PublicGists from './PublicGists'
import ResultOfFight from './ResultOfFight'

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
        <Follower
          firstUserFollowers={props.firstUserFollowers}
          secondUserFollowers={props.secondUserFollowers}
        />
        <PublicGists
          firstUserPublic_Gists={props.firstUserPublic_Gists}
          secondUserPublic_Gists={props.secondUserPublic_Gists}
        />
        <ResultOfFight
          firstUserRepos={props.firstUserRepos}
          secondUserRepos={props.secondUserRepos}
          firstUserFollowers={props.firstUserFollowers}
          secondUserFollowers={props.secondUserFollowers}
          firstUserPublic_Gists={props.firstUserPublic_Gists}
          secondUserPublic_Gists={props.secondUserPublic_Gists}
        />
      </div>
    </div>
    <button type="button" value="Masquer">Résults !</button>
  </div>
)


export default Comparison
