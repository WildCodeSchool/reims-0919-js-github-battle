import React from 'react';
import './Profile1Phone.css';
import './ProfilesDesktop.css';
import ButtonMask from './ButtonMask';


const Profile1 = () => 
    <div id="Profile1">
        <h5 className="pseudo">{'Maxime-Thibaud'}</h5>
        <img className="avatar" src={"https://avatars3.githubusercontent.com/u/54673312?v=4"} alt={'profile Github'}/>
            <div className="userInfo">
                <p>Public repos: 9</p>
                <p>Public gist: 11</p>
                <p>Location: Reims</p>
                <button type="button" value="Mask" onClick={event => ButtonMask('Profile1', 'Profile2')} className="buttonPhone"> Ready </button>
            </div>
    </div>

export default Profile1;