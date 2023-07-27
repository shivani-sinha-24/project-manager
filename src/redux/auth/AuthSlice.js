import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:'',
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRegisterStarted: {

        },
        userRegisterSuccess: {

        },
        userRegisterFailure: {

        },
        userLoginStarted: {

        },
        userLoginSuccess: {

        },
        userLoginFailure: {

        },
        getLoggedinUserStarted: {

        },
        getLoggedinUserSuccess: {

        },
        getLoggedinUserFailure: {

        },
    }
})

export const {
    userRegisterStarted,
    userRegisterSuccess,
    userRegisterFailure,
    userLoginStarted,
    userLoginSuccess,
    userLoginFailure,
    getLoggedinUserStarted,
    getLoggedinUserSuccess,
    getLoggedinUserFailure,
} = authSlice.actions;

export default authSlice.reducer