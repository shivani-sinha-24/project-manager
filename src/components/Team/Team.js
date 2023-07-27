import React from 'react'
import './Team.css'

const Team = ({ showTeam, setShowTeam }) => {
  return (
    <>
      <div className='team'>
        <div>
          <span className={`material-symbols-rounded ${!showTeam ? 'rotate-left' : 'rotate-right'}`} >arrow_drop_down</span>
        </div>
        <div className="option-heading" onClick={() => setShowTeam(!showTeam)}>
          <span>Team</span>
          {/* <button>+</button> */}
        </div>
      </div>
      {
        showTeam &&
        <div className="option-bottom">
          <div className='options'><span className="material-symbols-rounded">
            group
          </span>My workspace</div>
        </div>
      }
    </>
  )
}

export default Team
