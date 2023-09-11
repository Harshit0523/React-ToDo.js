import React from 'react'

export const TodoItem =({todos,ondelete})=> {
  return (
    <div>
        <h4>{todos.title}</h4>
        <p>{todos.desc}</p>
         <button className="btn btn-s, btn-danger" onClick={()=>{ondelete(todos)}} >Delete</button>
    </div>
  )
}

export default TodoItem