import React, { useState } from 'react'
import './Insights.css'

const Insights = ({ showInsights, setShowInsights }) => {
  const [showInsightsOptions,setShowInsightsOptions] = useState(false)
  return (
    <>
    <div className="parent">
      <div className='insights '>
        <div>
          <span className={`material-symbols-rounded ${!showInsights ? 'rotate-left' : 'rotate-right'}`} >
            arrow_drop_down
          </span>
        </div>
        <div className="option-heading" onClick={() => setShowInsights(!showInsights)}>
          <span>Insights</span>
        </div>
        <button onClick={()=>setShowInsightsOptions(!showInsightsOptions)}><span className="material-symbols-rounded">add</span></button>
      </div>
      {
      showInsightsOptions &&
      <div className="add-insight-options">
        <div className="add-insights-options">
        <span className="material-symbols-rounded">query_stats</span> New Dashboard
        </div>
        <div className="add-insights-options">
        <span className="material-symbols-rounded">
            folder_supervised
          </span>  New Protfolio
        </div>
        <div className="add-insights-options">
        <span className="material-symbols-rounded">
            target
          </span> New Goal
        </div>
      </div>

      }
      {
        showInsights &&
        <div className="option-bottom">
          <div className='options'>
            <span className="material-symbols-rounded">query_stats</span>
            <span>Reporting</span>
          </div>
          <div className='options'><span className="material-symbols-rounded">
            folder_supervised
          </span> <span>Portfolios</span></div>
          <div className='options'><span className="material-symbols-rounded">
            target
          </span><span>Goals</span></div>
        </div>
      }
      </div>
    </>
  )
}

export default Insights
