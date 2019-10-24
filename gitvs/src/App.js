/* eslint-disable import/extensions */
import React from 'react'
import './App.css'
import GetProfile from './components/GetProfile.jsx'

function App() {
  return (
    <div className="App">
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
