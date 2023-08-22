import React from 'react'
import './EmployeePage.css'
import { Outlet, useNavigate } from 'react-router-dom'
import EmployeeModal from '../../Modal/EmployeeModal/EmployeeModal';

const EmployeePage = ({employeestep, setemployeeStep, employeeModal ,setEmployeeModal, empforModal}) => {
    
    const navigate = useNavigate();
    const showPreviousStep = (employeestep)=>{
        setemployeeStep(employeestep)
    }
  
  return (
    <div className='employee-page'>
        {
            employeeModal && <EmployeeModal empforModal={empforModal} setEmployeeModal={setEmployeeModal} />
        }
        <div className='employee-page-top'>
            <div className="left">
                <button>
                    <span className="material-symbols-rounded" onClick={()=>{employeestep=='1'?navigate(-1):showPreviousStep(employeestep-1)}}>arrow_back</span>
                </button>
                <span>Employee Page </span>
                {/* <span>/ Employee Data Form</span> */}
            </div>
            <div className="right">
                <button>
                    <i className="fa-solid fa-xmark fa-lf" onClick={()=>navigate('/')}></i>
                </button>
            </div>
        </div>
        <div className="employee-page-bottom">
        <Outlet/>
        </div>
    </div>
  )
}

export default EmployeePage
