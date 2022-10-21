import React from 'react'
import {Input,Button,} from "antd"
import  "./Todoappheader.css"  
import { useSelector, useDispatch } from 'react-redux'
import {add} from "../reduxtool/ReduxSlice"
import {v4 as uuidv4} from "uuid"
function TodoAppHeader() {
    const dispatch = useDispatch()
    function Test(){
      let value = document.querySelector(".input").value
        dispatch(add(
          {
            key : uuidv4(),
            name : value,
            tags: "Cần làm",
            status : false,  

          }
        ))
    }
  return (
    <div>
            <h1 className='text-header'><span>To</span> <span>Do</span> <span>List</span> <span>ReduxToolkit</span></h1>
            <div>
                <Input.Group compact>
                            <Input style={{width:"90%"}} className="input"></Input>
                            <Button  style={{width:"10%"}} onClick={Test}>AddToDo</Button>
                </Input.Group>
            </div>
    </div>
  )
}

export default TodoAppHeader