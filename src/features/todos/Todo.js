import React from "react";
import {todoRemoved} from "./todosSlice"
import {useDispatch} from "react-redux"
function Todo({ todo}) {
  
const dispatch=useDispatch()

  function handleDelete(){
    dispatch(todoRemoved(todo.id))
  }
  return (
  <li> 
    {todo.text}
    <button onClick={handleDelete}>delete</button>
    </li>)
}

export default Todo;
