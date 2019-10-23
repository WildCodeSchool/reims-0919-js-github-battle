import React from 'react';
import ButtonMask from './ButtonMask';
import './Profile1Phone.css';

const WelcomePage = () =>
    <div id='WelcomePage'>
        <h1>Welcome to Git Versus !</h1>
        <h3>Please enter your username</h3>
        <form>
            <p>
                <label htmlFor="pseudo"></label> 
                <input type="text" name="pseudo" id="pseudo" required />
                <button type="button" value="Mask" onClick={event => ButtonMask('WelcomePage', 'Profile1')} className="buttonPhone"> Ready </button>
            </p>
        </form>
    </div>

export default WelcomePage;