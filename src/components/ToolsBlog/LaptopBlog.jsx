import BlogTempl from './BlogTempl';
import React from 'react'

import lapImg from './Laptop-Adviser.avif'


const LaptopBlog = () => {
  return (
    <div id='adviser'>
       <BlogTempl title ={'Laptop Adviser'} img={lapImg} text={`At GTC, We're Not Just A Website – We're A Community Built By Passionate Individuals Who Love Learning And Want To See You Succeed. Our Team Comes From Diverse Backgrounds, But We All Share A Common Goal: To Empower Students And Aspirants By Providing The Best Possible Resources And Support. Think Of Us As Your Personal Cheerleaders And Knowledge Bank. We've Poured Our Expertise Into Crafting Clear, Concise, And Engaging Content That Tackles Complex Topics. We're Always Here To Answer Your Questions And Guide You On Your Academic Journey. So, Who Are The Masterminds Behind GTC? You'll Meet Them Throughout The Site, Sharing Their Insights And Expertise. But For Now, Know That We're A Dedicated Team Rooting For You Every Step Of The Way!`}/>
    </div>
  )
}

export default LaptopBlog