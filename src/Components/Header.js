import React from 'react'
import '../Styles/Header.css';

function Header() {
  return (
    <div className='header-container'>
        <div className="profile-pic"></div>
        <div className="profile-name">Alejandra Perdomo</div>
        <div className="welcome">Bienvenid@ a mi Portafolio</div>
        <div className='banner-shaded-bottom'></div>
    </div>
  )
}

export default Header