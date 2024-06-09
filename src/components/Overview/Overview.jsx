import React from 'react';
import './Overview.css';
import PlaylistTemplate from './PlaylistTemplate';
import { PhysicsData } from '../../dummydata';
import { ChemData } from '../../dummydata';
import { MathsData } from '../../dummydata';
// import { CiSearch } from "react-icons/ci";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass , faHouse , faGear , faUser } from '@fortawesome/free-solid-svg-icons'


const Overview = () => {
  return (
    <div id='overview'>
        <div className="Overview-Container">
            <h1 className='mainHeading'>Personalized Experience</h1>
            <p>Dive into our Personalized Playlists, Dynamically curated to evolve with your <br/> taste for a unique , tailored musical journey. </p>
            <div className="Playlist-div">
                <div className="sidebar">
                    <div className="div1"> <div className='icons'> <FontAwesomeIcon className='fontAwesomeIcon' icon={faMagnifyingGlass} /></div> 
                    <div className='icons'> <FontAwesomeIcon className='fontAwesomeIcon' icon={faHouse} /></div> 
                    </div>
                    <div className="div2"> <div className='icons'> <FontAwesomeIcon className='fontAwesomeIcon' icon={faGear} /></div> 
                    <div className='icons'> <FontAwesomeIcon className='fontAwesomeIcon' icon={faUser} /></div> 
                    </div>
                </div>
                <div className="main-playlist-content">
                    <h1>Playlists</h1>
                    <input type="text" placeholder='Search >' />
                    <div className="Playlist-grid">
                        <PlaylistTemplate subject = {"Physics"} data ={PhysicsData}/>
                        <PlaylistTemplate subject = {"Chemistry"} data ={ChemData}/>
                        <PlaylistTemplate subject = {"Maths"} data ={MathsData}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview