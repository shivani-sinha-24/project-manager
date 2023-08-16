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
        userRegisterStarted : state => {
            state.loading = true;
        },
        userRegisterSuccess: (state, action) => {
            state.user = action.payload
        },
        userRegisterFailure: (state, action) => {

        },
        userLoginStarted : state => {
            state.error = null;
        },
        userLoginSuccess: (state, action) => {

            state.user = action.payload
        },
        userLoginFailure: (state, action) => {

        },
        getLoggedinUserStarted: {

        },
        getLoggedinUserSuccess: (state, action) => {

        },
        getLoggedinUserFailure: (state, action) => {

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