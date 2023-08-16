import React, { useEffect } from 'react'
import './TopNav.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProjects } from '../../redux/project/ProjectAction'

const TopNav = ({isShareOpen,setIsShareOpen,showRightMenu,setShowRightMenu,showLeftMenu,setShowLeftMenu}) => {

  const params = useParams()
  const dispatch = useDispatch()
  const projects = useSelector(state=>state?.projects?.projects)?.filter(project=>project?._id==params?.id)

  useEffect(()=>{
    dispatch(getProjects())
  },[params?.id])
  
  const user = useSelector(state=>state?.auth?.user)

  return (
     <div className='top-nav'> 
      <ul className="left">
        <li >{projects[0]?.name}</li>
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
          <div className="p-share" onClick={()=>setIsShareOpen(!isShareOpen)}><span className="material-symbols-rounded">person_add</span> Share</div>
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
