import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees:[],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: 'Employee',
  initialState,
  reducers: {
    createEmployeeRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createEmployeeSuccess: (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    },
    createEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getEmployeeStarted: (state) => {
      state.loading = true;
      state.error = null;
    },
    getEmployeeSuccess: (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    },
    getEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateEmployeeSuccess: (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    },
    updateEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateEmployeeRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteEmployeeSuccess: (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    },
    deleteEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteEmployeeRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
});

export const {
    getEmployeeStarted,  getEmployeeSuccess,  getEmployeeFailure,
    createEmployeeRequest,  createEmployeeSuccess,  createEmployeeFailure,
    updateEmployeeRequest,  updateEmployeeSuccess,  updateEmployeeFailure,
    deleteEmployeeRequest,  deleteEmployeeSuccess,  deleteEmployeeFailure,
} = employeeSlice.actions;

export default employeeSlice.reducer;