import React, { useEffect, useState } from 'react'
import { Routes,Route, Navigate, useNavigate } from 'react-router-dom'
import DashBoard from './pages/DashBoard/DashBoard'
import Project from './pages/Project/Project';
import NewProject from './pages/NewProject/NewProject';
import BlankProjectTemplate from './pages/BlankProjectTemplate/BlankProjectTemplate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/loginpage/Login';
import Register from './pages/registerpage/Register';
import { useDispatch } from 'react-redux';
import { getListItems, getLists } from './redux/lists/ListAction';
import { useSelector } from 'react-redux';
import Homepage from './pages/homepage/Homepage';
// import MyTaskPage from './pages/myTaskPage/MyTaskPage';

const App = () => {
  const [step, setStep] = useState(1);
  const [ bgImgUrl,setBgImgUrl] = useState("https://wallpapers.com/images/hd/hd-ship-in-the-sea-sunset-e2vkyaaw9zh4i8d8.jpg")
  const [projects, setProjects] = useState([
    {name:'Dousoft',_id:'1', projects:[]},
    {name:'Prince',_id:'2', projects:[]},
    {name:'Shivani',_id:'3', projects:[]},
    {name:'Kartik',_id:'4', projects:[]}
  ])
  
  const authenticate = sessionStorage.getItem("accessToken");
  
  const dispatch = useDispatch()
  const navigate =useNavigate()

  // useEffect(()=>{
  //   if(authenticate){
  //     navigate('/')
  //   }
  // },[authenticate])

  useEffect(()=>{
    dispatch(getLists())
    dispatch(getListItems())
  },[])
  
  const user = useSelector(state=>(state?.auth?.user))

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {
          authenticate ?
          <>
            {/* <Route path='/my-tasks' element={<MyTaskPage/>}/> */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            {/* <Route path='/' element={<DashBoard bgImgUrl={bgImgUrl} setBgImgUrl={setBgImgUrl} projects={projects} />}/> */}
            <Route path='/' element={<Homepage />}/>
            <Route path='/:id' element={<DashBoard bgImgUrl={bgImgUrl} setBgImgUrl={setBgImgUrl} projects={projects} />}/>
            <Route path='/projects' element={<Project step={step} setStep={setStep}  bgImgUrl={bgImgUrl} setBgImgUrl={setBgImgUrl} />}>
              {/* <Route path='/projects/new' element={<NewProject/>}/> */}
              <Route path='/projects/new' element={
                <BlankProjectTemplate step={step} setStep={setStep}  bgImgUrl={bgImgUrl} setBgImgUrl={setBgImgUrl} />}/>
              {/* <Route path='/projects/blank' element={<BlankProjectTemplate/>}/> */}
            </Route>
          </>
          :
          <Route path="*" element={<Navigate to="/login" replace />} />
        }
      </Routes>
    </>
  )
}

export default App
