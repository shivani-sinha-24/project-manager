import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        createProjectRequest: (state) => {
          state.loading = true;
          state.error = null;
        },
        createProjectSuccess: (state, action) => {
          state.loading = false;
          state.projects = action.payload;
        },
        createProjectFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        getProjectsStarted: (state) => {
          state.loading = true;
          state.error = null;
        },
        getProjectsSuccess: (state, action) => {
          state.loading = false;
          state.projects = action.payload;
        },
        getProjectsFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        updateProjectRequest: (state) => {
          state.loading = true;
          state.error = null;
        },
        updateProjectSuccess: (state, action) => {
          state.loading = false;
          state.projects = action.payload;
        },
        updateProjectFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
    }
})
export const {
    getProjectsStarted,
    getProjectsSuccess,
    getProjectsFailure,
    createProjectRequest,
    createProjectSuccess,
    createProjectFailure,
    updateProjectRequest,
    updateProjectSuccess,
    updateProjectFailure,
} = projectSlice.actions;
export default projectSlice.reducer;