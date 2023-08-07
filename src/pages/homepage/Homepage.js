import React, { useEffect, useState } from 'react'
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
  const [showNavMenu,setShowNavMenu] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setShowNavMenu(!window.innerWidth >= 1200);
    };

    // Initial check when the component mounts
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='homepage'>
      <HomepageNav
        showNavMenu={showNavMenu}
        setShowNavMenu={setShowNavMenu}
      />
      {
        showNavMenu
        ?
        <div className='dd-menu-lg-md-sm'>
          <HomeNavDD/>
        </div>
        :
        <div className='home-page-content'>
          <HomepageTestimoial/>
          <HomepageViews/>
          <WorkProgress/>
          <Connect/>
          <HomeCarousel/> 
          <HomeImages/>
          <GetStarted/>
          <HomeFooter/>
        </div>
      }
    </div>
  )
}

export default Homepage
