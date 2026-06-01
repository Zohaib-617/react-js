import React, { memo } from 'react'

//memo stops rerendering when same props is recieved each time
//even with memo this component rerenders because it is receiving a function in props,the function
//changes at each render in app.jsx, so even though it is recieving the same function in props
//its a different function at each render
//but if a state in this component is updated this component will rerender
const Navbar = memo ( function Navbar (props) {
    console.log('hello');
    
  return (
    <div>
      this is a {props.adjective} Navbar {props.setadjective()}
    </div>
  )
})

export default  Navbar
