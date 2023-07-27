import React from 'react'
import sampleProfile from '../../assets/logos/7515495b-982d-44d2-9931-5a8bbbf27532.jpg'

const SampleBoard = () => {
  return (
    <div className="sample-board">
    <div className="sample-board-item">
      <div className="sample-board-item-heading">
        To do
        <div className="sample-board-item-icons">
          <span className={`material-symbols-rounded`} > add </span>
          <span className="material-symbols-rounded">more_horiz</span>
        </div>
      </div>
      <div className="sample-board-item-bottom">
      <div className='content'>
          <div className="content-dummy">
          <div>
          <i className="fa-regular fa-circle-check"></i> 
          <div className="w-75"></div>
          </div>
          <div className="w-50"></div>
          <div>
          <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
          <div className="w-25"></div>
          </div>
        </div>
        </div>
        <div className='content'>
          <div className="content-dummy">
          <div>
          <i className="fa-regular fa-circle-check"></i> 
          <div className="w-75"></div>
          </div>
          <div className="w-50"></div>
          <div>
          <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
          <div className="w-25"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="sample-board-item">
      <div className="sample-board-item-heading">
        In Progress
        <div className="sample-board-item-icons">
          <span className={`material-symbols-rounded`} > add </span>
          <span className="material-symbols-rounded">more_horiz</span>
        </div>
      </div>
      <div className="sample-board-item-bottom">
        <div className='content'>
        <div className="image-div" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)' }}/>
        <div className="content-dummy">
          <div>
          <i className="fa-regular fa-circle-check"></i>
          {/* <i className="fa-solid fa-circle-check" style={{color: "#02cf24"}}></i>  */}
          <div className="w-75"></div>
          </div>
          <div>
          <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
          <div className="w-25"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="sample-board-item">
      <div className="sample-board-item-heading">
        Completed
        <div className="sample-board-item-icons">
          <span className={`material-symbols-rounded`} > add </span>
          <span className="material-symbols-rounded">more_horiz</span>
        </div>
      </div>
      <div className="sample-board-item-bottom">
        <div className='content'>
          <div className="content-dummy">
          <div>
          <i className="fa-solid fa-circle-check" style={{color: "#02cf24"}}></i> 
          <div className="w-75"></div>
          </div>
          <div className="w-50"></div>
          <div>
          <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
          <div className="w-25"></div>
          </div>
        </div>
        </div>
        <div className='content'>
          <div className="content-dummy">
          <div>
          <i className="fa-solid fa-circle-check" style={{color: "#02cf24"}}></i> 
          <div className="w-75"></div>
          </div>
          <div className="w-50"></div>
          <div>
          <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
          <div className="w-25"></div>
          </div>
        </div>
        </div>
        <div className='content'>
          <div className="content-dummy">
            <div>
              <i className="fa-solid fa-circle-check" style={{color: "#02cf24"}}></i> 
              <div className="w-75"></div>
            </div>
            <div className="w-50"></div>
            <div>
              <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
              <div className="w-25"></div>
            </div>
        </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default SampleBoard
