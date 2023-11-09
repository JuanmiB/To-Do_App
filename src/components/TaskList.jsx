/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './TaskList.css'
export default function TaskList({ list, onChangeTodo, onRemoveTodo }) {
  return (
    <ul className='list'>
      {list.map(task =>
        <li key={task.id}>
          <Task
            todo={task}
            onChange={onChangeTodo}
            onRemove={onRemoveTodo}
          />
        </li>
      )}
    </ul>
  )
}
// task tiene debe editar | eliminar | marcar como completada
function Task ({ todo, onChange, onRemove }) {
  const [isEditing, setIsEditing] = useState(false)
  let todoContent
  if (isEditing) {
    todoContent = (
      <>
        <input
        className='todo-input'
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value
            })
          }} />
        <button onClick={() => {
          setIsEditing(false)
        }}>
          Guardar
        </button>
      </>
    )
  } else {
    todoContent = (
      <>
        <h2>{todo.title}</h2>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({ ...todo, done: e.target.checked })
        }}
      />
      {todoContent}
      <div className='butons'>
        <button onClick={() => {
          if (window.confirm('¿Estás seguro?')) {
            onRemove(todo.id)
          }
        }}>
          Eliminar
        </button>
        <button onClick={() => {
          setIsEditing(true)
        }}>
          Editar
        </button>
      </div>
    </label>
  )
}
