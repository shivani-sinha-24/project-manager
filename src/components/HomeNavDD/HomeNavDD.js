import React from 'react'
import './HomeNavDD.css'

const HomeNavDD = () => {
  return (
    <div className='home-nav-dd-menu'>
      <div className="dd-menu-top">
        <div>Product</div>
        <div>Use Cases</div>
        <div>Resources</div>
        <div>Enterprise</div>
        <div>Pricing</div>
      </div>
      <div className="dd-menu-buttons">
        <button className='b1'>Get Startes</button>
        <button className='b2'>Log In</button>
      </div>
      <div className="dd-menu-bottom">
        <div>View Demo</div>
        <div className='border'>Contact Sales</div>
        <div>Download My Project Manager</div>
      </div>
    </div>
  )
}

export default HomeNavDD
