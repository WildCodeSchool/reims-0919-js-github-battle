import React from 'react'
import './getProfile.css'
import LogoUrlChanger from './LogoUrlChanger'

function GetProfile({name, avatar_url, public_repo, location, weapons}) {
    return (
        <div className='card'>
            <h1 className='githubNickname'>{name}</h1>
                <div className='avatarBox'>
                    <img className='avatar' src={avatar_url} alt='avatar'></img>
                </div>
            <section className='userinfo'>
                <p className='location'>
                    Location: {location} 
                <br />
                </p> 
                <p className='repo'>
                    Public Repositories: <br />
                    {public_repo}
                <br />
                </p>
                <p className='weapons'>
                    Favorite Weapons: {weapons}
                </p>
                <br />
                <LogoUrlChanger urlCheck={weapons}/>
            </section>
        </div>
    )
}

export default GetProfile