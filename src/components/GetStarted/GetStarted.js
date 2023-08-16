import React from 'react'
import './GetStarted.css'
import logo from '../../assets/logos/Icon_Dousoft-removebg-preview.png'

const GetStarted = () => {
  return (
    <div className='get-started' >
      <div className="get-started-top">
        <img src={logo} alt="" />
        <p>Try the #1 software in project and product management</p>
        <button>Get Started</button>
      </div>
      <div className="bottom">
        <div className='img'>
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <div>
            <p className='top'>Dousoft</p>
            <p>Home</p>
            <p>Product</p>
            <p>Pricing</p>
            <p>Premium</p>
            <p>Business</p>
            <p>Enterprise</p>
            <p>Customer Success</p>
            <p>Dousoft Templates</p>
            <p>Trust & Security</p>
            <p>Status</p>
          </div>
          <div>
            <p className='top'>About Us</p>
            <p>Company</p>
            <p>Leadership</p>
            <p>Customers</p>
            <p>Diversity</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Wavelength</p>
            <p>Blog</p>
            <p>Investor Relations</p>
            <p>Sitemap</p>
            <p>Modern Slavery Transparency Statement</p>
          </div>
          <div>
            <p className='top'>Workflow Solutions</p>
            <p>Project Management</p>
            <p>Goal Management</p>
            <p>Agile Management</p>
            <p>Task Management</p>
            <p>Increase Productivity</p>
            <p>Work Management</p>
            <p>Project Planning</p>
            <p>To Do Listss</p>
            <p>See All Uses</p>
            <p>See All Team</p>
          </div>
          <div>
            <p className='top'>Resources</p>
            <p>Dousoft Guide</p>
            <p>Forum</p>
            <p>Support</p>
            <p>App Directory</p>
            <p>Developers & API</p>
            <p>Partners</p>
            <p>Dousoft Community</p>
            <p>Events</p>
            <p>Dousoft for Nonprofits</p>
            <p>Accessibility</p>
          </div>
          <div>
            <p className='top'>Learn</p>
            <p>11 Leadership Styles</p>
            <p>110 Icebreaker Questions</p>
            <p>Executive Summary Tips</p>
            <p>Impostor Syndrome Tips</p>
            <p>Prevent Team Burnout</p>
            <p>SWOT Analysis Tips</p>
            <p>What are OKRs?</p>
            <p>What are SMART Goals?</p>
            <p>What is Scope Creep?</p>
            <p>See All Guides</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
