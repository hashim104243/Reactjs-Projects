// store.js
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counterVal: 0 },
//   reducers: {
//     inc: (state) => {
//       state.counterVal++;
//     },
//     dec: (state) => {
//       state.counterVal--;
//     },
//     add: (state, action) => {
//       state.counterVal += action.payload;
//     },
//     subtract: (state, action) => {
//       state.counterVal -= action.payload;
//     }
//   }
// });

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer
//   }
// });

// export const counterAction = counterSlice.actions;
// export default store;






import { configureStore, createSlice } from "@reduxjs/toolkit";
import privacySlice from "./Privacy";
import counterSlice from "./Counter"




const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }
})


export default store;




// const initValue = {
//   counter: 0,
//   privacy: false
// }
// const counterReducer = (store = initValue, action) => {
//   if (action.type == inc) {
//     return { ...store, counter: store.counter + 1 }
//   }
//   else if (action.type == dec) {
//     return { ...store, counter: store.counter - 1 }
//   }
//   else if (action.type == sub) {
//     return { ...store, counter: store.counter - Number(action.payload.number) }
//   }
//   else if (action.type == add) {
//     return { counter: store.counter + Number(action.payload.number) }
//   }
//   else if (action.type == privacy) {
//     return { ...store, privacy: !store.privacy }
//   }
//   return store;
// }
// const store = createStore(counterReducer)
