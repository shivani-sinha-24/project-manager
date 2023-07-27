import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import listReducer from '../redux/lists/ListSlice'

const store = configureStore({
  reducer: listReducer,
  middleware: [thunk]
});

export default store;