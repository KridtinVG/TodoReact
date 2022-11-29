import { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import AddTodoForm from './components/AddTodoForm';
import EditForm from './components/EditForm';

const App = () => {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value })
    console.log("Current Todo ", currentTodo);
  }

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));
  
  }, [todos])

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {

    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
          check: false
        }
      ])
    }

    setTodo("");
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(removeItem);
  }

  function handleCheck(id,st,baseTodo) {
    const checkStatus = todos.map((todo) => {
      return {
        id: todo.id,
        text: todo.text,
        check:todo.id === id? todo.check=!st : todo.check}
    })
    setTodos(checkStatus)
    
    
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo })
  }

  function handleUpdateTodo(id, updatedTodo) {

    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEditing(false);
    setTodos(updatedItem);

  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }
  
  console.log(todos)

  return (
    <div className="App">
      <nav className="title-heading">Todo App</nav>

      {isEditing ? (
        <EditForm 
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm 
          todo={todo}
          onAddFormSubmit={handleFormSubmit}
          onAddInputChange={handleInputChange}
        />
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem 

            todo={todo}
            onCheckClick={handleCheck}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;