import { createSlice } from '@reduxjs/toolkit'
const init = {
    todoList:[
       
            {
              key: '1',
              name: 'John Brown',
              tags: "Phải làm",
              
            },
            {
              key: '2',
              name: 'Jim Green',
              address: 'London No. 1 Lake Park',
              tags: "Cần làm",
            },
            {
              key: '3',
              name: 'Joe Black',
              address: 'Sidney No. 1 Lake Park',
              tags: "Làm",
            },
          
    ]
}
localStorage.getItem("todoListRedux")?init.todoList=JSON.parse(localStorage.getItem("todoListRedux")):{}
export const TestSlice = createSlice({
    name : "test",
    initialState: init,
    reducers: {
        add : (state,actions)=>{
            console.log(state.todoList);
            console.log(actions);
            state.todoList = [... state.todoList,actions.payload]
            localStorage.setItem("todoListRedux",JSON.stringify( state.todoList ))
            
        },
    }
})

export const {add} = TestSlice.actions
export default TestSlice.reducer