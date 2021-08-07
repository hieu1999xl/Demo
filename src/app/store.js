import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/CounterSlice'
import userReducer from '../features/Auth/userSlice'

const rootReducer ={
    counter: counterReducer,
    user: userReducer
}

const store = configureStore({
    reducer: rootReducer,
})

export default store