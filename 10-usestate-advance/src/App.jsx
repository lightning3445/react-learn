// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({user:'dhruv',age:20})

//   const btnclicked=()=>
//   {
//     console.log(num.user)
//     // in this the value of num changes asynchronously
//   }
//   return (
//     <div>
//       <h1>{num.user}</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
//   )
// }

// export default App

// spread operator how to change the value of objects
// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({user:'dhruv',age:20})

//   const btnclicked=()=>
//   {
//     // this is the spread operator
//     // It copies the properties of num into a new object.
//     const newNum={...num};
//     newNum.user='abc'
//     newNum.age=10
//     setNum(newNum)
//     // in this the value of num changes asynchronously
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
//   )
// }
// export default App

// arrays
// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({user:'dhruv',age:20})

//   const btnclicked=()=>
//   {
//     // It uses the spread operator (...) to copy the elements of an array into a new array.
//     // const newNum=[...num]
//     // newNum.push(99)
//     // setNum(newNum)

//     // shortcut method for updating the value

//     setNum(prev=>({...prev,age:50}))
//   }
//   return (
//     <div>
//       <h1>{num.age}</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
//   )
// }
// export default App

// ________________batch update_____________
import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  const btnclicked=()=>
  {
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked}>click</button>
    </div>
  )
}
export default App