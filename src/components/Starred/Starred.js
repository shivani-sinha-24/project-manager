import React from 'react'
import './Starred.css'

const Starred = ({showStarred,setShowStarred}) => {
  return (
    <>
    <div className='starred '>
      <div>     
        <span className={`material-symbols-rounded ${!showStarred ? 'rotate-left' : 'rotate-right'}`} >arrow_drop_down</span>      
      </div>
      <div className="option-heading" onClick={()=>setShowStarred(!showStarred)}>
          <span>Starred</span>
          {/* <button>+</button> */}
        </div>
    </div>
    {
      showStarred &&
      <div className="option-bottom">
        <div className='options'><span className="material-symbols-rounded">
person
</span>Shivani</div>
      </div>
    }
    </>
  )
}

export default Starred
