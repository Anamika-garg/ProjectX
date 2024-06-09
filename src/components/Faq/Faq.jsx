import React, { useState , useRef } from 'react';
import './Faq.css'
import { FaqData } from '../../dummydata';
import FaqTemp from './FaqTemp';

const Faq = () => {
  
  return (
    <div id='faq'>
      <div className="Faq-Container">
        <div className="mainHeading">Faq</div>
        
        <div className="faq-div">
          {FaqData.map((e)=>{
            return(
            <FaqTemp ques ={e.ques} ans={e.ans} key={e.id}/>
          )
            })}
            
          
        </div>

        <div className="Join-Our-Alliance-Container" id='contact'>
          <div className="mainHeading">Join Our Alliance</div>
          <p>Join Our alliance! Together, we can revolutionize learning, making it more engaging ,<br></br> accessible, and tailored to individual needs. Let's make education a journey, not a chore</p>
          <button className="btn">Join Us</button>
        </div>
      </div>
    </div>
  )
}

export default Faq