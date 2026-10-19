import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title,setTitle] = useState('')
  const [detail,setDetail] = useState('')

  const [task,setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    const copytask=[...task];
    copytask.push({title,detail})
    setTask(copytask)

    console.log(task)

    setTitle("")
    setDetail("")
  }

  const deletenote=(idx)=>{
    const copytask=[...task];
    copytask.splice(idx,1)
    setTask(copytask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <title>APP</title>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start flex-col gap-4  p-10'>

          <input  
          type="text" 
          placeholder="Enter notes heading"
          className='px-5 w-full outline-none py-2 border-2 rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}>
          </input>

          <textarea  
          type="text" 
          className='px-5 w-full h-20 py-2 border-2 items-start rounded'
          placeholder="write details"
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}>
          </textarea>
          <button className='bg-white active:scale-95 text-black px-5 py-2 rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
          <div className='flex justify-start items-start flex-wrap gap-5 mt-6 h-full overflow-auto'>
            {task.map(function(e,idx){
              return <div key={idx} className="flex overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-none] items-start pb-4 justify-between flex-col relative h-52 p-4 bg-cover w-40 py-6 px-4 rounded-xl  bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-xl text-black font-bold'>{e.title}</h3>
                  <p className='mt-2 leading-tight font-medium text-gray-800'>{e.detail}</p>
                </div>
                <button onClick={()=>{
                  deletenote(idx)
                }} className='w-full active:scale-95 bg-red-600 font-bold text-white rounded'>Delete</button>
              </div>
            })}  
          </div>
      </div>
    </div>
  )
}
export default App