import axios from "axios";
import { toast } from 'react-toastify';
import {
    userRegisterStarted, userRegisterSuccess, userRegisterFailure,
    userLoginStarted, userLoginSuccess, userLoginFailure,
} from './AuthSlice';

const API_URL = process.env.REACT_APP_API_URL;

export const userRegister = (value) => async (dispatch) => {
    dispatch(userRegisterStarted)
    try {
        const response = await axios.post(`${API_URL}/userCreate`, value)
        if (response?.status == 200) {
            dispatch(userRegisterSuccess(response?.data?.data))
            toast.success(response?.data?.message)
        }
    } catch (error) {
        dispatch(userRegisterFailure(error.message))
    }
};

export const userLogin = (value) => async (dispatch) => {
    dispatch(userLoginStarted)
    try {
        const response = await axios.post(`${API_URL}/userLogin`, value)
        if (response?.data?.data?.status_code == 200) {
            sessionStorage.setItem("accessToken", response?.data?.data?.token);
            sessionStorage.setItem("userId", response?.data?.data?.responseUser?._id);
            sessionStorage.setItem("name", response?.data?.data?.responseUser?.fullName);
            sessionStorage.setItem("email", response?.data?.data?.responseUser?.email);
            dispatch(userLoginSuccess(response?.data?.data?.responseUser));
            window.location.href = '/';
            toast.success(response?.data?.message)
        }else{
        toast.error(response?.data?.message)
        }
    } catch (error) {
        dispatch(userLoginFailure(error.message))
        toast.error(error.message)
    }
};

export const getLoggedinUser = (value) => async (diaptch) => {
    try {

    } catch (error) {

    }
}