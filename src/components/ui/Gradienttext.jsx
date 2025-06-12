import React from 'react'

const Gradienttext = ({children}) => {
  return (
    <span className='bg-[linear-gradient(90deg,_hsla(201,60%,50%,1)_11%,_hsla(201,59%,61%,1)_36%,_hsla(201,60%,82%,1)_83%,_hsla(201,60%,82%,1)_100%)] bg-clip-text text-transparent'>{children}</span> 
  )
}

export default Gradienttext