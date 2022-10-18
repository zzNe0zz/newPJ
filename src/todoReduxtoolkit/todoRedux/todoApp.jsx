import React from 'react'
import TodoAppHeader from './todoAppHeader'
import TodoAppbody from './todoAppbody'
import {Provider} from "react-redux"
function todoApp() {
  return (
   
    <div>
        <TodoAppHeader></TodoAppHeader>
        <TodoAppbody></TodoAppbody>
    </div>
 
  )
}

export default todoApp