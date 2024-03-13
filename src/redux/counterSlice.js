import {createSlice} from "@reduxjs/toolkit";
import {dec, inc, incByAmount} from "./counterAction";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: inc,
        decrement: dec,
        incrementByAmount: incByAmount
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer