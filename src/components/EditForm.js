import React from 'react'

const EditForm = ({ 
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
}) => {
    return (
        <form onSubmit={onEditFormSubmit}>
          <h2>Edit Todo</h2>
          <input className="input-style"
            type="text" 
            name="editTodo"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={onEditInputChange}
          />

          <button id='Updatebnt' type="submit">Update</button>
          <button id='Cancelbnt' onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditForm