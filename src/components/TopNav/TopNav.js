import React, { useState } from 'react'
import './TopNav.css'

const TopNav = ({showRightMenu,setShowRightMenu,showLeftMenu,setShowLeftMenu,project}) => {
  return (
     <div className='top-nav'> 
      <ul className="left">
        <li >{project?.name||'Dummy Dashboard'}</li>
        <li ><span className="material-symbols-rounded">star</span></li>
        <li ><span className="material-symbols-rounded">group</span><span  className={showLeftMenu?" hide":""}> Workspace visibility</span></li>
        <li ><span className="material-symbols-rounded">horizontal_distribute</span> Board</li>
        <li ><span className="material-symbols-rounded">expand_more</span></li>
      </ul>
      <ul className="right">
        <li ><span className="material-symbols-rounded">rocket_launch</span> Power-ups</li>
        <li ><span className="material-symbols-rounded">flash_on</span> Automation</li>
        <li ><span className="material-symbols-rounded">filter_list</span> Filter</li>
        <li className="nav-item profile">
            <div className="p-logo"></div>
            <div className="p-share"><span className="material-symbols-rounded">person_add</span> Share</div>
        </li>
        {
          !showRightMenu &&
        <li onClick={()=>{setShowRightMenu(true);setShowLeftMenu(false)}}><span className="material-symbols-rounded">more_horiz</span></li>
        }
      </ul>
    </div>
  )
}

export default TopNav
