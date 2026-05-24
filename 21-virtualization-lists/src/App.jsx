import React from 'react'
import Virtualizedlist from './components/Virtualizedlist'

const App = () => {

  const list = Array.from({length:100000},(val,idx) =>`Item: ${idx+1}`)
 
  return (
    <div>
      <Virtualizedlist list={list} itemheight={40} height={400} width={320}/>
    </div>
  )
}

export default App
