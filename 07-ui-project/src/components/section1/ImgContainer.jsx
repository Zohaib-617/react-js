import React from 'react'
import Rightcard from './rightcard'
import rightcard from './rightcard'


const ImgContainer = (props) => {
  console.log(props)
  return (
    <div id='right' className=' h-full p-5 w-2/3 flex gap-10  overflow-x-auto '>

 {props.users.map(function(elem,idx){
  return < Rightcard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
 })}

    </div>
  )
}

export default ImgContainer
