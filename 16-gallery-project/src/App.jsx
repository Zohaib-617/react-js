import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'


const App = () => {

const [userdata, setUserdata] = useState([])
const [index, setindex] = useState(1)

  const getdata = async () =>{
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  setUserdata(response.data)
console.log(userdata)
  }

  useEffect(function(){
    getdata()
  },[index])

  let printuserdata = <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> loading...</h3>
  if(userdata.length>0){
 printuserdata =  userdata.map(function(elem,idx){
      return <div key={idx}>
       <Card elem={elem} />
      </div>
   })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
     
   <div className='flex flex-wrap gap-3'>
    {printuserdata}
   </div>
<div className='flex justify-center items-center gap-2 absolute bottom-4 left-147'>

   <button 
   style={{opacity: index==1?0.5:1}}
   onClick={()=>{
    if(index>1){
  setindex(index-1)
  setUserdata([])
    } 
   }} 
   className='bg-amber-600 px-4 py-1 rounded cursor-pointer active:scale-95'>Prev</button>

    <h4>Page {index}</h4>

    <button  onClick={()=>{
     setindex(index+1)
      setUserdata([])
   }} 
   className='bg-amber-600 px-4 py-1 rounded cursor-pointer active:scale-95'>Next</button>
   </div>
   
    </div>
  )
}

export default App
