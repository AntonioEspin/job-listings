import React from 'react'
import '../assets/styles/components/Header.scss';
import ImageHeader from '../assets/images/bg-header-desktop.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={ImageHeader} alt="Imagen-header"/>
    </header>
  )
}
  

export default Header