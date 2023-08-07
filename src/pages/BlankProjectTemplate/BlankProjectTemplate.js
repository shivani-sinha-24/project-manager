import React, { useEffect, useState } from 'react'
import './BlankProjectTemplate.css'
import calendarlogo from '../../assets/logos/download-removebg-preview.png'
import listlogo from '../../assets/logos/list-icon-png_265257-removebg-preview.png'
import dashboardlogo from '../../assets/logos/2705641-middle-removebg-preview.png'
import timelinelogo from '../../assets/logos/pngtree-gray-decorative-lines-free-of-charge-png-image_4713342-removebg-preview.png'
import SampleBoard from '../../components/SampleBoard/SampleBoard'
import SampleList from '../../components/SampleList/SampleList'
import { useDispatch } from 'react-redux'
import { createProject, getProjects } from '../../redux/project/ProjectAction'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import axios from 'axios'

const BlankProjectTemplate = ({step, setStep, bgImgUrl}) => {

  const navigate = useNavigate()
  const dispatch= useDispatch();
  const [projectName,setProjectName] = useState('')
  const user = useSelector(state=>state?.auth?.user)
  const projects = useSelector(state=>state?.projects?.projects)?.filter(project=>project?.user_id==user?._id)
  const project = useSelector(state=>state?.projects?.projects)?.filter(project=>project?.name==projectName)

  useEffect(()=>{
    dispatch(getProjects())
  },[projectName])

  const [sampleList,setSampleList] = useState(false)
  const [sampleBoard,setSampleBoard] = useState(true)
  const [sampleTimeline,setSampleTimeline] = useState(false)
  const [sampleCalendar,setSampleCalendar] = useState(false)
  const [sampleWorkflow,setSampleWorkflow] = useState(false)

  const [addSampleform,setAddSampleform] = useState(false)
  const [scetions,setSections] = useState(['To Do','In Progress','Done'])
  const [inputText,setInputText] = useState('')

  const showSampleList = ()=>{
    setSampleList(true);
    setSampleBoard(false);
    setSampleTimeline(false);
    setSampleCalendar(false)
    setSampleWorkflow(false)
  }
  const showSampleBoard = ()=>{
    setSampleList(false);
    setSampleBoard(true);
    setSampleTimeline(false);
    setSampleCalendar(false)
    setSampleWorkflow(false)
  }
  const showSampleTimeline = ()=>{
    setSampleList(false);
    setSampleBoard(false);
    setSampleTimeline(true);
    setSampleCalendar(false)
    setSampleWorkflow(false)
  }
  const showSampleCalendar =()=>{
    setSampleList(false);
    setSampleBoard(false);
    setSampleTimeline(false);
    setSampleCalendar(true)
    setSampleWorkflow(false)
  }
  const showSampleWorkflow = ()=>{
    setSampleList(false);
    setSampleBoard(false);
    setSampleTimeline(false);
    setSampleCalendar(false)
    setSampleWorkflow(true)
  }

  const showStep1 = () => {
    setStep(1);
  };

  const showStep2 = () => {
    setStep(2);
  };

  const showStep3 = () => {
    setStep(3);
  };
  const handleContinueStep1 = (e) => {
    e.preventDefault();
    showStep2();
  };
  const handlePreviousStep2 = () => {
    showStep1();
  };
  const handleContinueStep2 = () => {
    showStep3();
  };
  const updateSection = (value,index)=>{
    const updatedSection = [...scetions]
    updatedSection[index] = value
    setSections(updatedSection)
  }


  const projectStyle={
    backgroundImage: `url(${bgImgUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }
  
  const createNewProject = ()=>{
    dispatch(createProject({name:projectName ,user_id:user?._id}))
    setTimeout(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/get-project/${projectName}`)
      .then(res=> {
        setProjectName('')
        res?.status==200 && navigate(`/${res?.data?._id}`);
      })
      .catch(err=> console.log(err))
    },100)
  }

  return (
     <div className="blank-project-template">
      <div className="blank-project-form">
        {step === 1 && (
          <div className="step-1">
            <h3>New Project</h3>
            <form onSubmit={handleContinueStep1}>
              <label htmlFor="project-name">Project Name</label>
              <input
                type="text"
                name="project-name"
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <label htmlFor="privacy">Privacy</label>
              <select id="privacy" name="privacy">
                <option value="volvo">Public to my workplace</option>
                <option value="saab">Private to project members</option>
              </select>
              <label>Default view</label>
              <div className="view-options">
                <div className="view-wrapper">
                  <div className="view-option bg-white" onClick={showSampleList}>
                    <div className="step-1-option-logo">
                    <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/8101993eb31d0de88ea18fe53fc8e58a1b8988be/nux_project_list.svg" alt="calendar-logo"  />
                    </div>
                    <span>List</span>
                  </div>
                  <div className="view-option bg-white" onClick={showSampleBoard}>
                    <div className="step-1-option-logo">
                    <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/cbdb658422a5978c8942552a903686f836bf1da4/nux_project_boards.svg" alt="calendar-logo"  />
                    </div>
                    Board
                  </div>
                  {/* <div className="view-option  bg-white" onClick={showSampleTimeline}>
                    <div className="step-1-option-logo">
                    <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/c42e794d4028b4a6da7bde7356849fe24e66a622/nux_project_timeline.svg" alt="calendar-logo"  />
                    </div>
                    Timeline
                  </div>
                  <div className="view-option  bg-white" onClick={showSampleCalendar}>
                    <div className="step-1-option-logo">
                    <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/ce32c12c0e85bac71b4557a786cc5d981f29def8/nux_project_calendar.svg" alt="calendar-logo"  />
                    </div>
                    Calendar
                  </div> */}
                </div>
              </div>
              <button disabled={!projectName?true:false} onClick={handleContinueStep1}>Continue</button>
            </form>
          </div>
        )}  

       {step === 2 && (  
          <div className="step-2">
            <h3>What do you want to do first?</h3>
            <div className="step-2-options" onClick={showSampleList}>
              <div className="option-logo">
              <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/3129b735389b86a35911f682d3e59fed5e30c687/Dark%20add%20tasks%20icon.svg" alt="" />
              </div>
              <div className="option-text">
                <div className="ot-heading">Start adding tasks</div>
                <div className="ot-p">Assign, set due dates, and get to work</div>
              </div>
            </div>
            <div className="step-2-options" onClick={showSampleBoard}>
              <div className="option-logo">
              <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/241bf07581c9eff5657370fa903b823c8f121fb1/Dark%20share%20icon.svg" alt="" />
              </div>
              <div className="option-text">
                <div className="ot-heading">Share with teammates</div>
                <div className="ot-p">Collaborate and stay in sync</div>
              </div>
            </div>
            <div className="step-2-options" onClick={showSampleWorkflow}>
              <div className="option-logo">
              <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/75a6ff2363e8efd7e6856d10afbaaa4034b3a1bd/Dark%20Workflow%20icon.svg" alt="" />
              </div>
              <div className="option-text">
                <div className="ot-heading">Set up workflow</div>
                <div className="ot-p">Automate and visualize your team's process</div>
              </div>
            </div>
            {/* <button className='prev-step-btn'onClick={handlePreviousStep2}>Previous</button> */}
            {
              sampleWorkflow
              ?
              <button className='next-step-btn'onClick={handleContinueStep2}>Continue</button>
              :
              <button className="go-to-project"onClick={()=>{createNewProject()}}>Go to Project</button>
            }
          </div>
         )}  

         {step === 3 && ( 
          <div className="step-3">
            <h3>What are the stages or sections of your project?</h3>
            {scetions.length>0 && scetions.map((section,index)=><input type="text" placeholder='' defaultValue={section} onChange={(e)=>updateSection(e.target.value,index)}/>)
            }
            { addSampleform &&
              <form action="POST" onSubmit={(e)=>{e.preventDefault();setSections([...scetions,inputText]);setAddSampleform(false)}}>
              <input type="text" placeholder='Write a section name' name='new_section_name' onChange={e=>{console.log(e.target);setInputText(e.target.value)}}/>
            </form>}
            <button className='add-section-btn' onClick={()=>setAddSampleform(!addSampleform)}><span className="material-symbols-rounded">add</span>Add Section</button>
            <button className="go-to-project" onClick={()=>createNewProject()}>Go to Project</button>
          </div>
        )} 
        
      </div>
      <div className="blank-project-template-sample" style={projectStyle}>
        <div className="blank-project-template-sample-top">
          <div className="sample-top-logo"></div>
          <div className="sample-top-center">
            <div className="center-project-name">{projectName}</div>
            <div className="center-project-options">
              <ul>
                <li>OverView</li>
                <li className={sampleList ? 'sample-active' : ''}>List</li>
                <li className={sampleBoard ? 'sample-active' : ''}>Board</li>
                {/* <li className={sampleTimeline ? 'sample-active' : ''}>Timeline</li>
                <li className={sampleCalendar ? 'sample-active' : ''}>Calendar</li> */}
                <li className={sampleWorkflow ? 'sample-active' : ''}>Workflow</li>
              </ul>
            </div>
          </div>
          <div className="sample-top-right">
            <div className='sample-right-icon1'></div>
            <div className='sample-right-icon'></div>
            <div className='sample-right-icon'></div>
            <div className='sample-right-icon'></div>
          </div>
        </div>
        <div className="blank-project-template-sample-bottom">
          {sampleList && <SampleList/>}
          {sampleBoard && <SampleBoard/>}
          {/* {sampleTimeline && <div className="sample-timeline">Timeline</div>}
          {sampleCalendar && <div className="sample-calendar">Calendar</div>} */}
          {sampleWorkflow && 
          <div className="sample-workflow">
            <div className="sample-workflow-sections-scroll">
              {
                scetions.length>0 && scetions.map(section =>
                <div className='sample-workflow-sections'>{section}</div>)
              }
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default BlankProjectTemplate
