import React from 'react'
import './EmployeeListPage.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

const EmployeeListPage = ({}) => {
  const dispatch = useDispatch();
  const employees = useSelector(state=>console.log(state))
  return (
    <div>
      EmployeeListPage
    </div>
  )
}

export default EmployeeListPage
