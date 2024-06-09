import React from 'react';
import './Tools.css';
import { Link } from 'react-router-dom';
const Tools = () => {
  return (
    <div id='tools'>
        <div className="Tools-container">
            <div className="mainHeading">Some Useful Tools</div>
            <p>Empowering Efficiency : Streamlining Tasks with Innovative Solutions</p>
            <div className="Tools-div">
                <div className="tools">
                    <div className="img clg"></div>
                    <div className="title">College Predictor</div>
                    <Link to="/predictor"><button> Read More </button></Link>
                </div>
                <div className="tools">
                    <div className="img lap"></div>
                    <div className="title">Laptop Adviser</div>
                    <Link to="/adviser"><button> Read More </button></Link>
                </div>
                <div className="tools">
                    <div className="img projx"></div>
                    <div className="title">Project X</div>
                    <Link to="/projectx"><button> Read More </button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools