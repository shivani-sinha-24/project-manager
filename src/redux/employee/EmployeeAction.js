import axios from "axios";
import { toast } from "react-toastify";
import {
    getEmployeeStarted,  getEmployeeSuccess,  getEmployeeFailure,
    createEmployeeRequest,  createEmployeeSuccess,  createEmployeeFailure,
    updateEmployeeRequest,  updateEmployeeSuccess,  updateEmployeeFailure,
    deleteEmployeeRequest,  deleteEmployeeSuccess,  deleteEmployeeFailure,
} from './EmployeeSlice'

const API_URL = process.env.REACT_APP_API_URL;

export const getEmployee = (value) => async (dispatch) => {
    dispatch(getEmployeeStarted());
    try {
      const response = await axios.get(`${API_URL}/get-employee`);
      if(response?.data){
        dispatch(getEmployeeSuccess( response?.data )); 
      }
    } catch (error) {
      dispatch(getEmployeeFailure(error.message));
    }
};

export const creatEmployee = (value) => async (dispatch) => {
  dispatch(createEmployeeRequest());
    try {
      const response = await axios.post(`${API_URL}/addEmp`,value);
      if(response.data){
        dispatch(createEmployeeSuccess( response.data.projectCard )); 
      }
    } catch (error) {
      dispatch(createEmployeeFailure(error.message));
    }
};

export const updateEmployee = (value) => async (dispatch) => {
  dispatch(updateEmployeeRequest());
    try {
      const response = await axios.put(`${API_URL}/update-employee`,value);
      if(response.status==200){
        dispatch(updateEmployeeSuccess( response.data));
        toast.success(response.data.message)
      }
    } catch (error) {
      dispatch(updateEmployeeFailure(error.message));
    }
};

export const deleteEmployee = (value) => async (dispatch) => {
    dispatch(deleteEmployeeRequest());
      try {
        const response = await axios.put(`${API_URL}/delete-employee`,value);
        if(response.status==200){
          dispatch(deleteEmployeeSuccess( response.data));
          toast.success(response.data.message)
        }
      } catch (error) {
        dispatch(deleteEmployeeFailure(error.message));
      }
};
