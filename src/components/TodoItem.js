import React from 'react'

const TodoItem = ({ todo, onEditClick, onDeleteClick, onCheckClick }) => {

    return (
        <div className="post" key={todo.id}>
            
          <input type="checkbox" className="check-box-styles" defaultChecked={todo.check} onChange={()=> onCheckClick(todo.id,todo.check,todo)}/>
           <span  id='itemtext' >{todo.text}</span> 
            {" "}
            
            <div className="button-bet">
            <button id = "Cancelbnt"  onClick={() => onEditClick(todo)}>Edit</button>
            <button id = "deletebnt" onClick={() => onDeleteClick(todo.id)}>X</button>
             
            </div>
           
               
        </div>
    )
}

export default TodoItem