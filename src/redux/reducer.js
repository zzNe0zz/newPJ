let dataAll ={
        login:{},
        todoList : [
          
        ],
}
 localStorage.getItem("todoListRedux")?dataAll=JSON.parse( localStorage.getItem("todoListRedux")):localStorage.setItem("todoListRedux",JSON.stringify(dataAll))
const rootReducer = (state=dataAll,action)=>{
  console.log(action);
    switch (action.type) {
        case 'todoList/Add':

          return {
                ...state,
                todoList: [...state.todoList,action.payload] ,
           
        };
        case "todoLis/Dele":
          return{
            ...state,
            todoList: state.todoList.filter((value)=>{return value.key !== action.payload.key})
          };
          case "todoLis/success":
          return{
            ...state,
            todoList: state.todoList.filter((value)=>{return value.key === action.payload.key? value.succsess=true:{}})
          };
          case "todoLis/fix":
            return{
              ...state,
              todoList:  state.todoList.map(function(value,index){
                if(value.key==action.payload.key){
                  value.name = action.payload.name
                  value.tags = action.payload.tags
                  
                }
                return value
              })
            };
        default:
          return state
      }
}
   

export default rootReducer