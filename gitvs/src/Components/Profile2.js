/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */

import React from 'react'
import './Profile1Phone.css'
import ButtonMask from './ButtonMask'
import ButtonAppearResults from './ButtonAppearResults'


const Profile2 = () => (
  <div id="Profile2">
    <h5 className="pseudo">Aloxbro</h5>
    <img className="avatar" src="https://avatars2.githubusercontent.com/u/8034782?v=4" alt="avatar user two" />
    <div className="userInfo">
      <p>Public repos: 7</p>
      <p>Public gist: 16</p>
      <p>Location: Reims</p>
      <button type="button" value="Masquer" onClick={event => ButtonMask('Profile2', 'comparison')} className="buttonPhone"> Ready </button>
      <button className="buttonReadyDesktop" type="button" value="Mask" onClick={event => ButtonAppearResults('Profile1', 'comparison')}>Ready</button>
    </div>
  </div>
)

export default Profile2
