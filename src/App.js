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
import { getProjects } from './redux/project/ProjectAction';
import InvitationPage from './pages/invitationPage/InvitationPage';
import EmployeePage from './pages/employeepage/EmployeePage';
import EmployeeForm from './pages/employeeForm/EmployeeForm';
import EmployeeListPage from './pages/employeeListPage/EmployeeListPage';


const App = () => {
  const [step, setStep] = useState(1);
  const [employeestep, setemployeeStep] = useState(1);
  const [ bgImgUrl,setBgImgUrl] = useState("https://wallpapers.com/images/hd/hd-ship-in-the-sea-sunset-e2vkyaaw9zh4i8d8.jpg")
  
  const authenticate = sessionStorage.getItem("accessToken");
  
  const dispatch = useDispatch()
  const navigate =useNavigate()

  const user = useSelector(state=>(state?.auth?.user))
  
  useEffect(()=>{
    dispatch(getLists())
    dispatch(getListItems())
    dispatch(getProjects())
  },[])
  

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Homepage />}/>
        
        {
          authenticate ?
          <>
            <Route path='/:id/invitation/:user_id' element={<InvitationPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Homepage />}/>
            <Route path='/:id' element={
              <DashBoard
                bgImgUrl={bgImgUrl}
                setBgImgUrl={setBgImgUrl}
              />}
            />
            <Route path='/projects' element={
              <Project 
                step={step} 
                setStep={setStep}  
                bgImgUrl={bgImgUrl} 
                setBgImgUrl={setBgImgUrl} 
              />}
            >
              <Route index element={
                <BlankProjectTemplate
                  step={step}
                  setStep={setStep}
                  bgImgUrl={bgImgUrl}
                  setBgImgUrl={setBgImgUrl}
                />}
              />
            <Route path='/projects/new' element={
              <BlankProjectTemplate 
                step={step} 
                setStep={setStep}  
                bgImgUrl={bgImgUrl} 
                setBgImgUrl={setBgImgUrl}
              />}
            />
            </Route>
            <Route path='/employee' element={ 
              <EmployeePage
                employeestep={employeestep}
                setemployeeStep={setemployeeStep}
              />} 
            >
              <Route index element={<EmployeeListPage/>}/>
              <Route path='/employee/form' element={
                <EmployeeForm
                  employeestep={employeestep}
                  setemployeeStep={setemployeeStep}
                />} 
              />
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
