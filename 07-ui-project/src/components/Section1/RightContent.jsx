import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div>
      {props.users.map(function(a,idx){
        return <RightCard key={idx} img={a.img}/>
      })}
    </div>
  )
}

export default RightContent
