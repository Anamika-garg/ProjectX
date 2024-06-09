import React, { useRef , useState } from 'react'

const FaqTemp = ({ ques, ans }) => {
  const ansRef = useRef();
  const signRef = useRef();
  const [visible, setVisible] = useState(true)
  function toggerVisibility(){
    
    if(visible){
      ansRef.current.style.display = 'flex';
      signRef.current.style.transform = 'rotate(45deg)'
      setVisible(!visible)
      }
      else{
        ansRef.current.style.display = 'none';
        signRef.current.style.transform = 'rotate(0deg)'
        setVisible(!visible)
    }
  }
  return (
    <>
    <div className="faq" onClick={toggerVisibility}>
      <div className="sign" ref={signRef} onClick={toggerVisibility}></div>
      <div className="faq-text-div">
        <h3 className='ques'>{ques}</h3>
        <p className='ans' ref={ansRef}>{ans}</p>
      </div>
    </div>
    </>
  )
}

export default FaqTemp;