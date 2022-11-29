import React from 'react'

const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
    return (
      <div className="add-container">
        <form onSubmit={onAddFormSubmit}>
          <input className="input-style"
            id='inputAdd'
            type="text" 
            name="todo" 
            placeholder="Create a new todo"
            value={todo} 
            onChange={onAddInputChange}
          />          
        </form>
        <button id='Updatebnt' type="submit" onClick={onAddFormSubmit}>Add</button>
      </div>
        
    )
}

export default AddTodoForm