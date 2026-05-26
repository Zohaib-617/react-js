import React, { useRef, useState } from 'react'
import App2 from './App2'
const App = () => {



const [num, setnum] = useState(0)
const a = useRef(0)
const btnref = useRef() // reference created, you can create multiples refs
function increase(){
  setnum(num+1)
   a.current = a.current + 1 //does not affect val of a on rerender
   console.log(a.current);

   btnref.current.style.backgroundColor = 'red' //on click changing color to red
}

  //using btnref as a reference to access the button element without interracting with dom

  return (
    <div style={{padding:'100px'}}>
      <App2/>
      <h1>{num}</h1>
      
      <button ref={btnref} onClick={increase}>click</button>
    </div>
  )
}

export default App
