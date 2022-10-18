import { createSlice } from '@reduxjs/toolkit'
const init = {
    value:0
}
export const TestSlice = createSlice({
    name : "test",
    initialState: init,
    reducers: {
        add : (state)=>{
             state.value += 1
            
        },
    }
})

export const {add} = TestSlice.actions
export default TestSlice.reducer