// import React from 'react'

// const App = () => {
//   function btnclicked(){
//     console.log('button is clicked')
//   }
//   return (
//     <div>
//       <h1>hello, dhruv</h1>
//       <button onClick={btnclicked}>change user</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <input type="text" onChange={function(a){
//         console.log(a.target.value)
//       }}></input>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
  
//   return (
//     <div onMouseMove={()=>{
//         console.log('hello')
//       }}>
//       h
//     </div>
//   )
// }

// export default App

// function scroll
import React from 'react'

const App = () => {
  
  const pageScrolling=(a)=>
  {
    if(a>0)
    {
      console.log('a')
    }
    else
    {
      console.log('b')
    }
  }
  return (
    <div onWheel={(a)=>{
      pageScrolling(a.deltaY)
    }}>
      <div>a</div>
      <div>b</div>
      <div>c</div>
    </div>
  )
}

export default App