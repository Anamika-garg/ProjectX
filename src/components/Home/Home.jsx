import React ,{useRef , useState} from 'react';
import image from './home-img.avif'
import './Home.css';
import Header from '../Header/Header';
// export const afterSmallScreenNav = useRef();
const Home = () => {


  return (
    <div id='home'>
      <Header/>
      <div className="container">
        <div className="Home-text">
          <p className='upperCase'>Make Your JEE Preparation easy with</p>
          <h1 className='upperCase'>ProjectX</h1>
          <p>"Explore top JEE exam videos in one spot. No sign-ups or logins, just free, high-quality content for your JEE preparation journey. Start learning today!”</p>
          <div className="Start-Your-Journey-div upperCase">
          <p> Start Your Journey</p> <button className='btn upperCase'>Explore</button>
          </div>
        </div>
        <div className="Home-img">
          <img src={image} alt="" />
        </div>
        
        
        {/* After Small Screen , Show this */}
        {/* <div className="afterSmallScreenNav" >
          <nav className='navAfterSmallScreen'>
            <ul className='ulAfterSmallScreen'l>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#faq">FAQs</a></li>
              <a href="#contact">  <button className='btn contactbtn' >Contact Us</button></a>
            </ul>
          </nav>
        </div> */}
      </div>
    </div>
  )
}

export default Home