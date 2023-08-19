import React, { useEffect } from 'react'
import './EmployeeModal.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getEmployee } from '../../redux/employee/EmployeeAction';

const EmployeeModal = ({empforModal,setEmployeeModal}) => {

  const dispatch = useDispatch() 
  
  useEffect(()=>{
    dispatch(getEmployee())
  },[])

  const employee = useSelector(state=>state?.employees?.employees).filter(emp=> emp.email == empforModal.email)[0]

  return (
    <div className='emp-modal'>
        <div className="emp-modal-section">
            <div className="em-top">
              <div className="em-top-left">Employee Details</div>
              <div className="em-top-right"><i className="fa-solid fa-xmark fa-lf" onClick={()=>setEmployeeModal(false)}></i></div>
            </div>
            <div className="em-bottom">
              <div className="e-photo">
                <img src={`${process.env.REACT_APP_API_URL}/images/${employee.image}`} alt=""/>

              </div>
              <div className="heading">Personal Details</div>
              <div className="flex">
                <div className="e-detail"><span>Name:</span><span>{employee.name}</span> </div>
                <div className="e-detail"><span>Email:</span><span>{employee.email}</span> </div>
                <div className="e-detail"><span>Mobile:</span><span>{employee.mobileNo}</span> </div>
              </div>
              <div className="heading">Official Details</div>
              <div className="flex">
                <div className="e-detail"><span>Department:</span><span>{employee.department}</span></div>
                <div className="e-detail"><span>Designation:</span><span>{employee.designation}</span></div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default EmployeeModal
