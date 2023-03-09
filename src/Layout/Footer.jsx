import React from 'react';
import footerLogo from '../assets/logo.svg';
import '../styles/Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
          <img src={footerLogo} alt="logo" />
      </div>
      <div className='footer__text'>© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer;