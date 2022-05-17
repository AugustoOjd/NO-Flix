// import { combineReducers } from "redux";

// const reducer = combineReducers({})

// export default reducer

import { createSlice } from "@reduxjs/toolkit";


export const movieSlice = createSlice({
    name: 'favorites',
    initialState: {value: []},
    // initialState: {value: movies},
    reducers: {
        deleMovie: (state, action) =>{
            state.value = state.value.filter((movie)=> movie.id !== action.payload.id)
        },
        addMovie: (state, action)=>{
            
            if(!state.value.some((e)=> e.id == action.payload.id ))
            state.value.push(action.payload)
        }
    },
})




export const {deleMovie, addMovie} = movieSlice.actions
export default movieSlice.reducer;
