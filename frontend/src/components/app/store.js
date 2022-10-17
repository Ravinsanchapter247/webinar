import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pageReducer from '../features/pageSlice'
import subscripeReducer from '../features/subscripeSlice'
import signInReducer from '../features/signInSlice'

const store =configureStore({
    reducer:{
         page:pageReducer,
         subscripe:subscripeReducer,
         signin:signInReducer,
    }
})

export default store;