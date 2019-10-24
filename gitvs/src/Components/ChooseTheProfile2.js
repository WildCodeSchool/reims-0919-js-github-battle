import React from 'react';
import ButtonMask from './ButtonMask';
import './Profile1Phone.css';
import './ProfilesDesktop.css';

const ChooseTheProfile2 = () =>
    <div id='ChooseTheProfile2'>
        <h3>Please enter an another username</h3>
        <form>
                <label htmlFor="pseudo"></label> 
                <div className='form'>
                    <input type="text" name="pseudo" id="pseudo" required />
                    <button type="button" value="Mask" onClick={event => ButtonMask('ChooseTheProfile2', 'Profile2')} className="buttonPhone"> Ready </button>
                    <button type="button" value="Mask" onClick={event => ButtonMask('ChooseTheProfile2', 'Profile2')} className="buttonDesktop"> Ready </button>
                </div>
        </form>
    </div>

export default ChooseTheProfile2;