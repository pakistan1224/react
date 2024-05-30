import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={theme_pattern} alt="" />
               <h1>Izaz Khattak</h1>
                <p>I'm Full Stack Web Developer from Pakistan worked on so many projects and technologies like PHP,Laravel,Ajax,Bootstrap,Tailwind and many more!!!</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Izaz Khattak. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer