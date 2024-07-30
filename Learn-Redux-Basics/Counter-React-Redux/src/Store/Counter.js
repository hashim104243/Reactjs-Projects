import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice(
  {
    name: "counter",
    initialState: { counterVal: 0 },
    reducers: {
      inc: (state) => {
        state.counterVal++
      },
      dec: (state) => {
        state.counterVal--
      },
      add: (state, action) => {
        state.counterVal += Number(action.payload);
      },
      subtract: (state, action) => {
        state.counterVal -= Number(action.payload);
      }
    }
  }
)
export const counterAction = counterSlice.actions;
export default counterSlice;