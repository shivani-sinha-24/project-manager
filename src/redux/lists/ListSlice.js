import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [],
  listItems:[],
  sampleList:[],
  loading: false,
  error: null,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    createListRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createListSuccess: (state, action) => {
      state.loading = false;
      state.lists = action.payload;
    },
    createListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getListsStarted: (state) => {
      state.loading = true;
      state.error = null;
    },
    getListsSuccess: (state, action) => {
      state.loading = false;
      state.lists = action.payload;
    },
    getListsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getSampleProjectCardStarted: (state) => {
      state.loading = true;
      state.error = null;
    },
    getSampleProjectCardSuccess: (state, action) => {
      state.loading = false;
      state.sampleList = action.payload;
    },
    getSampleProjectCardFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createListItemRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createListItemSuccess: (state, action) => {
      state.loading = false;
      state.lists = action.payload;
    },
    createListItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateListItemRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateListItemSuccess: (state, action) => {
      state.loading = false;
      state.lists = action.payload.lists;
      state.listItems = action.payload.listItems;
    },
    updateListItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getListItemsStarted: (state) => {
      state.loading = true;
      state.error = null;
    },
    getListItemsSuccess: (state, action) => {
      state.loading = false;
      state.listItems = action.payload;
    },
    getListItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateSingleListRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSingleListSuccess: (state, action) => {
      state.loading = false;
      state.lists = action.payload;
    },
    updateSingleListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateMultiListRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateMultiListSuccess: (state, action) => {
      state.loading = false;
      state.lists = action.payload;
    },
    updateMultiListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getListsStarted,
    getListsSuccess,
    getListsFailure,
    getSampleProjectCardStarted,
    getSampleProjectCardSuccess,
    getSampleProjectCardFailure,
    createListRequest,
    createListSuccess,
    createListFailure,
    createListItemRequest,
    createListItemSuccess,
    createListItemFailure,
    updateListItemRequest,
    updateListItemSuccess,
    updateListItemFailure,
    getListItemsFailure,
    getListItemsSuccess,
    getListItemsStarted,
    updateSingleListRequest,
    updateSingleListSuccess,
    updateSingleListFailure,
    updateMultiListRequest,
    updateMultiListSuccess,
    updateMultiListFailure,
} = listSlice.actions;
export default listSlice.reducer;