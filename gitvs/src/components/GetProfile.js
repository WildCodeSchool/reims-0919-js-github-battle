import React from 'react'
import './getProfile.css'

function GetProfile({name, avatar_url, public_repo, location}) {
    return (
        <div className='card'>
            <h1 className='githubNickname'>{name}</h1>
                <div className='avatarBox'>
                    <img className='avatar' src={avatar_url} alt='avatar'></img>
                </div>
            <p className='location'>
                Location: {location} 
            <br />
            </p> 
                <p className='repo'>
            Public Repositories: {public_repo}
            <br />
            </p>
        </div>
    )
}

export default GetProfile