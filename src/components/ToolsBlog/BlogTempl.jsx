import React from 'react'

import logo from './logo.avif';
import Footer from '../Footer/Footer';

const BlogTempl = ({heading , img , text}) => {
  return (
    <div>
        <div className="blogContainer">
        <nav className="blogNav">
          <ul className="blogUi">
            <li><a href="#overview"><img src={logo} alt="" /></a></li>
            {console.log({img})}
            <a href="#contact"><button className='btn'>Contact us</button></a>
          </ul>
        </nav>
        <main className='mainBlog'>
        <div className="BlogHeading">{heading}</div>
        <div className="blogImg-div">
          <img src={img} alt="" />
        </div>
        <div className="blogPara">{text}</div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default BlogTempl