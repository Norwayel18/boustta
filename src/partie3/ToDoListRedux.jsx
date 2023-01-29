import { useDispatch, useSelector } from "react-redux"
import "./toDolist.css"

import { Add,Edit,Delete } from "./config/Action"
import { useState } from "react"

const ToDoListRedux = () => {
    //hooks
    const newTask = useSelector(state=>state.todos)
    const dispatch=useDispatch()
    const [task,setTask] = useState()
    //functions / handle
    const appendTask =(e)=>{
        setTask(e.target.value)
        
    }
    return (
    <>
    <div className="container-parent">
        <div className="addNewTask">
            <input type="text" onChange={appendTask} value={task}/>
            <button  onClick={()=>{dispatch(Add(task)),setTask("")}}>Add</button>
        </div>
        {console.log("nax",newTask)}
        {newTask.map((task,index)=>{
            
            return(task.text?<div className="container-tasks" key={index}>
            <div className="task">{task.text}</div>
            <div className="btns">
            <button onClick={()=>dispatch(Edit(task.id,prompt("edit here :")))}>Update</button>
            <button onClick={()=>dispatch(Delete(task.id))}>Delete</button>
            </div>
        </div>:"")
        }
        )}
        
    </div>
    </>
  )
}

export default ToDoListRedux