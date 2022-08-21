import React from 'react'

const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
    return (
        <form onSubmit={onAddFormSubmit}>
          <input 
            id='inputAdd'
            type="text" 
            name="todo" 
            placeholder="Create a new todo"
            value={todo} 
            onChange={onAddInputChange}
          />
          <button id='Updatebnt' type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm