import { createSlice } from "@reduxjs/toolkit";

const CouterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase(state) {
            return state + 1
        },
        decrease(state) {
            return state - 1
        }
      }
})

const {actions, reducer} = CouterSlice;
export const  {increase, decrease} = actions // named export
export default reducer; // export default