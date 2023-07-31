import axios from 'axios';
import './Modal.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getListItems, updateListItem } from '../redux/lists/ListAction';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

export default function Modal({
  isActive,
  setIsOpen,
  listItem,
  projects
}) {

  const user= useSelector(state=>state?.auth?.user?.fullName)

  console.log('user :',user);
  const date = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()

  const [showDesc,setShowDesc] = useState(false);
  const [showAddSubTask,setShowAddSubTask] = useState(false);
  const [showDropdownRecent,setShowDropdownRecent] = useState(false);
  const [showDropdownPriority,setShowDropdownPriority] = useState(false);
  const [showDropdownStatus,setShowDropdownStatus] = useState(false);
  const [showDropdownProject,setShowDropdownProject] = useState(false);
  const [showQuesSec,setShowQuesSec] = useState(false)
  const [isFocused, setIsFocused] = useState(false);
  const [showPrevTasks,setShowPrevTasks] = useState(false);
  const [selectedRecent,setSelectedRecent] = useState(listItem?.tasks_date||'Recently Assigned');
  const [selectedPriority,setSelectedPriority] = useState(listItem?.priority||'Medium');
  const [selectedStatus,setSelectedStatus] = useState('On Track');
  const [selectedProject,setSelectedProject] = useState('To Do');
  const [addnewProject,setAddNewProject] = useState(false);
  const [addNewProjectNameInput,setAddNewProjectNameInput] = useState('')
  const [newProjectName,setNewProjectName] = useState([])
  const [subtask,setSubtask] = useState({})
  const [subTaksArray,setSubTaksArray] = useState({})

  let itemDetails = {
    _id:listItem?._id,
    name:'',
    due_date:'',
    priority:'',
    status:'',
    projects:[],
    assignee: '',
    description:'',
    comment:'',
    task_date:'',
    sub_task:[]
  }

  const dispatch = useDispatch()

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const showRecentDropdown = ()=>{
    setShowDropdownRecent(!showDropdownRecent)
    setShowDropdownPriority(false)
    setShowDropdownStatus(false)
    setShowDropdownProject(false)
  }
  const showPriorityDropdown = ()=>{
    setShowDropdownRecent(false)
    setShowDropdownPriority(!showDropdownPriority)
    setShowDropdownStatus(false)
    setShowDropdownProject(false)
  }
  const showStatusDropdown = ()=>{
    setShowDropdownRecent(false)
    setShowDropdownPriority(false)
    setShowDropdownStatus(!showDropdownStatus)
    setShowDropdownProject(false)
  }
  const showProjectDropdown = ()=>{
    setShowDropdownRecent(false)
    setShowDropdownPriority(false)
    setShowDropdownStatus(false)
    setShowDropdownProject(!showDropdownProject)
  }

  const updateItem = ()=>{
    console.log('update',itemDetails);
    dispatch(updateListItem(itemDetails))
    dispatch(getListItems())
  }

  const handleSubmit = () => {
    // setSubTaksArray([...subTaksArray,subtask]);
    setShowAddSubTask(false)    
  }
  
  return (
      <div className={`modal ${isActive ? "show" : ""} `}>
        <div className="modal-section">

          <div className="modal-header">
            <div className="modal-header-left">
              <button><i className="fa-solid fa-check"></i> Mark Complete</button>
            </div>
            <div className="modal-header-right">
            <button onClick={() => {setIsOpen(false)}}>X</button>
            </div>
          </div>

          <div className="modal-body" style={{height:showQuesSec?'65%':'74%'}}>
            <form action="" onSubmit={e=>{e.preventDefault();updateItem()}}>
              <input className="modal-header-title-input" onChange={(e)=>{itemDetails = ({...itemDetails,name:e.target.value,});}} type="text" placeholder='' defaultValue={listItem?.name || ''}/>
            </form>
            <div className="grid">
              <div className="grid-container">
                <div className="grid-item1">Assignee</div>
                <div className="grid-item">
                  <div className="d-flex assignee">
                    <button>
                      <div className="circle" >S</div>
                      Shivani Sinha
                    </button>
                    <button>
                    <i className="fa-solid fa-xmark" ></i>
                    </button>
                    <button className='dropdown-button' onClick={()=>showRecentDropdown()}>
                    {selectedRecent} <span className="material-symbols-rounded">expand_more</span>
                    </button>
                    { showDropdownRecent &&
                      <div className="dropdown-recent drop-down-container">
                        <div className="dropdown-recent-top">
                          My Tasks
                        </div>
                        <div className="dropdown-recent-bottom">
                          <div onClick={()=>{
                            itemDetails = ({...itemDetails,task_date:'Recently assigned'})
                            updateItem()
                            setSelectedRecent('Recently assigned')}}>Recently assigned</div>
                          <div onClick={()=>{
                            itemDetails = ({...itemDetails,task_date:'Do today'})
                            updateItem()
                            setSelectedRecent('Do today')}}>Do today</div>
                          <div onClick={()=>{
                            itemDetails = ({...itemDetails,task_date:'Do next week'})
                            updateItem()
                            setSelectedRecent('Do next week')}}>Do next week</div>
                          <div onClick={()=>{
                            itemDetails = ({...itemDetails,task_date:'Do later'})
                            updateItem()
                            setSelectedRecent('Do later')}}>Do later</div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-item1">Due Date</div>
                <div className="grid-item">
                <div className="d-flex">
                    <button className='calendar'>
                    <i className="fa-regular fa-xl fa-calendar"> </i> {date}-{month}-{year}
                    </button>
                    <button>
                    <i className="fa-solid fa-xmark" ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-item1">Projects</div>
                <div className="grid-item">
                  <div>
                  <div className="d-flex project">
                    <button >
                      Dousoft
                    </button>
                    <button className='dropdown-button' onClick={()=>showProjectDropdown()}>
                      {selectedProject}<span className="material-symbols-rounded">expand_more</span>
                    </button>
                    { showDropdownProject &&
                      <div className="dropdown-project drop-down-container">
                        <div onClick={()=>{
                          setSelectedProject('To Do');
                          itemDetails = ({...itemDetails,projects:'To Do'});
                          updateItem()
                        }}>To Do</div>
                        <div onClick={()=>{
                          setSelectedProject('Doing');
                          itemDetails = ({...itemDetails,projects:'Doing'});
                          updateItem()
                        }}>Doing</div>
                        <div onClick={()=>{
                          setSelectedProject('Done');
                          itemDetails = ({...itemDetails,projects:'Done'});
                          updateItem()
                          }}>Done</div>
                      </div>
                    }
                    <button>
                    <i className="fa-solid fa-xmark" ></i>
                    </button>
                  </div>
                  </div>
                  {
                    newProjectName.length>0 &&
                    newProjectName.map(projectadded=> <div style={{color:'black'}}>{projectadded}</div> )
                  }
                  {
                    addnewProject
                    ?
                      <div className='available-projects-container'>
                      <form action="" onSubmit={(e)=>{setNewProjectName([...newProjectName,addNewProjectNameInput])}}>
                        <input type="text" value={addNewProjectNameInput} className='add-project' placeholder='New Project Name' autoFocus onChange={e=>setAddNewProjectNameInput(e.target.value)}/>
                      </form>
                      <div className="available-projects ">
                        {
                          addNewProjectNameInput !== ''
                          ?
                          projects
                          ?.filter(project => project.name.toLowerCase().includes(addNewProjectNameInput))
                          .map(project => <div key={project.id} onClick={()=>setNewProjectName([...newProjectName,project.name])}>{project.name}</div>)
                          :
                          projects?.map(project=> <div>{project.name}</div>)
                        }
                      </div>
                    </div>
                    :
                    <button className='add-projects' onClick={()=>setAddNewProject(true)}>Add Projects</button>
                  }
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-item1">Dependencies</div>
                <div className="grid-item"><button className='add-dependencies'>Add Dependencies</button></div>
              </div>
              <div className="grid-container">
                <div className="grid-item1">Priority</div>
                <div className="grid-item">
                  <div className="d-flex priority">
                  <button className='dropdown-button' onClick={()=>showPriorityDropdown()}>
                      {selectedPriority}<span className="material-symbols-rounded">expand_more</span>
                    </button>
                    { showDropdownPriority &&
                      <div className="dropdown-priority drop-down-container">
                        <div className="dropdown-priority-top">
                          <div onClick={()=>{
                              setSelectedPriority('---')
                              itemDetails = {...itemDetails,priority:''}
                              updateItem()
                            }}>---</div>
                          <div onClick={()=>{
                              setSelectedPriority('Low')
                              itemDetails = {...itemDetails,priority:'Low'}
                              updateItem()
                            }}>Low</div>
                          <div onClick={()=>{
                              setSelectedPriority('Medium')
                              itemDetails = {...itemDetails,priority:'Medium'}
                              updateItem()
                            }}>Medium</div>
                          <div onClick={()=>{
                              setSelectedPriority('High')
                              itemDetails = {...itemDetails,priority:'High'}
                              updateItem()
                            }}>High</div>
                        </div>
                        <div className="dropdown-priority-bottom">
                          Edit options
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-item1">Status</div>
                <div className="grid-item">
                  <div className="d-flex status">
                  <button className='dropdown-button' onClick={()=>showStatusDropdown()}>
                    {selectedStatus}<span className="material-symbols-rounded">expand_more</span>
                    </button>
                    { showDropdownStatus &&
                      <div className="dropdown-status drop-down-container">
                        <div className="dropdown-status-top">
                          <div onClick={()=>{
                            setSelectedStatus('---')
                            itemDetails = {...itemDetails,status:' '}
                            updateItem()
                            }}>---</div>
                          <div onClick={()=>{
                            setSelectedStatus('On track')
                            itemDetails = {...itemDetails,status:'On track'}
                            updateItem()
                            }}>On track</div>
                          <div onClick={()=>{
                            setSelectedStatus('At risk')
                            itemDetails = {...itemDetails,status:'At risk'}
                            updateItem()
                            }}>At risk</div>
                          <div onClick={()=>{
                            setSelectedStatus('Off track')
                            itemDetails = {...itemDetails,status:'Off track'}
                            updateItem()
                            }}>Off track</div>
                        </div>
                        <div className="dropdown-status-bottom">
                          Edit options
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="task-description">
              {
                showDesc
                ?
                <textarea className='description' type='text' name="description" id="description" placeholder='Type / for menu'></textarea>
                :
                <div className="description" onClick={()=>setShowDesc(true)}>What is this task about?</div>
              }
            </div>
              <div className='sub-task-container'>
                <label htmlFor="sub-task">Subtask</label>
                <div className="subtasks">
                  {listItem?.sub_task?.length ?
                    listItem?.sub_task.map((sub_task,index)=> 
                    <div className='sub-tasks-items'>
                      <div className="detail">
                        <div>{sub_task?.by?.charAt(0).toUpperCase()}</div>
                        <p>{sub_task?.name}</p>
                      </div>
                      {/* <p className='time'> - {sub_task.time} days ago</p> */}
                      <p className='time'> <Moment fromNow>{sub_task?.time}</Moment></p>
                      
                    </div>
                      ):null
                  }
                </div>
                {showAddSubTask ?
                <div className="sub-task">
                  {/* <i className="fa-regular fa-xl fa-circle-check"></i>  */}
                  <form action="" onSubmit={e=>{e.preventDefault();handleSubmit()}}>
                    <input autoFocus type="text" id='sub-task' name='sub_task' placeholder='Write your subtask here..' onChange={e=>{
                      setSubtask({name:e.target.value,by:`${user}`,time: new Date()});
                      itemDetails = {...itemDetails,sub_task:{name:e.target.value,by:`${user}`,time: new Date()}};
                      updateItem();
                    }}/>
                  </form>
                  {/* <i className="fa-regular fa-xl fa-calendar"></i>
                  <i className="fa-regular fa-lg fa-user"></i>
                  <i className="fa-regular fa-xl fa-comment"></i> */}
                </div>
                :null
                }
              </div>
            <button className="add-task" onClick={()=>setShowAddSubTask(!showAddSubTask)}>Add Subtask</button>
            <div className="modal-body-bottom">
              <div className="activities-section">
                <div className="profile-logo">PR</div>
                <div className="activities-details-sec">
                  <div className='activities-heading'>
                    Prince Raj created this task. <span>11 days ago</span>
                  </div>
                  {
                    showPrevTasks ?
                    <div >
                      <div className='activities-body'>Prince Raj assigned to Prince Raj. <span>11 days ago</span></div>
                      <div className='activities-body'>Prince Raj added to Dousoft. <span>11 days ago</span></div>
                    </div>
                    :
                    <div className="show-prev-tasks" onClick={()=>setShowPrevTasks(true)}>Show Previous tasks</div>
                  } 
                  <div className='activities-body'>Prince Raj changed the due date to jun 27. <span>11 days ago</span></div>
                </div>
              </div>
              {
                listItem?.comments?.length ?
                <div className="comments-section">
                  {listItem?.comments?.map(comment=> 
                  <div className="comment">

                  </div> )}
                </div>
                :null
              }
            </div>
          </div>

          <div className="modal-bottom" style={{height:showQuesSec?'25%':'16%'}}>
            <div className="modal-bottom-flex">
              <div className="circle-lg" style={{height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'rgb(190, 0, 0)'}}>
                {user?.charAt(0).toUpperCase()}
              </div>
              {
                !showQuesSec
                ?
                <div className='ques-sec-container'>
                  <div className='show-question-section' onClick={()=>setShowQuesSec(true)}>
                    <div className="text"> Ask a question or post an update....</div>
                    <div className="icons">
                      <i className="fa-regular fa-circle-dot"></i>
                      <i className="fa-regular fa-at"></i>
                      <i className="fa-regular fa-face-smile"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="collaborators">
                      <div className="collaborators-left">
                        <div className="collaborator-text">
                          Collaborators
                        </div>
                        <div className="collaborators-logo" >S</div>
                        <div className="collaborators-logo" >P</div>
                        <div className="collaborators-logo" >K</div>
                        <div className="added-collaborators-logo" ><i className="fa-regular fa-user"></i></div>
                        <i className="fa-solid fa-plus add-collaborator"></i>
                      </div>
                      <div className="collaborators-right">
                      <i className="fa-solid fa-bell"></i> Leave Task
                      </div>
                  </div>
                </div>
                :
                <div className="ques-sec-container">
                  <div className='question-section' >
                    <textarea 
                      className={isFocused ? 'bordered' : ''}
                      onFocus={handleFocus}
                      onBlur={handleBlur} 
                      name="" 
                      id="" 
                      placeholder='Type /for menu'
                    >
                    </textarea>
                    <div>
                      <div className="left">
                        <i className="fa-regular fa-solid fa-plus"></i>
                        {/* <i className="fa-regular fa-solid fa-text" style={{color: "#0c0d0d"}}></i> */}
                        <i className="fa-solid fa-a"></i>
                        <i className="fa-regular fa-circle-dot"></i>
                        <i className="fa-regular fa-at"></i>
                        <i className="fa-regular fa-face-smile"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-solid fa-paperclip"></i>
                      </div>
                      <div className="right">
                        Prince will be notified
                        <button className='cmnt-btn'>Comment</button>
                      </div>
                    </div>
                  </div>
                  <div className="collaborators">
                      <div className="collaborators-left">
                        <div className="collaborator-text">
                          Collaborators
                        </div>
                        <div className="collaborators-logo" >S</div>
                        <div className="collaborators-logo" >P</div>
                        <div className="collaborators-logo" >K</div>
                        <div className="added-collaborators-logo" ><i className="fa-regular fa-user"></i></div>
                        <i className="fa-solid fa-plus add-collaborator"></i>
                      </div>
                      <div className="collaborators-right">
                      <i className="fa-solid fa-bell"> </i> Leave Task
                      </div>
                  </div>
                </div>
              }
              
            </div>
          </div>

        </div>
    </div>
  );
}
  