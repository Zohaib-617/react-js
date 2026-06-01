import React, { useCallback, useState } from 'react'
import Navbar from './components/Navbar';

const App = () => {
  const [num, setnum] = useState(0)
  const [adj, setadj] = useState('hello')

 //useCallback freezes the function meaning at each render the function does not change and remains
 //as is but in the dependency array you can pass a value on which you want the function to change
 //if you write num in the array the function will only change when num updates
  const getadjective = useCallback( ()=>{
    return 'yesssssssss'
  },[])
  
  
  return (
    <div style={{padding:'100px'}}>
      <Navbar adjective={adj} setadjective={getadjective}/>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1)
      }}>Click</button>
    </div>
  )
}

export default App
