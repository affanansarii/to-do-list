import './App.css';
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks([...tasks, newTask]);
  }

  const editTask = (editedText) => {

    setTasks(tasks.map((task) => task.id === taskToEdit.id ? { ...task, text: editedText } : task));
    setTaskToEdit(null);

  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const startEditTask = (task) => {
    setTaskToEdit(task);
  }

  return (
    <div className="App">

      <h1>Todo List</h1>

      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList tasks={tasks} deleteTask={deleteTask} startEditTask={startEditTask} />

    </div>
  );
}

export default App;
