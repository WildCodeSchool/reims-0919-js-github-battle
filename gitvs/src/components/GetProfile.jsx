import React from 'react'
import './getProfile.css'
import WeaponLogo from './WeaponLogo'

function GetProfile({
  name, avatarUrl, publicRepo, location, weapons,
}) {
  return (
    <div className="card">
      <h1 className="githubNickname">{name}</h1>
      <div className="avatarBox">
        <img className="avatar" src={avatarUrl} alt={name} />
      </div>
      <section className="userinfo">
        <p className="location">
                    Location:
          {' '}
          {location}
          <br />
        </p>
        <p className="repo">
                    Public Repositories:
          {' '}
          <br />
          {publicRepo}
          <br />
        </p>
        <p className="weapons">
                    Favorite Weapons:
          {' '}
          {weapons}
        </p>
        <br />
        <WeaponLogo urlCheck={weapons} />
      </section>
    </div>
  )
}

export default GetProfile
