import React, { useEffect, useState } from 'react';
import './EmployeeAttendence.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getEmployee } from '../../redux/employee/EmployeeAction';
import image from '../../assets/logos/png-transparent-tableau-software-hd-logo.png'

const EmployeeListPage = ({ setEmployeeModal, setEmpforModal }) => {
    const dispatch = useDispatch();
    const params = useParams();
    const employees = useSelector(state => state?.employees?.employees.filter(item => item._id == params.id));
    useEffect(() => {
        dispatch(getEmployee());
    }, []);

    return (
        <>
            <div className="em-top">
                <div className="em-top-left">Employee Details</div>
            </div>
            <div className="em-bottom leftBottom-30">
                <div className="e-photo">
                    <img src={`${process.env.REACT_APP_API_URL}/images/${employees[0]?.image ? employees[0]?.image : ''}`} alt="" />
                </div>
                <div className="flex">
                    <div className="heading">Personal Details</div>
                    <div className="e-detail"><span>Name:</span><span>{employees[0]?.name ? employees[0]?.name : ''}</span> </div>
                    <div className="e-detail"><span>Email:</span><span>{employees[0]?.email ? employees[0]?.email : ""}</span> </div>
                    <div className="e-detail"><span>Mobile:</span><span>{employees[0]?.mobile ? employees[0]?.mobile : ""}</span> </div>
                    <div className="e-detail"><span>Department:</span><span>{employees[0]?.department ? employees[0]?.department : ""}</span></div>
                    <div className="e-detail"><span>Designation:</span><span>{employees[0]?.designation ? employees[0]?.designation : ""}</span></div>
                </div>
                <div className="flex">
                    <div className="heading">Attendence Details</div>
                    <div className="e-detail"><span>Month:</span><span>August</span> </div>
                    <div className="e-detail"><span>Total Presents:</span><span>12</span> </div>
                    <div className="e-detail"><span>Total Absents:</span><span>2</span> </div>
                    <div className="e-detail"><span>Total Half Days:</span><span>1</span> </div>
                    <div className="e-detail"><span>Paid Holidays left:</span><span>6</span></div>
                </div>
            </div>
            <div className="em-top">
                <div className="em-top-left">Employee Attendence</div>
            </div>
            <div className='emp-list-page'>
                <div className="employee-list-top">
                    <div className="heading">
                        Attendence of Employee
                    </div>
                    <Link to={'/employee/form'} className="add-emp">
                        <i className="fa-solid fa-plus"></i>
                        Add Attendence
                    </Link>
                </div>
                <div className="employee-list-bottom">
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Action</th>
                        </tr>
                        {/* {
                            employees.length > 0 &&
                            employees.map((emp, index, employees) =>
                                <tr >
                                    <td>{emp?.name}</td>
                                    <td>{emp?.email}</td>
                                    <td>{emp.department}</td>
                                    <td>{emp?.designation}</td>
                                    <td>{emp?.salary}</td>
                                    <td>
                                        <>
                                            <Link to={`/employee/attendence/${emp._id}`} className="add-emp">
                                                <button id="attendenceButton">
                                                    <i className="fa-solid fa-plus"></i>
                                                    Attendence
                                                </button>
                                            </Link>
                                        </>
                                    </td>
                                    <td><button onClick={() => { setEmpforModal(employees[index]); setEmployeeModal(true) }} > View </button></td>
                                </tr>)
                        } */}
                    </table>
                </div>
            </div>

        </>
    )
}

export default EmployeeListPage
