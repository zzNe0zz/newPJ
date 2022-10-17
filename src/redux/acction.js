export const addTodo = (data)=>{
    return{
        type:"todoList/Add",
        payload: data
    }
        
    
}
export const deleTodo =(data)=>{
    return{
        type:"todoLis/Dele",
        payload : data
    }
}
export const successTodo = (data)=>{
    return{
        type:"todoLis/success",
        payload : data
    }
}