import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'




const App = () => {

  const users=[
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     tag:'Satisfied',
     color:'lightblue'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     tag:'Unserved',
      color:'green'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
     intro:'',
     tag:'UnderBanked',
      color:'orange'
    }
  ]

  return (
    <div className=''>
    <Section1 users={users}/>
    <Section2/>
    </div>
  )
}

export default App
