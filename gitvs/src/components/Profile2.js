/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable import/extensions */

import React from 'react'
import './Profile1Phone.css'
import './ProfilesDesktop.css'
import ButtonMask from './ButtonMask'
import ButtonAppearResults from './ButtonAppearResults'
import GetProfile from './GetProfile'


const Profile2 = () => (
  <div id="Profile2">
    <GetProfile
      name="Maxime"
      avatarUrl="https://avatars3.githubusercontent.com/u/54673312?v=4"
      publicRepo="4"
      location="Reims"
      weapons="Java"
    />
    <button type="button" value="Masquer" onClick={event => ButtonMask('Profile2', 'comparison')} className="buttonPhone"> Ready </button>
    <button className="buttonReadyDesktop" type="button" value="Mask" onClick={event => ButtonAppearResults('Profile1', 'comparison')}>Ready</button>
  </div>
)

export default Profile2
