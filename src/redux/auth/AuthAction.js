import axios from "axios";
import {toast} from 'react-toastify';
import{
    userRegisterStarted,  userRegisterSuccess,  userRegisterFailure,
    userLoginStarted,  userLoginSuccess,  userLoginFailure,
} from './AuthSlice';

const API_URL = process.env.REACT_APP_API_URL;

export const userRegister = (value) => async (dispatch) =>{
    dispatch(userRegisterStarted)
    try {
        const response = await axios.post(`${API_URL}/userCreate`)
        if(response){
            dispatch(userRegisterSuccess(response.data))
            // toast.success(response.data.message)
        }
    } catch (error) {
        dispatch(userRegisterFailure(error.message))
    }
};

export const userLogin = (value) => async (dispatch) =>{
    dispatch(userLoginStarted)
    try {
        const response = await axios.post(`${API_URL}/userCreate`)
        if(response){
            dispatch(userLoginSuccess(response.data))
            toast.success(response.data.message)
        }
    } catch (error) {
        dispatch(userLoginFailure(error.message))
    }
};

export const getLoggedinUser = (value) => async (diaptch) =>{
    try {
        
    } catch (error) {
        
    }
}