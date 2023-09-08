import React from 'react'
import SideBar_mobile from './SideBar_mobile'
import Container from './Container'
function Main() {
  return (
    <div className='md:flex justify-center py-5 px-6 lg:px-16 lg:pt-16 '>
      <div  className="lg:flex-initial lg:w-85">
      <SideBar_mobile/>
      </div>
      <div>
      <Container />
      </div>
  
    </div>
  )
}

export default Main
