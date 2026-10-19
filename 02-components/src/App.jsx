import React from 'react'
import card from './components/card'
import navbar from './components/navbar'

const App = () => {
  const user='dhruv'
  return (
    <div>
      <div classname='card'>
        <h1>hello guys i am {user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure, ea error pariatur repellat a consectetur alias voluptatem minima consequuntur soluta commodi harum totam omnis cum amet dolorem minus neque.</p>
        {navbar()}
      </div>
      {card()}
    </div>
  )
}

export default App