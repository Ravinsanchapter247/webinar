import { createSlice } from "@reduxjs/toolkit";
//import { UsersData } from "../../fakeData";


const initialState = {
    popup: false,
    active: false,

}

const subscripeSlice = createSlice({
    name: "subscripe",
    initialState,
    reducers: {
        addSubscripe: (state, action) => {
            state.popup = action.payload.popup;
            state.active = action.payload.active;
        },


    }
})

export const { addSubscripe } = subscripeSlice.actions;
export const selectPopup = state => state.subscripe.popup;
export const selectActiveSubscripe = state => state.subscripe.active;

export default subscripeSlice.reducer;