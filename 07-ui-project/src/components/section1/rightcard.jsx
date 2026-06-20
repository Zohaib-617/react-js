import React from 'react'
import Rightcardcontent from './rightcardcontent'
const rightcard = (props) => {
  return (
   

    <div className='h-full shrink-0 w-70 relative rounded-4xl overflow-hidden'>
      <img className=' h-full w-full object-cover ' src={props.img} />
     <Rightcardcontent tag={props.tag} id={props.id} color={props.color}/>

    </div>

     

   
  )
}

export default rightcard
