import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    return (
    <div>
      <div className="card">
        <div className="top">
          <img src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="" />
          <button>save <Bookmark size={10}/></button>
        </div>
        <div className='center'>
          <h3>{props.company} <span>5 days ago</span></h3>
          <h2>senior UI/UX designer</h2>
          <div className='tag'>
            <h4>part time</h4>
            <h4>senior level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/h</h3>
            <p>Mumbai, India</p>
          </div>
          <button>apply now</button>
        </div>
      </div>
    </div>
    )
}

export default Card