import { createSlice } from "@reduxjs/toolkit";

const state=[];


const toDoReducer=createSlice({
    name:"todo",
    initialState:state, 
    reducers:{
        // add list
        addTodos:(state, action) => {
            state.push(action.payload);
            return state;
        },

      
      
    }
})

export const {addTodos} =toDoReducer.actions
export const reducer = toDoReducer.reducer