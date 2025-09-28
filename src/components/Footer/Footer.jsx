import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube.svg'
import facebook_icon from '../../assets/facebook.svg'
import github_icon from '../../assets/github.svg'
import X_icon from '../../assets/x.svg'

// vid on 1:10:40
 const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={X_icon} alt="" />
        <img src={github_icon} alt="" />

      </div>
      <ul>
        <li>Help Center</li>
        <li>Terms of use </li>
        <li>Privacy</li>
        <li>Cookies Preferences</li>
        <li>Legal Notices</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'> © 1997-2025 Fakeflix, inc</p>
    </div>
  )
}

export default Footer