import React from 'react';
import './Tools.css';
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
                    <button>Read More</button>
                </div>
                <div className="tools">
                    <div className="img lap"></div>
                    <div className="title">Laptop Adviser</div>
                    <button>Read More</button>
                </div>
                <div className="tools">
                    <div className="img projx"></div>
                    <div className="title">Project X</div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools