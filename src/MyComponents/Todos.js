import React from 'react'
import {TodoItem}   from "./TodoItem";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      {props.todos.length ===0? "No Todos to Display":
      props.todos.map((todos)=>{
      return <TodoItem todos ={todos} key ={todos.sno} ondelete={props.ondelete}/>
      })
      }
    </div>
  )
}
export default Todos;