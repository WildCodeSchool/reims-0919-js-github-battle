/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import './getProfile.css'
import WeaponLogo from './WeaponLogo'


function GetProfile({
  username, avatar_url, public_repos, location, followers, public_gists, userLanguage,
}) {
  return (
    <div className="choiceCard1">
      <h1 className="githubNickname1">{username}</h1>
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
          {userLanguage}
        </p>
        <br />
        <WeaponLogo className='logo' userLanguage={userLanguage} />
      </section>
      <button type="button">
        <Link to={{
          pathname: '/chooseprofile2',
          state: {
            avatar_url,
            username,
            location,
            userLanguage,
            public_repos,
            public_gists,
            followers,
          },
        }}
        >
          Lock profile !
        </Link>
      </button>
    </div>
  )
}

export default GetProfile
