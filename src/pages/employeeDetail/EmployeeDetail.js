import React from 'react'
import './EmployeeDetail.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getEmployee } from '../../redux/employee/EmployeeAction'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const EmployeeDetail = () => {
    const dispatch = useDispatch() 
    const params = useParams()
  
    useEffect(()=>{
      dispatch(getEmployee())
    },[])
  
    const employee = useSelector(state=>state?.employees?.employees).filter(emp=> emp._id == params.id)[0]
  
  return (
    <div className='emp-detail-page'>
        <div className="employee-detail-top">
        <div className="heading">
            List of Employees
        </div>
        <Link to={`/employee/update/${employee?._id}`} className="add-emp">
            <i className="fa-solid fa-pencil"></i>
            Edit Employee
        </Link>
        </div>
        <div className="employee-detail-bottom">
            {
                employee?.image &&
                <div className="detail-left">
                    <img src={`${process.env.REACT_APP_API_URL}/images/${employee?.image}`} alt="profile_photo" />
                </div>
            }
            <div className="detail-right">
                <div className="section">
                    <h3 className="sec-top">Personal Details</h3>
                    <div className="sec-bottom">
                            {
                                employee?.name &&
                                <div className="detail">
                                    <h4 className='detail-label'>Name : </h4>
                                    <div className='info'>{employee?.name}</div>
                                </div>
                            }
                            {
                                employee?.email &&
                                <div className="detail">
                                    <h4 className='detail-label'>Email : </h4>
                                    <div className='info'>{employee?.email}</div>
                                </div>
                            }
                            {
                                employee?.mobile &&
                                <div className="detail">
                                    <h4 className='detail-label'>Mobile : </h4>
                                    <div className='info'>{employee?.mobile}</div>
                                </div>
                            }
                            {
                                employee?.fatherName &&
                                <div className="detail">
                                    <h4 className='detail-label'>Father's Name : </h4>
                                    <div className='info'>{employee?.fatherName}</div>
                                </div>
                            }
                            {
                                employee?.birthday &&
                                <div className="detail">
                                    <h4 className='detail-label'>Date of Birth : </h4>
                                    <div className='info'>{employee?.birthday}</div>
                                </div>
                            }
                            {
                                employee?.bloodGroup &&
                                <div className="detail">
                                    <h4 className='detail-label'>Blood Group : </h4>
                                    <div className='info'>{employee?.bloodGroup}</div>
                                </div>
                            }
                            {
                                employee?.localAddress &&
                                <div className="detail">
                                    <h4 className='detail-label'>Local Address : </h4>
                                    <div className='info'>{employee?.localAddress}</div>
                                </div>
                            }
                            {
                                employee?.permanentAddress &&
                                <div className="detail">
                                    <h4 className='detail-label'>Permanenet Address : </h4>
                                    <div className='info'>{employee?.permanentAddress}</div>
                                </div>
                            }
                            {
                                employee?.gender &&
                                <div className="detail">
                                    <h4 className='detail-label'>Gender : </h4>
                                    <div className='info'>{employee?.gender.charAt(0).toUpperCase()+employee?.gender.slice(1).toLowerCase()}</div>
                                </div>
                            }
                            {
                                employee?.maritalStatus &&
                                <div className="detail">
                                    <h4 className='detail-label'>Marital Status : </h4>
                                    <div className='info'>{employee?.maritalStatus.charAt(0).toUpperCase()+employee?.maritalStatus.slice(1).toLowerCase()}</div>
                                </div>
                            }
                            {
                                !employee?.anniversaryDate == null ||!employee?.anniversaryDate == undefined ||!employee?.anniversaryDate == 'null' ||!employee?.anniversaryDate == null  &&
                                <div className="detail">
                                    <h4 className='detail-label'>Anniversary : </h4>
                                    <div className='info'>{employee?.anniversaryDate}</div>
                                </div>
                            }
                    </div>
                </div>
                <div className="section">
                    <h3 className="sec-top">Official Details</h3>
                    <div className="sec-bottom">
                            {
                                employee?.designation &&
                                <div className="detail">
                                    <h4 className='detail-label'>Designation : </h4>
                                    <div className='info'>{employee?.designation}</div>
                                </div>
                            }
                            {
                                employee?.department &&
                                <div className="detail">
                                    <h4 className='detail-label'>Department : </h4>
                                    <div className='info'>{employee?.department}</div>
                                </div>
                            }
                            {
                                employee?.empId &&
                                <div className="detail">
                                    <h4 className='detail-label'>Employee Id : </h4>
                                    <div className='info'>{employee?.empId}</div>
                                </div>
                            }
                            {
                                employee?.dateofJoining &&
                                <div className="detail">
                                    <h4 className='detail-label'>Date of Joining : </h4>
                                    <div className='info'>{employee?.dateofJoining}</div>
                                </div>
                            }
                            {
                                employee?.salary &&
                                <div className="detail">
                                    <h4 className='detail-label'>Salary : </h4>
                                    <div className='info'>₹ {employee?.salary}/- per month</div>
                                </div>
                            }
                            {
                                employee?.experienced &&
                                <div className="detail">
                                    <h4 className='detail-label'>Experienced : </h4>
                                    <div className='info'>{employee?.experienced.charAt(0).toUpperCase()+employee?.experienced.slice(1).toLowerCase()}</div>
                                </div>
                            }
                    </div>
                </div>
                <div className="section">
                    <h3 className="sec-top">Bank Details</h3>
                    <div className="sec-bottom">
                            {
                                employee?.bankName &&
                                <div className="detail">
                                    <h4 className='detail-label'>Bank Name : </h4>
                                    <div className='info'>{employee?.bankName}</div>
                                </div>
                            }
                            {
                                employee?.bankAccountNo &&
                                <div className="detail">
                                    <h4 className='detail-label'>Bank Account No : </h4>
                                    <div className='info'>{employee?.bankAccountNo}</div>
                                </div>
                            }
                            {
                                employee?.bankBranchName &&
                                <div className="detail">
                                    <h4 className='detail-label'>Bank Branch Name : </h4>
                                    <div className='info'>{employee?.bankBranchName}</div>
                                </div>
                            }
                            {
                                employee?.bankifsc &&
                                <div className="detail">
                                    <h4 className='detail-label'>Bank IFSC Code : </h4>
                                    <div className='info'>{employee?.bankifsc}</div>
                                </div>
                            }
                    </div>
                </div>
                <div className="section">
                    <h3 className="sec-top">Documents Submitted</h3>
                    <div className="sec-bottom">
                                <div className="detail">
                                    <h4 className='detail-label'>PAN Card : </h4>
                                    <div className='info'>{employee?.panCard ? 'Submitted' : 'Required'}</div>
                                </div>
                                <div className="detail">
                                    <h4 className='detail-label'>Aadhar Front : </h4>
                                    <div className='info'>{employee?.adharf ? 'Submitted' : 'Required'}</div>
                                </div>
                                <div className="detail">
                                    <h4 className='detail-label'>Aadhar Back : </h4>
                                    <div className='info'>{employee?.adharb ? 'Submitted' : 'Required'}</div>
                                </div>
                            {
                                employee?.experienced == 'experienced'
                                ?
                                <>
                                    <div className="detail">
                                    <h4 className='detail-label'>Experience Certificate : </h4>
                                    <div className='info'>{employee?.expCer ? 'Submitted' : 'Required'}</div>
                                    </div>
                                    <div className="detail">
                                    <h4 className='detail-label'>Payslip of 1st month : </h4>
                                    <div className='info'>{employee?.payslip1 ? 'Submitted' : 'Required'}</div>
                                    </div>
                                    <div className="detail">
                                    <h4 className='detail-label'>Payslip of 2nd month : </h4>
                                    <div className='info'>{employee?.payslip2 ? 'Submitted' : 'Required'}</div>
                                    </div>
                                    <div className="detail">
                                    <h4 className='detail-label'>Payslip of 3rd month : </h4>
                                    <div className='info'>{employee?.payslip3 ? 'Submitted' : 'Required'}</div>
                                    </div>
                                </>
                            :                      
                                <div className="detail">
                                <h4 className='detail-label'>Bank Passbook : </h4>
                                <div className='info'>{employee?.passbook ? 'Submitted' : 'Required'}</div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default EmployeeDetail
