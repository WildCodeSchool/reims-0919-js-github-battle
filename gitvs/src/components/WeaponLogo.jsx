import React from 'react'
import './WeaponLogo.css'

function WeaponLogo({ userLanguage }) {
  return (
    <figure className="logobox">
      <img src={`${userLanguage}.png`} alt="langage logo" className="logo" />
    </figure>
  )
}


export default WeaponLogo
