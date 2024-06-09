import React, { useState , useRef } from 'react';
import './Faq.css'
import { FaqData } from '../../dummydata';
import FaqTemp from './FaqTemp';

const Faq = () => {
  const [visible, setVisible] = useState(false);
  const faqAns = useRef()
  const sign = useRef();
  function toggleShow() {
    if (visible) {
      faqAns.current.style.display = 'flex';
      sign.current.style.transform = 'rotate(45deg)'
      setVisible(!visible)
      }
      else {
        faqAns.current.style.display = 'none'
        sign.current.style.transform = 'rotate(0deg)'
      setVisible(!visible)
    }
  }
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