import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count:0
}

var counterSlice = createSlice({
    name:'cntr',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count++;
        },
        decrement:(state,action)=>{
            state.count--
        },
        react:(state,action)=>{
            state.count=initialState.count;
        }
    }
})

export var {increment,decrement,react}=counterSlice.actions;

var counterReducer = counterSlice.reducer;

export default counterReducer;