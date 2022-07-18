import React, { useRef } from 'react'

function UseRefExemple1() {
  const inputRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' ref={inputRef} className="form-control mb-2" />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default UseRefExemple1