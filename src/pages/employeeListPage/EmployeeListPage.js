import React, { useEffect, useState } from 'react'
import './EmployeeListPage.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEmployee, getEmployee } from '../../redux/employee/EmployeeAction';
import DataTable, { createTheme } from "react-data-table-component";

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198"
  },
  background: {
    default: "#002b36"
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF"
  },
  divider: {
    default: "#073642"
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)"
  }
});

const EmployeeListPage = ({ setEmployeeModal, setEmpforModal }) => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state?.employees?.employees)
  const [filteredData, setFilteredData] = useState(employees);

  const handleSearch = (searchValue) => {
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchValue.toLowerCase()) || employee.email.toLowerCase().includes(searchValue.toLowerCase())  || employee.department.toLowerCase().includes(searchValue.toLowerCase()) || employee.designation.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };


  useEffect(() => {
    dispatch(getEmployee());
  }, [])

  const columns = [
    {
      name: "Employee ID",
      selector: (row) => row._id,
      sortable: true
    },
    {
      name: "Employee Name",
      selector: (row) => row.name,
      sortable: true
    },{
      name: "Employee Email",
      selector: (row) => row.email,
      sortable: true       
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
      sortable: true
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
      sortable: true
    },
    {
      name: "Attendence",
      selector: (row) => {},
      cell: (row) =>(
      <Link to={`/employee/attendence/${row._id}`} className="add-emp">
        <button id="attendenceButton" style={{backgroundColor:'#ebd805',height:'fit-content',padding:'8px 10px',border:'1px solid black',borderRadius:'5px',fontWeight:'bolder',display:'flex',alignItems:'center',gap:'5px'}}>
          <i className="fa-solid fa-plus fa-lg"></i>Attendence
        </button>
      </Link>
      )
    },
    {
      name: "Action",
      selector: (row) => row.action,
      cell: (row) => (
        <span className='action-btns'>
          <Link to={`/employee/${row._id}`}>
            <button className="tb-btn-action" style={{backgroundColor:'#ebd805',height:'fit-content',padding:'8px 10px',border:'none',borderRadius:'5px'}}>
              <i className="fa-solid fa-lg fa-eye" style={{color:'white'}}></i>
            </button>
          </Link>
          <Link to={`/employee/update/${row._id}`} className="add-emp">
            <button className="tb-btn-action" style={{backgroundColor:'#057ceb',height:'fit-content',padding:'8px 10px',border:'none',borderRadius:'5px'}}>
              <i className="fa-solid fa-lg fa-pencil" style={{color:'white'}}></i>
            </button>
          </Link>
          <button className="tb-btn-action" style={{backgroundColor:'red',height:'fit-content',padding:'8px 10px',border:'none',borderRadius:'5px'}} onClick={() => handleDeleteEmployee(row._id)}>
            <i className="fa-solid fa-lg fa-trash" style={{color:'white'}}></i>
          </button>
        </span>
      ),
    },
  ];

  const handleDeleteEmployee = (employeeId) => {
    dispatch(deleteEmployee(employeeId))
  };

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
        <DataTable
          columns={columns}
          data={filteredData?.length ? filteredData : employees}
          pagination
          subHeader
          subHeaderComponent={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input style={{ padding:'8px 10px', borderRadius:'5px'}} type="text" placeholder="Search employees here..." onChange={(e) => handleSearch(e.target.value)} />
            </div>
          }
        />
      </div>
    </div>
  )
}

export default EmployeeListPage
