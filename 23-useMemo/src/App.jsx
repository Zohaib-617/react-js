import React, { useMemo, useState } from 'react'


const array = new Array(30_000_00).fill(0).map((item,idx)=>{
    return{
      index:idx,
      istheNumber: idx===29_000_00
    }
  })


const App = () => {
  const [num, setnum] = useState(0)
  const [number, setnumber] = useState(array)
  
  //expensive computation
 // const magical = number.find(item=>item.istheNumber===true)

 //useMemo stores the value and at each render show the value, no need to perform the computation at 
 //each render
  const magical = useMemo(() => number.find(item=>item.istheNumber===true), [number])

  return (
    <div style={{padding:'100px'}}>
     <h1>{magical.index}</h1>
      <h1>Count is {num}</h1>


    <button onClick={()=>{
      setnum(num+1)
      if(num===10){
        setnumber(new Array(10_000_00).fill(0).map((item,idx)=>{
    return{
      index:idx,
      istheNumber: idx===9_000_00
    }
  }))
      }
      console.log(num);
      
    }}>Click</button>

    </div>
  )
}

export default App
