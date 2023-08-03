import React from 'react'
import './HomepageViews.css'
import tView from '../../assets/logos/timeline-view.jpeg'
import bView from '../../assets/logos/board-view.jpeg'
import lView from '../../assets/logos/list-view.jpeg'

const HomepageViews = () => {
  return (
    <div className='home-view'>
      <div className="home-view-top">
        <p className='home-view-top-efficiency' >DRIVE EFFICIENCY ACROSS TEAMS</p>
        <p className='home-view-top-manage' >Manage complex work easily</p>
        <p className='home-view-top-connect' >Connect what needs to get done, who's doing it, and by when.</p>
      </div>
      <div className="home-view-bottom">
        <div className="list-view views">
          <div className="left-view">
            <img src={lView} alt="" />
          </div>
          <div className="right-view">
              <p className='p1'>List view</p>
              <p className='p2'>Organize and assign tasks. With lists, teams see immediately what they need to do, which tasks are a priority, and when work is due.</p>
              <p className='p3'>Get Started <i className="fa-solid fa-arrow-right" onClick={()=>{}}></i></p>
          </div>
        </div>
        <div className="timeline-view views">
          <div className="left-view">
            <img src={tView} alt="" />
          </div>
          <div className="right-view">
              <p className='p1'>Timeline</p>
              <p className='p2'>See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks—and create plans your team can count on.</p>
              <p className='p3'>Get Started <i className="fa-solid fa-arrow-right" onClick={()=>{}}></i></p>
          </div>
        </div>
        <div className="boards-view views">
          <div className="left-view">
            <img src={bView} alt="" />
          </div>
          <div className="right-view">
            <p className='p1'>Boards</p>
            <p className='p2'>Make it easy for your team to focus on tasks currently at hand. Define each stage of work to see what’s important and where things are getting stuck.</p>
            <p className='p3'>Get Started <i className="fa-solid fa-arrow-right" onClick={()=>{}}></i></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageViews
