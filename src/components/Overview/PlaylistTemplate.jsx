import React from 'react'
import VideoTemp from './VideoTemp';
import './Overview.css';

const PlaylistTemplate = ({subject , data}) => {
 
  return (
    <>
    <div className="grid">
      <div className="subjectName">{subject}</div>
      
    <div className='video-grid'>
      
        {data.map((e)=>{
            return <VideoTemp chapName = {e.ChapName} image = {e.image}/>
        })}
        
    </div>
    </div>
    </>
  )
}

export default PlaylistTemplate