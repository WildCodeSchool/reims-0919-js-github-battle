/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import './getProfile.css'
import WeaponLogo from './WeaponLogo'

function GetProfile2({
  username, avatar_url, public_repos, location, userLanguage, followers, public_gists,
  firstAvatar_Url, firstUsername, firstUserLocation, firstUserLanguage,
  firstUserRepos, firstUserFollowers, firstUserPublic_Gists,
}) {
  return (
    <div className="choiceCard2">
      <h1 className="githubNickname2">{username}</h1>
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
          pathname: '/comparison',
          state: {
            firstAvatar_Url,
            firstUsername,
            firstUserLocation,
            firstUserLanguage,
            firstUserRepos,
            firstUserPublic_Gists,
            firstUserFollowers,
            secondAvatar_Url: avatar_url,
            secondUsername: username,
            secondUserLocation: location,
            secondUserLanguage: userLanguage,
            secondUserRepos: public_repos,
            secondUserPublic_Gists: public_gists,
            secondUserFollowers: followers,
          },
        }}
        >
         Lock profile !
        </Link>
      </button>
    </div>
  )
}

export default GetProfile2
