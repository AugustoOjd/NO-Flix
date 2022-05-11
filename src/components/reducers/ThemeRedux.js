import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {value: true},
    reducers:{
        change: (state) =>{
            state.value = !state.value
        }
    }


})

export const {change} = themeSlice.actions
export default themeSlice.reducer;