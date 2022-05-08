import React from 'react'
import '../Styles/Header.css';

function Header() {
  return (
    <div className='header-container'>
        <div className="profile-pic"></div>
        <div className="profile-name">Alejandra Perdomo</div>
        <div className="welcome">Bienvenido a mi Portafolio</div>
    </div>
  )
}

export default Header