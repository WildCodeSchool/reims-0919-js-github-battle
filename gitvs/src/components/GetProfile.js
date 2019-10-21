import React from 'react'

function GetProfile({name, avatar_url, public_repo, location}) {
    return (
        <div>
            <h1 className='githubNickname'>{name}</h1>
            <img className='avatarLogo' src={avatar_url} alt='avatar'></img>
            <p className='userInfo'>
            {location}
            {public_repo}
            </p>
        </div>
    )
}

export default GetProfile