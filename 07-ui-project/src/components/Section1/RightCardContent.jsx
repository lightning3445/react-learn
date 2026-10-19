import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <h2>{props.id+1}</h2>
      <button>{props.tag}</button>
    </div>
  )
}

export default RightCardContent
