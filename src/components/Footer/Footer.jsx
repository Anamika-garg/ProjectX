import React from 'react'
import './Footer.css';
import logo from './logo.avif'
const Footer = () => {
  return (
    <div id='footer'>
        <footer className="footer-container">
            <div className="left-items">
                <img src={logo} alt="" />
            </div>               
            <div className="right-items">
                <ul className='footerList'>
                    <li className='dots'>Overview</li>
                    <li className='dots'>Features</li>
                    <li className='dots'>References</li>
                    <li>Faq</li>
                </ul>
            </div>               
            
        </footer>
    </div>
  )
}

export default Footer