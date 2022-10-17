import { createSlice } from "@reduxjs/toolkit";
//import { UsersData } from "../../fakeData";


const initialState={
    popup:false,
   
}

const subscripeSlice =createSlice({
    name:"subscripe",
    initialState,
    reducers:{
        addSubscripe: (state,action) =>{
            state.popup=action.payload.popup;
        },

        
    }
})

export  const {addSubscripe} =subscripeSlice.actions;
export const selectPopup = state =>state.subscripe.popup;

export default subscripeSlice.reducer;