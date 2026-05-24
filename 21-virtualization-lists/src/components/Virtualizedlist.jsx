import React, { useState } from 'react'

const Virtualizedlist = ({list,itemheight,height,width}) => {
const [indices, setindices] = useState([0,Math.floor(height/itemheight)])
const visiblelist = list.slice(indices[0],indices[1]+1)
  
 function scroll(e){
  const {scrollTop} = e.target
  const newStartIndex = Math.floor(scrollTop / itemheight)
  const newEndIndex = newStartIndex+ Math.floor(height/itemheight)
  setindices([newStartIndex,newEndIndex])
 }
  

  return (
    <div style={{padding:'100px'}}>
     <div onScroll={(e)=>{
        scroll(e)
       }}
     style={{height:`${height}px`,width:width, overflow:'auto'}}>
        <div 
       style={
        {height:`${itemheight*list.length}px`,width:'300px',backgroundColor:'brown',position:'relative'}}>

        {visiblelist.map((elem,idx)=>{
          return <div key={idx} style={
            {height:`${itemheight}px`,border:'2px solid black', position:'absolute',
            top:(indices[0]+idx)*itemheight, width:'100%' }}>
            {elem}
          </div>
        })}

       </div>
       
     </div>


    </div>
  )
}

export default Virtualizedlist
