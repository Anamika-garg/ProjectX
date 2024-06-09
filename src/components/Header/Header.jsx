import React , {useRef , useState}  from 'react';
import './Header.css';
import logo from './logo.avif'


const Header = () => {
  
  
  return (
    <div id='header'>
    <div className='NavContainer'>
        <nav className="Header-nav">
            <ul>
                <div className="left">
                <li><a href="#home"><img src={logo} alt="" height={'auto'} width={40} /></a></li>
                <li className='hoverEffect active'><a href="#overview">Overview</a></li>
                <li className='hoverEffect'><a href="#features">Features</a></li>
                <li className='hoverEffect'><a href="#tools">Tools</a></li>
                <li className='hoverEffect'><a href="#faq">FAQs</a></li>
                </div>
                <div className="right">
                    <a href="#contact"><div className="btn">Contact Us</div></a>
                </div>
            </ul>
        </nav>
        
    </div>

    </div>
  )
}

export default Header