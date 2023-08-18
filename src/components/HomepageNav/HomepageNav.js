import React from 'react'
import './HomepageNav.css'

import logo from '../../assets/logos/icon_Dousoft_It_Solution_Pvt_Ltd_Logo-removebg-preview.png'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const HomepageNav = ({showNavMenu,setShowNavMenu}) => {

  const user = useSelector(state=>state?.auth?.user)

  const navigate = useNavigate();
  const logout = () => {
      localStorage.clear();
      navigate('/login');
      toast.success("Sucessfully logged out")
  }
  
  return (
    <div className='home-nav'>
      <div className="home-nav-left">
        <img src={logo} alt="" />
      </div>
      <div className="home-nav-center">
        {/* <div>Product</div> */}
        <Link to={'/projects'}>Project</Link>
        <div>Use Cases</div>
        <div>Resources</div>
        {/* <div>Enterprise</div> */}
        <Link to={'/employee/form'} >Employees</Link>
        <div>Pricing</div>
      </div>
      <div className="home-nav-right">
        <div className='lang'><i className="fa-solid fa-globe"></i></div>
        <div className='sales-xl'>Contact Sales</div>
        <i className="fa-regular fa-message sales-lg"></i>
        {
        user
        ?
        <a onClick={()=>logout()} className='login-xl'>Logout</a>
        :
        <Link to={'/login'} className='login-xl'>Login</Link>
        }
        <i className="fa-regular fa-circle-user login-lg"></i>
        <Link to={'/register'} className='right-nav-get-started'>Get Started</Link>
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
