/* eslint-disable camelcase */
import React from 'react'
import './getProfile.css'
import WeaponLogo from './WeaponLogo'

function DisplayChosenProfile2({
  secondUsername, secondAvatar_Url, public_repos, secondUserLocation, secondUserLanguage,
}) {
  return (
    <div className="card">
      <h1 className="githubNickname">{secondUsername}</h1>
      <div className="avatarBox">
        <img className="avatar" src={secondAvatar_Url} alt={secondUsername} />
      </div>
      <section className="userinfo">
        <p className="location">
                    Location:
          {' '}
          {secondUserLocation}
          <br />
        </p>
        <p className="repo">
                    Public Repositories:
          {' '}
          <br />
          {public_repos}
          <br />
        </p>
        <p className="weapons">
                    Favorite Weapons:
          {' '}
          {secondUserLanguage}
        </p>
        <br />
        <WeaponLogo userLanguage={secondUserLanguage} />
      </section>
    </div>
  )
}

export default DisplayChosenProfile2
