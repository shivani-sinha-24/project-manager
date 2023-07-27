import React, { useState } from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';

const Projects = ({showProjects,setShowProjects,projects}) => {
  const [ showProjectOptions,setShowProjectOptions] = useState(false);

  return (
    <>
      <div className="parent">
    <div className='projects'>
      <div>
        <span className={`material-symbols-rounded ${!showProjects ? 'rotate-left' : 'rotate-right'}`} >arrow_drop_down</span>      
      </div>
      <div className="option-heading" onClick={()=>setShowProjects(!showProjects)}>
          <span>Projects</span>
      </div>
        <button onClick={()=>setShowProjectOptions(!showProjectOptions)}><span className="material-symbols-rounded">add</span></button>
    </div>
    {
      showProjectOptions &&
      <div className="add-project-options">
        <div className="add-projects-options">
        <Link to={`/projects/new`} className="material-symbols-rounded">list_alt_add</Link><Link to={`/projects/new`}> New Project</Link>
        </div>
        <div className="add-projects-options">
        <span className="material-symbols-rounded">list_alt_add</span> New Protfolio
        </div>
      </div>
    }
    {
      showProjects &&
      <div className="option-bottom">
        {projects.length>0 && projects.map(project=>
          <Link to={`/${project._id}`} className='options' >
            <span className="material-symbols-rounded">team_dashboard</span>{project.name}
          </Link>
          )
          
         }
      </div>
    }
    </div>
    </>
  )
}

export default Projects
