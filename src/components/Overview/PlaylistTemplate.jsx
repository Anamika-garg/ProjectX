import React, { useRef } from 'react'
import VideoTemp from './VideoTemp';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const PlaylistTemplate = ({subject , data}) => {
 
  return (
    <>
    <div className="grid">
      <div className="subjectName">{subject}</div>
      
    <div className='video-grid'>
      
        {data.map((e)=>{
            return <VideoTemp chapName = {e.ChapName} image = {e.image} key={e.id}/>
        })}
        <div className="forward-arrow"><FontAwesomeIcon icon={faAngleRight} style={{color : "black"}}/></div>
        
    </div>
    </div>
    </>
  )
}

export default PlaylistTemplate