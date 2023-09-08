import React from 'react'
import Image from 'next/image'
function Cards({icon,link,  title}) {
  return (
    <div className='flex flex-col gap-2 md:w-64 border border-neutral-300 hover:border-gray-400 cursor-pointer rounded-lg pt-5 md:pb-18 pl-6 pb-12 pr-4
    '>
      <div>
        <Image
        className='border border-neutral-300 rounded-lg'
        width = {40}
        height = {40}
        src={icon} 
        />

      </div>
      <div><a href={link} className='font-semibold text-primary '>RESOURCES</a></div>
      <div className='text-2xl font-bold text-header-clr'>{title}</div>
    </div>
  )
}

export default Cards
