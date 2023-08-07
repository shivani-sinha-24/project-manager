import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import listReducer from '../redux/lists/ListSlice';
import authReducer from '../redux/auth/AuthSlice';
import projectReducer from '../redux/project/ProjectSlice'

const rootReducer = combineReducers({
  lists: listReducer,
  auth: authReducer,
  projects: projectReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;