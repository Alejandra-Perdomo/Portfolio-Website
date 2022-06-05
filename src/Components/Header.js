import React from 'react'
import '../Styles/Header.css';

function Header({mobile}) {
  return (
    <div className={mobile? 'header-container-mobile': 'header-container'}>
        <div className={mobile? "profile-pic-mobile": "profile-pic"}></div>
        <div className={mobile? "profile-name-mobile": "profile-name"}>Alejandra Perdomo</div>
        <div className={mobile? "welcome-mobile":"welcome"}>Bienvenid@ a mi Portafolio</div>
        <div className='banner-shaded-bottom'></div>
    </div>
  )
}

export default Header