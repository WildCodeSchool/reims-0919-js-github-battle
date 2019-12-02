/* eslint-disable react/destructuring-assignment */

import React from 'react'
import { Link } from 'react-router-dom'
import Comparison from './Comparison'
import DisplayChosenProfile1 from './DisplayChosenProfile1'
import DisplayChosenProfile2 from './DisplayChosenProfile2'
import './comparisonOfTwoProfiles.css'


function ComparisonOfTwoProfiles(props) {
  return (
    <div>
      <div id="chosenProfile1-comparison-chosenProfile2">
        <div className="twoCardsWithVersus">
          <div className="cardsOfUser">
            <DisplayChosenProfile1
              firstAvatar_Url={props.location.state.firstAvatar_Url}
              firstUsername={props.location.state.firstUsername}
              firstUserLocation={props.location.state.firstUserLocation}
              firstUserLanguage={props.location.state.firstUserLanguage}
            />
          
            <DisplayChosenProfile2
              secondAvatar_Url={props.location.state.secondAvatar_Url}
              secondUsername={props.location.state.secondUsername}
              secondUserLocation={props.location.state.secondUserLocation}
              secondUserLanguage={props.location.state.secondUserLanguage}
            />
          </div>
          <img className="versus" src="https://zupimages.net/up/19/46/njiz.png" alt="" />
        </div>
        <div className="barOfresults">
          <Comparison
            firstAvatar_Url={props.location.state.firstAvatar_Url}
            secondAvatar_Url={props.location.state.secondAvatar_Url}
            firstUserRepos={props.location.state.firstUserRepos}
            secondUserRepos={props.location.state.secondUserRepos}
            firstUserFollowers={props.location.state.firstUserFollowers}
            secondUserFollowers={props.location.state.secondUserFollowers}
            firstUserPublic_Gists={props.location.state.firstUserPublic_Gists}
            secondUserPublic_Gists={props.location.state.secondUserPublic_Gists}
          />
        </div>
      </div>
      <button type="button"><Link to="/home">New Fight</Link></button>
    </div>
  )
}

export default ComparisonOfTwoProfiles
