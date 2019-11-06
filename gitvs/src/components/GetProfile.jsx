/* eslint-disable camelcase */
import React from 'react'
import './getProfile.css'
import WeaponLogo from './WeaponLogo'

function GetProfile({
  username, avatar_url, public_repos, location, weapons,
}) {
  return (
    <div className="card">
      <h1 className="githubNickname">{username}</h1>
      <div className="avatarBox">
        <img className="avatar" src={avatar_url} alt={username} />
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
          {public_repos}
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
      <button>Go !</button>
    </div>
  )
}

export default GetProfile
