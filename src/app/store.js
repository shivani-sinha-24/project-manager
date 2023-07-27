import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import listReducer from '../redux/lists/ListSlice';
import authReducer from '../redux/auth/AuthSlice';

const rootReducer = combineReducers({
  lists: listReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;