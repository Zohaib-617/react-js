import React from 'react'

const App = () => {

 localStorage.setItem('user','Ali')
 localStorage.getItem('user')
 localStorage.removeItem('user')
 localStorage.clear()
  return (
    <div>
      
    </div>
  )
}

export default App
