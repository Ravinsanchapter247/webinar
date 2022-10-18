import { createSlice } from "@reduxjs/toolkit";
//import { UsersData } from "../../fakeData";


const initialState={
    popup:false,
    active:false
   
}

const signInSlice =createSlice({
    name:"signin",
    initialState,
    reducers:{
        addSignIn: (state,action) =>{
            state.popup=action.payload.popup;
            state.active=action.payload.active;
        },

        
    }
})

export  const {addSignIn} =signInSlice.actions;
export const selectPopupSingnIn = state =>state.signin.popup;
export const selectActive = state =>state.signin.active;

export default signInSlice.reducer;