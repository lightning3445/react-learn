import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  
  const users=[
    {
      img:'',
      intro:'',
      tag:''
    },
    {
      img:'',
      intro:'',
      tag:''
    },
    {
      img:'',
      intro:'',
      tag:''
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
