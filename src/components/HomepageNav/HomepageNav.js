import React from 'react'
import './HomepageNav.css'

import logo from '../../assets/logos/icon_Dousoft_It_Solution_Pvt_Ltd_Logo-removebg-preview.png'

const HomepageNav = ({showNavMenu,setShowNavMenu}) => {
  return (
    <div className='home-nav'>
      <div className="home-nav-left">
        <img src={logo} alt="" />
      </div>
      <div className="home-nav-center">
        <div>Product</div>
        <div>Use Cases</div>
        <div>Resources</div>
        <div>Enterprise</div>
        <div>Pricing</div>
      </div>
      <div className="home-nav-right">
        <div className='lang'><i className="fa-solid fa-globe"></i></div>
        <div className='sales-xl'>Contact Sales</div>
        <i className="fa-regular fa-message sales-lg"></i>
        <div className='login-xl'>Login</div>
        <i className="fa-regular fa-circle-user login-lg"></i>
        <div className='right-nav-get-started'>Get Started</div>
        {
          showNavMenu
          ?
          <i className="fa-solid fa-xmark"onClick={()=>setShowNavMenu(false)}></i>
          :
          <i className="fa-solid fa-bars menu-lg" onClick={()=>setShowNavMenu(true)}></i>
        }
      </div>
    </div>
  )
}

export default HomepageNav
