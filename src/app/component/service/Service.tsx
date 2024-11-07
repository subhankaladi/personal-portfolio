'use client'


import React from 'react'
import './Service.css'

const Service = () => {
  return (
    
<div className='service-page'>
  <h1 className='h1-service-page'>OUR <span>PROJECTS</span></h1>
  <div className="cntenr">
  <div className="panel">
    <div className="ring">
      <div className="card card1"></div>
      <div className="border">
        <p className="title"></p>
        <div className="slide">
          <h6 className="para">This is my 1st project Birthday Celebration App</h6>
          <a href='https://project-3-hbd-celebration.vercel.app' className="btn" target='_blank'>Click to View</a> 
        </div>
      </div>
    </div>
  </div>

  <div className="panel">
    <div className="ring">
      <div className="card card2"></div>
      <div className="border">
        <div className="slide">
          <h6 className="para">This is my 2nd project Random Joke Game App</h6>
          <a target='_blank' href='https://project-7-random-joke-app.vercel.app/' className="btn">Click to View</a> 
        </div>
      </div>
    </div>
  </div>

  <div className="panel">
    <div className="ring">
      <div className="card card3"> </div>
      <div className="border">
        <div className="slide">
          <h6 className="para">This is my 3rd Project IOS Calculator App</h6>
          <a target='_blank' href='https://project-5-calculator-app.vercel.app/' className="btn">Click to View</a> 
        </div>
      </div>
    </div>
  </div>
</div>

</div>

    
  )
}

export default Service