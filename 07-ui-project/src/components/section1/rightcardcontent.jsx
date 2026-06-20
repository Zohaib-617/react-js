import React from 'react'

const rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-6'>
       <h2 className='bg-white rounded-full h-10 w-10 font-semibold text-xl flex items-center justify-center'>{props.id+1}</h2>
       <div className=''>
        <p className='mb-12 text-medium text-white leading-relaxed text-semibold text-shadow-5xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas molestias cupiditate fuga officia, sapiente dolore.</p>
       <div className='flex justify-between'>
        <button style={{backgroundColor:props.color}} className=' w-30 rounded-full font-medium px-3 py-2 text-white cursor-pointer'>{props.tag}</button>
        <button  className='bg-blue-800 w-9 rounded-full font-medium px-2 py-2 text-white cursor-pointer'><i className="ri-arrow-right-long-line"></i></button>
       </div>  
       </div>
    </div>
  )
}

export default rightcardcontent
