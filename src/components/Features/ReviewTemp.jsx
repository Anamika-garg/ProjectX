import React from 'react'

const ReviewTemp = ({review , name , aspirant , img}) => {
  return (
    <div>
    <div className="review-div">
      <p>{review}</p>
        <div className="line"></div>
      <div className="details">
        <div className="name-details">
        <div className="name text">{name}</div>
        <div className="aspirant text">{aspirant}</div>
        </div>
        <div className="pic"></div>
      </div>

  </div></div>
  )
}

export default ReviewTemp