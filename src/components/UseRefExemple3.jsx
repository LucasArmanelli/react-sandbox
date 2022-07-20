import React, {useState} from 'react'

import Todo from './Todo'

function UseRefExemple3() {
  const [showTodo, setShowTodo] = useState(false)

  return (
    <div>
     {showTodo && <Todo />}
     <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>
      Toggle Todo
     </button>
    </div>
  )
}

export default UseRefExemple3