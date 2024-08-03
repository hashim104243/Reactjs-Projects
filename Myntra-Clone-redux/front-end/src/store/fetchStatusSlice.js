
// import { createSlice } from "@reduxjs/toolkit"

// const fetchStatusSlice = createSlice({
//   name: "fetchStatus",
//   initialState: {
//     fetchDone: false,
//     currentlyfetching: false
//   },
//   reducers: {
//     markFetchDone: (state, action) => {
//       return state.fetchDone = true;
//     },
//     markFetchingStarted: (state, action) => {
//       return state.currentlyfetching = true;
//     },
//     markFetchingFinished: (state, action) => {
//       return state.currentlyfetching = false;
//     }
//   }
// })

// export const fetchStatusActions = fetchStatusSlice.actions;
// export default fetchStatusSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetchDone: false,
  currentlyFetching: false,
  // other state variables
};

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState,
  reducers: {
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const { markFetchingStarted, markFetchDone, markFetchingFinished } = fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;