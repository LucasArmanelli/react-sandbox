import React, { useState, useCallback } from 'react'

function UseCallbackExemple() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])

  return <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  }

  const Button = ({addTask}) => {
    console.log('btn render');
    return <div>
      <button className='btn btn-primary' onClick={addTask}>Add Task</button>
    </div>
  }

export default UseCallbackExemple