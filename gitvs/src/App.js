import React from 'react';
import Commit from './components/Commit'
import './App.css';
import './progressBar.css'
import Follower from './components/Follower'
import ResultOfFight from './components/ResultOfFight'



function App() {
  return (
    <div className="App">
        <div className='progressBarDiv' >
          
          <Commit />
          <Follower />
          <ResultOfFight />
          
        </div>
    </div>
  );
}

export default App;
