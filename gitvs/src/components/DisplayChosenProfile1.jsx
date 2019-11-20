/* eslint-disable camelcase */
import React from 'react'
import './getProfile.css'
import WeaponLogo from './WeaponLogo'

function DisplayChosenProfile1({
  firstUsername, firstAvatar_Url, public_repos, firstUserLocation, firstUserLanguage,
}) {
  return (
    <div className="card1">
      
      
      <section className="userinfo1">
      <h1 className="githubNickname">{firstUsername}</h1>
        <h2 className="location">
                    Location:
          {' '}
          {firstUserLocation}
          <br />
        </h2>
        {/* <p className="repo">
                    Public Repositories:
          {' '}
          <br />
          {public_repos}
          <br />
        </p> */}
        <h3 className="weapons">
                    Favorite Weapons:
          {' '}
          {firstUserLanguage}
        </h3>
        <br />
        <WeaponLogo className='logo' userLanguage={firstUserLanguage} />
      </section>
      <div className="avatarBox">
        <img className="avatar" src={firstAvatar_Url} alt={firstUsername} />
      </div>
    </div>
  )
}

export default DisplayChosenProfile1
