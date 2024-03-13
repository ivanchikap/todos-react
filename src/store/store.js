import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice'
import loginReducer from '../redux/login/loginSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        login: loginReducer
    }
})