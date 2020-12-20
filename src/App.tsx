import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import { nanoid } from 'nanoid';
import { Task } from './data/TaskDto';

// init
const initDate: Task[] = [];

// Appコンポーネント
const App = () => {
  const [tasks, setTasks] = useState(initDate);

  // Todoの追加関数
  const addTodo = (content: string) => {
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        content : content
      }
    ]);
  }

  // Todoの削除用関数
  const deleteTodo = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo}/>
      <List tasks={tasks} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
