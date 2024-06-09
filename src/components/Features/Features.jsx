import React from 'react';
import'./Features.css'
import Template from './Template';
import ReviewTemp from './ReviewTemp';
import { ReviewData } from '../../dummydata';

const Features = () => {
  return (
    <div id='features'>
        <div className="Feature-container">
            <div className="main-text-features">
            <h1 className="mainHeading">Features</h1>
            {/* <div className='subHeading'>Unlocking Potential: Explore the Power of Integrated Tools and Resources</div>  */}
            <p>Unlocking Potential: <br></br> Explore the Power of Integrated Tools and Resources. </p>
            </div>

            <div className="cards-div">
             <Template headingText={"Privacy First"} pText={"No personal Info required to use our services"} icon = {''}/>
             <Template headingText={"AI Integrated"} pText={"Experience the power of AI integration, enhancing your learning journey"} icon = {''}/>
             <Template headingText={"Easily Accessable"} pText={"Hands-on learning with practical experiments on your device."} icon = {''}/>
             <Template headingText={"Time Management"} pText={"Master your schedule with our time management tools."} icon = {''}/>
             <Template headingText={"Our Support"} pText={"Streamline operations with seamless command line interface compatibility."} icon = {''}/>
             <Template headingText={"Experiments"} pText={"Explore, learn, and grow with hands-on experiments on your own device in our Experiments section."} icon = {''}/>

            </div>

            <div className="attractive-Ui-div">
              <div className="img-div"></div>
              <div className="text-div">
                <h1>Attractive UI</h1>
                <div className="subPara">
                  <h3>Smooth Performance</h3>
                  <p>Experience Seamless Learning with our optimised platform.</p>
                </div>
                <div className="subPara">
                  <h3>Selective Videos</h3>
                  <p>Handpicked Videos for focused and effective Preparation.</p>
                </div>
                <div className="subPara">
                  <h3>Short Notes</h3>
                  <p>Concise notes for quick revision and easy recall.</p>
                </div>
              </div>
            </div>

            <div className="ProjectX-Facts-div">
              <div className="project-facts-sub-div">
                <div className='heading'>The Project X Facts</div>
                <div className="facts-div">
                  <div className="facts">
                    <h1>50%</h1>
                    <h3>More faster than others</h3>
                  </div>
                  <div className="facts">
                    <h1>12x</h1>
                    <h3>Faster ramp-up</h3>
                  </div>
                  <div className="facts">
                    <h1>3x</h1>
                    <h3>More output</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="the-Voices-of-Success-Container">
              <div className="mainHeading">Voices Of Success</div>
              <p>Discover what our users say about the transformative impact of our tool.</p>

              <div className="reviews-container">
              {
                ReviewData.map((e)=>{
                  return  <ReviewTemp review = {e.review} name = {e.name} key ={e.id} img={e.img} aspirant={e.Aspirant}/>
                })
              }


              </div>
             
            </div>

        </div>
    </div>
  )
}

export default Features