import React from 'react';
import Commit from './components/Commit'
import './App.css';
import './progressBar.css'
import Follower from './components/Follower'
import ResultOfFight from './components/ResultOfFight'


/* eslint-disable import/extensions */
import GetProfile from './components/GetProfile.jsx'

function App() {
  return (
    <div className="App">
        {/* <div className='progressBarDiv' >
          
          <Commit />
          <Follower />
          <ResultOfFight /> */}
          
        {/* </div> */}
      <GetProfile
        name="Alox"
        avatarUrl="https://avatars3.githubusercontent.com/u/8034782?s=460&v=4"
        publicRepo="6"
        location="Reims"
        weapons="JavaScript"
      />
    </div>
  )
}

export default App
