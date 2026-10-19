// this is how we handle the form
import React from 'react'

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter ur name'/>
        <button>submit</button>
      </form>
    </div>
  )
}
export default App