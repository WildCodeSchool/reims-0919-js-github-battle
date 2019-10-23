import React from 'react'
import './logoUrlChanger.css'

function LogoUrlChanger({urlCheck}){
    let urlAffect = ''
    switch (urlCheck) {
    case 'JavaScript':
        urlAffect = 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png'
        break;
    case 'NodeJS':
        urlAffect = 'https://seeklogo.com/images/N/nodejs-logo-065257DE24-seeklogo.com.png'
        break;
    case 'Php':
        urlAffect = 'https://seeklogo.com/images/P/php-logo-ADE513E748-seeklogo.com.png'
        break;
    case 'Java':
        urlAffect = 'https://seeklogo.com/images/J/java-logo-7833D1D21A-seeklogo.com.png'
        break;
    case 'CSS':
        urlAffect = 'https://seeklogo.com/images/C/css-3-logo-AF06D75231-seeklogo.com.png'
        break;
    case 'HTML':
        urlAffect = 'https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png'
        break;
    case 'Python':
        urlAffect = 'https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png'
        break;
    default:
        urlAffect = 'https://seeklogo.com/images/W/wrong-way-sign-logo-74101E1446-seeklogo.com.gif'
}
    return(                
    <figure className='logobox'>
    <img src={urlAffect} alt='langage logo' className='logo'>
        </img>
    </figure>)
}


export default LogoUrlChanger