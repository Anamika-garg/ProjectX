import React from 'react'
import './Blog.css'
import BlogTempl from './BlogTempl';

import clgImg from './college-predictor.avif'
const PredictorBlog = () => {
  return (
    <div id='predictor'>
      
          <BlogTempl title ={'College Predictor'} img={clgImg} text={`"Effortlessly find your dream engineering college with our secure, user-friendly JEE Rank College Predictor. No login required."
        Josaa, Csab and Other State Councelling Avaliable`}/>
        
        
    </div>
  )
}

export default PredictorBlog