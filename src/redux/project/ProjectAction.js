import axios from "axios";
import {
  getProjectsStarted, getProjectsSuccess, getProjectsFailure,
  createProjectRequest, createProjectSuccess, createProjectFailure,
  updateProjectRequest, updateProjectSuccess, updateProjectFailure,
} from './ProjectSlice'

const API_URL = process.env.REACT_APP_API_URL;

export const createProject = (value) => async (dispatch) => {
  dispatch(createProjectRequest())
  try {
    const response = await axios.post(`${API_URL}/createProject`, value);
    if (response) {
      dispatch(createProjectSuccess(response?.data?.project))
    }

  } catch (error) {
    dispatch(createProjectFailure())
  }
}
export const getProjects = (value) => async (dispatch) => {
  dispatch(getProjectsStarted());
  try {
    const response = await axios.get(`${API_URL}/getProject`);
    if (response?.data) {
      dispatch(getProjectsSuccess(response?.data));
    }
  } catch (error) {
    dispatch(getProjectsFailure(error.message));
  }
};