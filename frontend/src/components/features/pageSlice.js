import { createSlice } from "@reduxjs/toolkit";
//import { UsersData } from "../../fakeData";


const initialState = {
    name: "",

}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        addPage: (state, action) => {
            state.name = action.payload.name;
        },


    }
})

export const { addPage } = pageSlice.actions;
export const selectPageName = state => state.page.name;

export default pageSlice.reducer;