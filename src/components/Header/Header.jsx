import React , {useRef , useState}  from 'react';
import './Header.css';
import logo from './logo.avif'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { afterSmallScreenNav } from '../Home/Home';

const Header = () => {
  
  // const [toggleMenu, setToggleMenu] = useState(false);
  // function showAfterSmallScreen() {
  //   afterSmallScreenNav.current.style.right = '0px';

  //   if (toggleMenu) {
  //     afterSmallScreenNav.current.style.right = '0px';
      
  //     showMenuref.current.style.transition =  'right 0.5s ease';
  //   }
  //   else {
  //     showMenuref.current.style.display = 'none';
  //     showMenuref.current.style.right = '-100%'
  //   }
  //   setToggleMenu(!toggleMenu);
  // }

  return (
    <div id='header'>
    <div className='NavContainer'>
        <nav className="Header-nav">
            <ul>
                <div className="left">
                <li><a href="#home"><img src={logo} alt="" height={'auto'} width={40} /></a></li>
                <li className='hoverEffect'><a href="#overview">Overview</a></li>
                <li className='hoverEffect'><a href="#features">Features</a></li>
                <li className='hoverEffect'><a href="#tools">Tools</a></li>
                <li className='hoverEffect'><a href="#faq">FAQs</a></li>
                </div>
                <div className="right">
                    <a href="#contact"><div className="btn">Contact Us</div></a>
                </div>
            </ul>
        </nav>
        {/* <div className="hamburger-div"><FontAwesomeIcon className="hamburger" icon={faBars}/></div> */}
    </div>

    </div>
  )
}

export default Header