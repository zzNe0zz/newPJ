let dataAll ={
        login:{},
        todoList : [
          { key: '1', name: 'học redux',  tags: "Cao",succsess:false},
          {key: '2',name: 'đá bóng',   tags: "Trung bình",succsess:true },
          {key: '3',name: 'xem phim',tags: "Kém",succsess:false},
        ],
}

const rootReducer = (state=dataAll,action)=>{
    switch (action.type) {
        case 'todoList/Add':
          return {
                ...state,
                todoList: [...state.todoList,action.payload]
            
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
        default:
          return state
      }
}
   

export default rootReducer