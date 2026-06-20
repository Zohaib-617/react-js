import React from 'react'
import Lefttext from './LeftText'
import ImgContainer from './ImgContainer'

const center = (props) => {
  return (
    <div className=' h-[83.80vh] flex items-center gap-10 px-10 py-6 '>
      
     <Lefttext />
      <ImgContainer users ={props.users}/>
    </div>
  )
}

export default center
