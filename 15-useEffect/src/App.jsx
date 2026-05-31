import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
   const [num1, setnum1] = useState(0)
   const [calculate, setcalculate] = useState(0)
 function achanging(){
console.log('a is change')
 }

 function bchanging(){
  console.log('b is change')
 }

//  function calculatenum(){
//   setcalculate(num+num1)
//  }

  useEffect(function(){
    console.log('hello')
    bchanging()
   // calculatenum()
  
  },[calculate])


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
       setnum(num+1)
      
      }}>click</button>


      <h1>{num1}</h1>
      <button onClick={()=>{
       setnum1(num1+1)
      }}>click</button>

       <h1>{calculate}</h1>
      <button onClick={()=>{
       setcalculate(num+num1)
      }}>click</button>
   
    </div>
  )
}

export default App
