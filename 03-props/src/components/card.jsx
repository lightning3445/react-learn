import React from 'react'


const Card = (a) => {
    console.log(a.user)
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1791069927625-2f222076382c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <h1>{a.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <button>view profile</button>
    </div>
  )
}

export default Card
