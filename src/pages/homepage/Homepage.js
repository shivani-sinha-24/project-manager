import React, { useState } from 'react'
import './Homepage.css'
import HomepageNav from '../../components/HomepageNav/HomepageNav'
import HomeNavDD from '../../components/HomeNavDD/HomeNavDD'
import HomepageTestimoial from '../../components/HomepageTestimoial/HomepageTestimoial'
import HomepageViews from '../../components/HomepageViews/HomepageViews'
import WorkProgress from '../../components/WorkProgress/WorkProgress'
import Connect from '../../components/Connect/Connect'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import HomeImages from '../../components/HomeImages/HomeImages'
import HomeFooter from '../../components/HomeFooter/HomeFooter'
import GetStarted from '../../components/GetStarted/GetStarted'

const Homepage = () => {
  const [showNavMenu,setShowNavMenu] = useState(false)
  return (
    <div className='homepage'>
      <HomepageNav
        showNavMenu={showNavMenu}
        setShowNavMenu={setShowNavMenu}
      />
      {
        showNavMenu
        ?
          <HomeNavDD/>
        :
        <>
          <HomepageTestimoial/>
          <HomepageViews/>
          <WorkProgress/>
          <Connect/>
          <HomeCarousel/> 
          <HomeImages/>
          <GetStarted/>
          <HomeFooter/>
        </>
      }
    </div>
  )
}

export default Homepage
