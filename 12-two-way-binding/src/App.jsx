// two way binding if we want to change anything in input then we use this
import React, { useState } from 'react'

const App = () => {

  const [title,setTitle] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log('formsubmitted',title)
  }
  return (
    <div>
      <form onSubmit={(e)=>
        {
          submitHandler(e)
        }
      }>
        <input type="text" 
        value={title}
        onChange={(e)=>
        {
          setTitle(e.target.value)
        }
        }>
        </input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
