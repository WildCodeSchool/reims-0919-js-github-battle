import React from 'react';
import './Profile1Phone.css';
import ButtonMask from './ButtonMask';

const Profile2 = () => 
    <div id="Profile2">
        <h5 className="pseudo">{'Aloxbro'}</h5>
        <img className="avatar" src={"https://avatars2.githubusercontent.com/u/8034782?v=4"}/>
            <div className="userInfo">
                <p>Public repos: 7</p>
                <p>Public gist: 16</p>
                <p>Location: Reims</p>
                <button type="button" value="Masquer" onClick={event => ButtonMask('Profile2', 'comparison')} className="buttonPhone"> Ready </button>
            </div>
    </div>

export default Profile2;