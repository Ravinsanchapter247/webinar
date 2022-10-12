import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pageReducer from '../features/pageSlice'


const store =configureStore({
    reducer:{
         page:pageReducer,
    }
})

export default store;