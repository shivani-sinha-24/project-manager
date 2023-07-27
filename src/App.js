import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
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

const App = () => {
  const [step, setStep] = useState(1);
  const [ bgImgUrl,setBgImgUrl] = useState("https://wallpapers.com/images/hd/hd-ship-in-the-sea-sunset-e2vkyaaw9zh4i8d8.jpg")
  const [projects, setProjects] = useState([
    {name:'Dousoft',_id:'1'},
    {name:'Prince',_id:'2'},
    {name:'Shivani',_id:'3'},
    {name:'Kartik',_id:'4'}
  ])
const dispatch = useDispatch()
useEffect(()=>{

  dispatch(getLists())
  dispatch(getListItems())
},[])

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<DashBoard bgImgUrl={bgImgUrl} setBgImgUrl={setBgImgUrl} projects={projects} />}/>
        <Route path='/:id' element={<DashBoard bgImgUrl={bgImgUrl} setBgImgUrl={setBgImgUrl} projects={projects} />}/>
        <Route path='/projects' element={<Project step={step} setStep={setStep}  bgImgUrl={bgImgUrl} setBgImgUrl={setBgImgUrl} />}>
          {/* <Route path='/projects/new' element={<NewProject/>}/> */}
          <Route path='/projects/new' element={
            <BlankProjectTemplate step={step} setStep={setStep}  bgImgUrl={bgImgUrl} setBgImgUrl={setBgImgUrl} />}/>
          {/* <Route path='/projects/blank' element={<BlankProjectTemplate/>}/> */}
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
