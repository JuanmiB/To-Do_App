/* eslint-disable no-unused-vars */
import { useState } from 'react'
import AddTask from './components/AddTask.jsx'
import TaskList from './components/TaskList.jsx'
let nextId = 0
const initialTodos = [

]

const App = () => {
  const [todo, setTodo] = useState(initialTodos)

  function handleAddTodo (title) {
    setTodo([
      ...todo,
      {
        id: nextId++,
        title,
        done: false
      }
    ])
  }

  function handleChangeTodo (changeTodo) {
    setTodo(todo.map(todo => {
      if (todo.id === changeTodo.id) {
        return changeTodo
      }
      return todo
    }))
  }

  function handleRemoveTodo (todoId) {
    setTodo(
      todo.filter(todo => todo.id !== todoId)
    )
  }
  return (
        <main>
            <h1>Todo App</h1>
            <AddTask
                onAddTodo={handleAddTodo}
            />

            <TaskList
                list={todo}
                onChangeTodo={handleChangeTodo}
                onRemoveTodo={handleRemoveTodo}
            />

        </main>
  )
}

export default App
