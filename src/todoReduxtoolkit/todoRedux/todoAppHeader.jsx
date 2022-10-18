import React from 'react'
import {Input,Button,} from "antd"
import  "./Todoappheader.css"  
import { useSelector, useDispatch } from 'react-redux'
import {add} from "../reduxtool/ReduxSlice"
function TodoAppHeader() {
    const dispatch = useDispatch()
    function Test(){
        dispatch(add())
    }
  return (
    <div>
            <h1 className='text-header'><span>To</span> <span>Do</span> <span>List</span> <span>ReduxToolkit</span></h1>
            <div>
                <Input.Group compact>
                            <Input style={{width:"90%"}}></Input>
                            <Button  style={{width:"10%"}} onClick={Test}>AddToDo</Button>
                </Input.Group>
            </div>
    </div>
  )
}

export default TodoAppHeader