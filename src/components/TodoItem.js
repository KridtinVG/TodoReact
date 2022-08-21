import React from 'react'

const TodoItem = ({ todo, onEditClick, onDeleteClick, onCheckClick }) => {

    return (
        <li  key={todo.id}>
            
          <input type="checkbox" defaultChecked={todo.check} onChange={()=> onCheckClick(todo.id,todo.check,todo)}/>
            {todo.text}
            {" "}
            <button  onClick={() => onEditClick(todo)}>Edit</button>
            <button onClick={() => onDeleteClick(todo.id)}>X</button>
            
        </li>
    )
}

export default TodoItem