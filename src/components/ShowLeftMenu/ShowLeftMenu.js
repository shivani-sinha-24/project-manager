import React from 'react'
import './ShowLeftMenu.css'

const ShowLeftMenu = ({setShowLeftMenu,setShowRightMenu,showLeftMenu}) => {
  return (
    <div className='show-left-menu' onClick={()=>{setShowLeftMenu(!showLeftMenu);setShowRightMenu(false)}}>
     {
     !showLeftMenu
     ?
      <span className="material-symbols-rounded">arrow_forward_ios</span> 
      :   
      <span className="material-symbols-rounded">arrow_back_ios</span>}    
    </div>
  )
}

export default ShowLeftMenu
