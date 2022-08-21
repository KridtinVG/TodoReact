import React from 'react'

const TodoItem = ({ todo, onEditClick, onDeleteClick, onCheckClick }) => {

    return (
        <li  key={todo.id}>
            
          <input type="checkbox" defaultChecked={todo.check} onChange={()=> onCheckClick(todo.id,todo.check,todo)}/>
           <span  id='itemtext' >{todo.text}</span> 
            {" "}
            <button  onClick={() => onEditClick(todo)}>Edit</button>
            <button id = "deletebnt" onClick={() => onDeleteClick(todo.id)}>X</button>
            
        </li>
    )
}

export default TodoItem