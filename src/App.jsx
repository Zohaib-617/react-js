import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

const [title, settitle] = useState('')
const [detail, setDetail] = useState('')
const [task, settask] = useState([])

const formhandler = (evt)=>{
   evt.preventDefault()

  const copyTask = [...task]
  copyTask.push({title,detail})
 
  settask(copyTask)
 console.log(task)
  settitle('')
  setDetail('')
}

const deletenote =(idx)=>{
  const copyTask = [...task]
  console.log(idx)
  copyTask.splice(idx,1)
  settask(copyTask)
}

  return (
    <div className='h-screen bg-black text-white lg:flex'>
     <form onSubmit={(e)=>{
       formhandler(e)
     }}
      className='flex  flex-col lg:w-1/2 items-start gap-4  p-10  '>

      <h1 className='text-3xl font-bold'>Add Notes</h1>

      {/* {Phela input heading} */}
        <input
       type="text" 
       placeholder='Enter Notes heading'
       
       className='px-3 py-1 w-full border-2 rounded outline-none'
       value={title}
       onChange={(e)=>{
       settitle(e.target.value)
       }}
       />

       {/* {detailed input heading} */}
      <textarea type="text"
       placeholder='Enter details'
       
       className='px-3 py-1 h-30 w-full border-2 rounded outline-none'
        value={detail}
       onChange={(e)=>{
       setDetail(e.target.value)
       }}
       />

       <button className='bg-white text-black px-1 py-1 rounded outline-none active:scale-90'
       >Add Notes</button>
     

     </form>

     <div className=' lg:w-1/2 p-10  lg:border-l'>
     <h1 className='text-3xl font-bold'>Recent Notes</h1>
     <div className='flex flex-wrap gap-2 mt-2 h-[90%] overflow-auto'>
       {task.map(function(elem,idx){
        return <div key={idx} className='bg-white relative h-52 w-40 rounded-2xl text-black bg-[url(data:image/png;base64,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)]
          '>
        <h2 onClick={()=>{
         deletenote(idx)
        }} className=' py-1 h-0.5 mt-3 ml-2 cursor-pointer active:scale-y-90'> <X /> </h2>

          <h3 className='p-2 leading-tight font-bold text-lg mt-4  '>{elem.title}</h3>
          <p className=' text-gray-500 font-medium  ml-2'>{elem.detail}</p>
        </div>
       })}
      
      
       
     </div>
     </div>
    </div>
  )
}

export default App
