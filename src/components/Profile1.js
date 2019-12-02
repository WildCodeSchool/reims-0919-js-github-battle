/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable import/extensions */

import React from 'react'
import './Profile1Phone.css'
import './ProfilesDesktop.css'
import ButtonMask from './ButtonMask'
import GetProfile from './GetProfile'

const Profile1 = () => (
  <div id="Profile1">
    <GetProfile
      name="Alox"
      avatarUrl="https://avatars3.githubusercontent.com/u/8034782?s=460&v=4"
      publicRepo="6"
      location="Reims"
      weapons="JavaScript"
    />
    <button className="buttonPhone" type="button" value="Mask" onClick={event => ButtonMask('Profile1', 'ChooseTheProfile2')}> Ready </button>
    <button className="buttonReadyDesktop" type="button" value="Mask" onClick={event => ButtonMask('Profile1', 'ChooseTheProfile2')}>Ready</button>
  </div>
)

export default Profile1
