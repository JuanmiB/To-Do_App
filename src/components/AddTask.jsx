import { useState } from 'react'
import './AddTask.css'
const AddTask = ({ onAddTodo }) => {
  const [title, setTitle] = useState('')
  return (
    <section className='addTaskBar'>
     <input
     className='inputAddTask'
        placeholder="Agregar tarea"
        value={title}
        onChange={e => {
          setTitle(e.target.value)
        }
      }

      />
      <button onClick={() => {
        title.length > 0 ? onAddTodo(title) : null
        setTitle('')
      }}>+</button>
    </section>
  )
}

export default AddTask
