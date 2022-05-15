import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name: 'text',
    initialState: {value: []},
    reducers:{
        addText: (state, action) =>{
            state.value.unshift(action.payload)
        }
    }


})

export const {addText} = textSlice.actions
export default textSlice.reducer; 