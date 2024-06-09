import React from 'react'

const Template = ({headingText , pText , icon}) => {
  return (
    <>
        <div className="card">
                <div className="heading-area">
                  <div className="icon"></div>
                  <div className="text"><h2>{headingText}</h2></div>
                </div>
                <div className="text-area">
                  <p>{pText}</p>
                </div>
              </div>
    </>
  )
}

export default Template