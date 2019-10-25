/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */

import React from 'react'
import './Profile1Phone.css'
import ButtonTheResultsAppears from './ButtonTheResultsAppears'
import Commit from './components/Commit'
import './App.css';
import './progressBar.css'
import Follower from './components/Follower'
import ResultOfFight from './components/ResultOfFight'


const Comparison = () => (
  <div id="comparison">
    <div className="VS-phone">
      <figure>
        <img className="avatar-result" src="https://avatars2.githubusercontent.com/u/8034782?v=4" alt="avatar user one" />
        <h5>Aloxbro</h5>
      </figure>
      <h2>VS</h2>
      <figure>
        <img className="avatar-result" src="https://avatars3.githubusercontent.com/u/54673312?v=4" alt="avatar user two" />
        <h5>Maxime</h5>
      </figure>
    </div>
    <div>
      <div className='progressBarDiv' >
          <Commit />
          <Follower />
          <ResultOfFight />    
      </div>
    </div>
    <button type="button" value="Masquer" onClick={event => ButtonTheResultsAppears('results-phone')}>Résults !</button>
  </div>
)

export default Comparison
