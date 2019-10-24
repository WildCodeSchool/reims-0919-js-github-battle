import React from 'react'
import ChooseTheProfile2 from './ChooseTheProfile2'
import Comparison from './Comparison'
import WelcomePage from './WelcomePage'
import GetProfile from './GetProfile'

function CompareTwoProfiles() {
  return (
    <div>
      <WelcomePage />
      <div id="displayResultsDesktop">
        <GetProfile
          name="Maxime-Thibaud"
          avatarUrl="https://avatars3.githubusercontent.com/u/54673312?v=4"
          publicRepo="4"
          location="Reims"
          weapons="JavaScript"
        />
        <ChooseTheProfile2 />
        <Comparison />
        <GetProfile
          name="Alox"
          avatarUrl="https://avatars3.githubusercontent.com/u/8034782?s=460&v=4"
          publicRepo="6"
          location="Reims"
          weapons="JavaScript"
        />
      </div>
    </div>
  )
}

export default CompareTwoProfiles
