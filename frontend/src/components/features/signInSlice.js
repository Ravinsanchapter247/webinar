import { createSlice } from "@reduxjs/toolkit";
//import { UsersData } from "../../fakeData";


const initialState={
    popup:false,
   
}

const signInSlice =createSlice({
    name:"signin",
    initialState,
    reducers:{
        addSignIn: (state,action) =>{
            state.popup=action.payload.popup;
        },

        
    }
})

export  const {addSignIn} =signInSlice.actions;
export const selectPopupSingnIn = state =>state.signin.popup;

export default signInSlice.reducer;