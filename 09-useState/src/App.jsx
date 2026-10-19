// import React, { useState } from 'react'

// const App = () => {
// // in this one variable is for readonly
// // which is a and second is for change
// // which is setA
//   const [a, setA] = useState(20);
//   const [users, setUsers] = useState('abc')
//   const [arr, setArr] = useState([10,20,30])

//   function changeNum()
//   {
//     setA(40)
//     setUsers('dhruv')
//     setArr([40,50,60])
//   }
//   return (
//     <div>
//       <h1>value of a is {a}</h1>
//       <h1>value of b is {users}</h1>
//       <h1>array is {arr}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App

// increase decrease button
import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum()
  {
    setNum(num+1)
  }
  function decreaseNum()
  {
    setNum(num-1)
  }
  function j()
  {
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={j}>jump by 5</button>
    </div>
  )
}

export default App
