import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa'

const Footer = () => {
  {
    var today = new Date();
    var year = today.getFullYear();
  }
  return (
    <div className="tastebite_footer">
      <div className="tastebite_footer_top">
      <div className="tastebite_footer_left">
        <img src={logo} alt="logo" />
        <p>On the other hand,we denounce with righteous indigation and dislike men who  <br />
          are so beguiled and demoralized by the charms of pleasur of moment</p>
      </div>
      <div className="tastebite_footer_right">
       <h3>Tastebite</h3>
        <p>Home</p>
        <p>Recipes</p>
        <p>About</p>
        <p>Contact</p>
        </div>
        </div>
        <div className="tastebite_footer_bottom">
          <p>©{year} Tastebite. All Rights Reserved.</p>
          <div className="icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestP />
          </div>
          </div>
    </div>
  )
}

export default Footer