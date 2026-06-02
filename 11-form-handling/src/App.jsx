import React, { useState } from 'react'

const App = () => {
 
const [title, settitle] = useState('')



  function formsubmit(e){
    console.log("form submitted",title)
    e.preventDefault()
    settitle('')
  }

  return (
    <div>
      <form onSubmit={(evt)=>{
        formsubmit(evt)
      }}>
        <input type="text" placeholder='Enter your name' value={title}
       onChange={(e)=>{
       settitle(e.target.value)
       }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
