import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from "redux"
import  TestSlice  from './ReduxSlice'

  const storeTool = configureStore({
    reducer : {
        test : TestSlice,
    }
})
export default storeTool