import axios from "axios";
import { toast } from "react-toastify";
import {
  getListsStarted,  getListsSuccess,  getListsFailure,
  createListRequest,  createListSuccess,  createListFailure,
  createListItemRequest,  createListItemSuccess,  createListItemFailure,
  updateListItemRequest,  updateListItemSuccess,  updateListItemFailure,
  getListItemsFailure,  getListItemsSuccess,  getListItemsStarted,
  updateSingleListRequest,  updateSingleListSuccess,  updateSingleListFailure,
  updateMultiListRequest,  updateMultiListSuccess,  updateMultiListFailure,
} from './ListSlice'

const API_URL = process.env.REACT_APP_API_URL;

export const getLists = () => async (dispatch) => {
    dispatch(getListsStarted());
    try {
      const response = await axios.get(`${API_URL}/getProjectCard`);
      if(response.data){
        dispatch(getListsSuccess( response.data )); 
      }
    } catch (error) {
      dispatch(getListsFailure(error.message));
    }
};

export const creatList = (value) => async (dispatch) => {
  dispatch(createListRequest());
    try {
      const response = await axios.post(`${API_URL}/createProjectCard`,value);
      if(response.data){
        dispatch(createListSuccess( response.data.projectCard )); 
      }
    } catch (error) {
      dispatch(createListFailure(error.message));
    }
}

export const creatListItem = (value) => async (dispatch) => {
  dispatch(createListItemRequest());
    try {
      const response = await axios.post(`${API_URL}/createtListItem`,value);
      if(response){
        dispatch(createListItemSuccess( response.data.lists )); 
        toast.success(response.data.message)
      }
    } catch (error) {
      dispatch(createListItemFailure(error.message));
    }
}

export const updateListItem = (value) => async (dispatch) => {
  dispatch(updateListItemRequest());
    try {
      const response = await axios.put(`${API_URL}/updatetListItem`,value);
      if(response){
        dispatch(updateListItemSuccess( response.data.lists )); 
        toast.success(response.data.message)
      }
    } catch (error) {
      dispatch(updateListItemFailure(error.message));
    }
}

export const getListItems = () => async (dispatch) => {
  dispatch(getListItemsStarted());
  try {
    const response = await axios.get(`${API_URL}/getListItem`);
    if(response.data){
      dispatch(getListItemsSuccess( response.data )); 
    }
  } catch (error) {
    dispatch(getListItemsFailure(error.message));
  }
};

export const updateSingleList = (value) => async (dispatch) => {
  dispatch(updateSingleListRequest());
    try {
      const response = await axios.put(`${API_URL}/updatetSingleList`,value);
      if(response){
        console.log('ffffffffffff',response.data);
        dispatch(updateSingleListSuccess( response.data.lists )); 
        toast.success(response.data.message)
      }
    } catch (error) {
      dispatch(updateSingleListFailure(error.message));
    }
  };
  
  export const updateMultiList = (value) => async (dispatch) => {
  // console.log('value :',value);
  dispatch(updateMultiListRequest());
    try {
      const response = await axios.put(`${API_URL}/updateMultiList`,value);
      if(response){
        console.log('ffffffffffff',response.data);
        dispatch(updateMultiListSuccess( response.data.lists )); 
        toast.success(response.data.message)
      }
    } catch (error) {
      dispatch(updateMultiListFailure(error.message));
    }
};