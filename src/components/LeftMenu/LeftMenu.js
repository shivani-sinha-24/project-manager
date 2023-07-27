import React, { useState } from 'react'
import './LeftMenu.css'
import Insights from '../Insights/Insights'
import Starred from '../Starred/Starred'
import Projects from '../Projects/Projects'
import Team from '../Team/Team'

const LeftMenu = ({ setShowLeftMenu,projects}) => {

  const [showInsights,setShowInsights] = useState(true)
  const [showStarred,setShowStarred] = useState(false)
  const [showProjects,setShowProjects] = useState(true)
  const [showTeam,setShowTeam] = useState(false)

  return (
    <div className='left-menu'>
      <div className="bottom-scroll">
        <div className="left-menu-top-options">
          <div className="top-options options"><span className="material-symbols-rounded">home</span>Home</div>
          <div className="top-options options"><span className="material-symbols-rounded">check_circle</span>My Tasks</div>
          <div className="top-options options"><span className="material-symbols-rounded">notifications</span>Inbox</div>
        </div>
        <div className="left-menu-bottom"></div>
        <Insights showInsights={showInsights} setShowInsights={setShowInsights} />
        <Starred showStarred={showStarred} setShowStarred={setShowStarred} />
        <Projects showProjects={showProjects} setShowProjects={setShowProjects} projects={projects}/>
        <Team showTeam={showTeam} setShowTeam={setShowTeam} />
      </div>
    </div>
  )
}

export default LeftMenu
