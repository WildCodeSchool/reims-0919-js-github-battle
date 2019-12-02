/* eslint-disable camelcase */
import React from 'react'
import './getProfile.css'
import WeaponLogo from './WeaponLogo'

function DisplayChosenProfile2({
  secondUsername, secondAvatar_Url, public_repos, secondUserLocation, secondUserLanguage,
}) {
  return (
    <div className="card2">
      <div className="avatarBox">
        <img className="avatar" src={secondAvatar_Url} alt={secondUsername} />
      </div>
      
      
      <section className="userinfo2">
        <h1 className="githubNickname">{secondUsername}</h1>
        <p className="location">
                    Location:
          {' '}
          {secondUserLocation}
          <br />
        </p>
        {/* <p className="repo">
                    Public Repositories:
          {' '}
          <br />
          {public_repos}
          <br />
        </p> */}
        <p className="weapons">
                    Favorite Weapons:
          {' '}
          {secondUserLanguage}
        </p>
        <br />
        <WeaponLogo className='logo' userLanguage={secondUserLanguage} />
      </section>
    </div>
  )
}

export default DisplayChosenProfile2
