import React, { useEffect, useState } from 'react'
import './EmployeeListPage.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmployee } from '../../redux/employee/EmployeeAction';

const EmployeeListPage = ({ setEmployeeModal, setEmpforModal }) => {
  const dispatch = useDispatch();
  const employees = useSelector(state=>state?.employees?.employees)

  useEffect(()=>{
    dispatch(getEmployee());
  },[])
  
  const employeesArray = [
    {
      _id: 1,
      name: "John Doe",
      email: "john@example.com",
      department: "IT",
      designation: "Developer",
      salary: 50000,
    },
    {
      _id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      department: "HR",
      designation: "HR Manager",
      salary: 60000,
    },
    {
      _id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      department: "Sales",
      designation: "Sales Executive",
      salary: 45000,
    },
    {
      _id: 4,
      name: "Emily Brown",
      email: "emily@example.com",
      department: "Marketing",
      designation: "Marketing Specialist",
      salary: 55000,
    },
    {
      _id: 5,
      name: "David Lee",
      email: "david@example.com",
      department: "Finance",
      designation: "Financial Analyst",
      salary: 58000,
    },
    {
      _id: 6,
      name: "Sophia Williams",
      email: "sophia@example.com",
      department: "IT",
      designation: "System Administrator",
      salary: 52000,
    },
    {
      _id: 7,
      name: "Daniel Miller",
      email: "daniel@example.com",
      department: "Sales",
      designation: "Sales Manager",
      salary: 65000,
    },
    {
      _id: 8,
      name: "Olivia Davis",
      email: "olivia@example.com",
      department: "HR",
      designation: "HR Specialist",
      salary: 48000,
    },
    {
      _id: 9,
      name: "William Wilson",
      email: "william@example.com",
      department: "Marketing",
      designation: "Marketing Manager",
      salary: 62000,
    },
    {
      _id: 10,
      name: "Ava Martinez",
      email: "ava@example.com",
      department: "Finance",
      designation: "Accountant",
      salary: 53000,
    },
    // Add more employee objects here
  ];
  return (
    <div className='emp-list-page'>
      
      <div className="employee-list-top">
          <div className="heading">
          List of Employees
          </div>
          <Link to={'/employee/form'} className="add-emp">
            <i className="fa-solid fa-plus"></i>
            Add Employees
          </Link>
      </div>
      <div className="employee-list-bottom">
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
            {
              employees.length>0 &&
              employees.map((emp,index,employees)=>
              <tr onClick={()=>{setEmpforModal(employees[index]);setEmployeeModal(true)}}>
                <td>{emp?.name}</td>
                <td>{emp?.email}</td>
                <td>{emp.department}</td>
                <td>{emp?.designation}</td>
                <td>{emp?.salary}</td>
              </tr>)
            }
        </table>
      </div>
    </div>
  )
}

export default EmployeeListPage
