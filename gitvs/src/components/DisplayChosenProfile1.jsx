/* eslint-disable camelcase */
import React from 'react'
import './getProfile.css'
import WeaponLogo from './WeaponLogo'

function DisplayChosenProfile1({
  firstUsername, firstAvatar_Url, public_repos, firstUserLocation, firstUserLanguage,
}) {
  return (
    <div className="card">
      <h1 className="githubNickname">{firstUsername}</h1>
      <div className="avatarBox">
        <img className="avatar" src={firstAvatar_Url} alt={firstUsername} />
      </div>
      <section className="userinfo">
        <p className="location">
                    Location:
          {' '}
          {firstUserLocation}
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
          {firstUserLanguage}
        </p>
        <br />
        <WeaponLogo userLanguage={firstUserLanguage} />
      </section>
    </div>
  )
}

export default DisplayChosenProfile1
