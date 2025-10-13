import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id="footer">
        <div className='footer-content'>
            <div className='footer-content-left'>
              <img src={assets.logo} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias modi eos et eum fugiat doloribus, corporis consequuntur eaque magnam animi voluptas omnis assumenda itaque porro maiores, nesciunt aspernatur laborum.</p>
               <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.linkedin_icon} alt="linkedin"/>
               </div>
            </div>
            <div className='footer-content-right'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li> Deleviry</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-center">
                 <h1>GET IN TOUCH</h1>
                 <ul>
                    <li>+91 9834567367</li>
                    <li>tomato@gmail.com</li>
                 </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'> Copyright 2025 © Tomato.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer