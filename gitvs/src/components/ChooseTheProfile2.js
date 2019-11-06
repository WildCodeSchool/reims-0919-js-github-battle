/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'
import ButtonMask from './ButtonMask'
import './Profile1Phone.css'
import './ProfilesDesktop.css'

const ChooseTheProfile2 = () => (
  <div>
    <h3>Please enter an another username</h3>
    <form>
      <label htmlFor="pseudo" />
      <div className="form">
        <input type="text" name="pseudo" id="pseudo" required />
        <button type="button" value="Mask" onClick={event => ButtonMask('ChooseTheProfile2', 'Profile2')} className="buttonPhone"> Ready </button>
        <button type="button" value="Mask" onClick={event => ButtonMask('ChooseTheProfile2', 'Profile2')} className="buttonDesktop"> Ready </button>
      </div>
    </form>
  </div>

)

export default ChooseTheProfile2
