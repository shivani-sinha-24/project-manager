import React from 'react'
import './Project.css'
import { Outlet, useNavigate } from 'react-router-dom'

const Project = ({step,setStep}) => {
    const navigate = useNavigate();
    const showPreviousStep = (step)=>{
      setStep(step)
    }

  return (
    <div className='project-page'>
      <div className='project-page-top'>
        <button>
          <span className="material-symbols-rounded" onClick={()=>{step=='1'?navigate(-1):showPreviousStep(step-1)}}>arrow_back</span>
        </button>
        <button>
          <i className="fa-solid fa-xmark fa-lf" onClick={()=>navigate('/')}></i>
        </button>
      </div>
      <div className="project-page-bottom">
        <Outlet/>
      </div>
    </div>
  )
}

export default Project
