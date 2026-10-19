import React from 'react'

const RightCard = (props) => {
  return (
    <div>
      <img src={props.img}></img>
      <RightCardContent tag={props.tag} />
    </div>
  )
}

export default RightCard
