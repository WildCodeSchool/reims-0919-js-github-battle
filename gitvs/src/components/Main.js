import { Switch, Route } from 'react-router-dom'
import React from 'react'
import WelcomePage from './WelcomePage'
import ChooseTheProfile2 from './ChooseTheProfile2'
import ComparisonOfTwoProfiles from './ComparisonOfTwoProfiles'

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/chooseprofile2" component={ChooseTheProfile2} />
      <Route path="/comparison" component={ComparisonOfTwoProfiles} />
      <Route path="/home" component={WelcomePage} />
    </Switch>
  )
}

export default Main
