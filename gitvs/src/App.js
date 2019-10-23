import React from 'react';
import './App.css';
import GetProfile from './components/GetProfile';

function App() {
  return (
    <div className="App">
      <GetProfile name='Alox' 
      avatar_url='https://avatars3.githubusercontent.com/u/8034782?s=460&v=4' 
      public_repo='6' 
      location='Reims'
      weapons='JavaScript'/>
    </div>
  );
}

export default App;
