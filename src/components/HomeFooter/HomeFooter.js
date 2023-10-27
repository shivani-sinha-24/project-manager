import React from 'react'
import './HomeFooter.css'

const HomeFooter = () => {
  return (
    <div className='home-footer'>
        <div className="footer-container">
          <div className='copy'>	&#169; {new Date().getFullYear()} My Project Manager,Inc</div>
          <div className='lang'><i className="fa-solid fa-globe"></i> <span>English</span></div>
          <div className='t-n-p'>
            <span className="ul">Terms</span> & <span className="ul">Policy</span>
          </div>
          <div className='f-logo'>
          <i className="fa-brands fa-xl fa-twitter"></i>
          <i className="fa-brands fa-xl fa-linkedin"></i>
          <i className="fa-brands fa-xl fa-facebook"></i>
          <i className="fa-brands fa-xl fa-instagram"></i>
          <i className="fa-brands fa-xl fa-youtube"></i>
          </div>
          <div className='f-download'>
            <button className='apple'>
                <div className="d-logo">
                <i className="fa-brands fa-apple fa-2xl"></i>
                </div>
                <div className="d-text">
                  <div className="p1">Download on the</div>
                  <div className="p1">Apple Store</div>
                </div>
            </button>
            <button className='android'>
                <div className="d-logo">
                <i className="fa-brands fa-google-play fa-2xl"></i></div>        
                <div className="d-text">
                  <div className="p1">GET IT ON</div>
                  <div className="p1">Google Play</div>
                </div>
            </button>
          </div>
        </div>
    </div>
  )
}

export default HomeFooter
