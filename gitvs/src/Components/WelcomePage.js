import React from 'react';
import ButtonMask from './ButtonMask';
import ButtonMaskWelcomePageDesktop from './ButtonMaskWelcomePageDesktop';
import './Profile1Phone.css';
import './ProfilesDesktop.css';

const WelcomePage = () =>
    <div id='WelcomePage'>
        <h1>Welcome to Git Versus !</h1>
        <h3>Please enter your username</h3>
        <form>
                <label htmlFor="pseudo"></label> 
                <div className='form'>
                    <input type="text" name="pseudo" id="pseudo" required />
                    <button type="button" value="Mask" onClick={event => ButtonMask('WelcomePage', 'Profile1')} className="buttonPhone"> Ready </button>
                    <button type="button" value="Mask" onClick={event => ButtonMask('WelcomePage', 'Profile1')} className="buttonDesktop"> Ready </button>
                </div>
        </form>
    </div>

export default WelcomePage;