import React from 'react'
import ChooseTheProfile2 from './ChooseTheProfile2'
import Comparison from './Comparison'
import WelcomePage from './WelcomePage'
import Profile1 from './Profile1'
import Profile2 from './Profile2'


function CompareTwoProfiles() {
  return (
    <div>
      <WelcomePage />
      <ChooseTheProfile2 />
      <div id="displayResultsDesktop">
        <Comparison />
        <Profile2 />
      </div>
    </div>
  )
}

export default CompareTwoProfiles
