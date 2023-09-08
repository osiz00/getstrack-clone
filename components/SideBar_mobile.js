"use client"
import React, { useState } from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
function SideBar_mobile() {
  const [showCatagories, setShowCatagories] = useState(false)
  const handleCatagories = () => {
    const show = showCatagories
    setShowCatagories(!show)
  }
  const setActive = (e) => {
  
    if(e.target.id == "catagory"){ 
      e.target.classList.add("active")
    }
    else {
      const actives = document.querySelectorAll(".active")
      actives.forEach(active => {
        active.classList.remove("active")
      })
      e.target.classList.add("active")
    }
    
    
  }

  return (
    <div className='flex flex-col border-b border-neutral-300 md:border-none pb-5 pt-4 pr-10'>
      <div className='md:order-2'>
        <ul className='w-full flex md:flex-col md:gap-8 justify-between font-semibold text-neutral-400 md:px-5'>
          <li className='md:hidden'><a href="#" id='libraray' className='active hover:text-primary' onClick={setActive}>Library</a></li>
          <li className='hidden md:block'><a href="#" id='libraray' className='active hover:text-primary' onClick={setActive}>Home</a></li>
          <li><a href="#"  id='collections'className='hover:text-primary' onClick={setActive}>Collections</a></li>
          <li onClick={handleCatagories}><a id='catagory' className='flex gap-5 lg:w-full lg:justify-between hover:text-primary cursor-pointer' onClick={setActive}>Catagories <MdOutlineKeyboardArrowDown className={showCatagories ?' rotate-180 w-6 h-6' : "w-6 h-6"}/></a></li>
        </ul>
      </div>
      <div>
        <span className='font- mb-2 hidden md:block text-neutral-400'>Search Library</span>
        <div className='search_bar w-full  mb-10 flex items-center  border-2 rounded-sm border-neutral-400/40 text-neutral-400/60 py-2 px-2 mt-7 lg:mt-0 focus-within:border-primary focus-within:text-primary lg:order-1'>
          <AiOutlineSearch className='text-2xl'/>
          <input type="text" className='outline-none px-3 font-semibold text-black' />
        </div>
      </div>
      <div className={showCatagories ? "catagories columns-2 lg:columns-1  text-lg bg-accent-500/50 lg:bg-white pl-3 py-2 mt-10 lg:mt-4 lg:ml-10 rounded-md lg:order-10": "hidden"}>
        <ul>
          <li>All</li>
          <li>Books</li>
          <li>Colors</li>
          <li>Companies & Organizations</li>
          <li>Design Patterns</li>
          <li>Emails</li>
          <li>Gaming</li>
          <li>Media</li>
          <li>Newletters</li>
          <li>Podcasts & Videos</li>
          <li>Software & Tools</li>
          <li>Blogs & Articles</li>
          <li>Checklists</li>
          <li>Community</li>
          <li>Courses & Certificates</li>
          <li>Design Systems</li>
          <li>Employment</li>
          <li>Guides</li>
          <li>Mobile</li>
          <li>Plugins</li>
          <li>Resources</li>
          <li>Web Standards</li>
        </ul>
      </div>
      <div className=' bg-primary/10 order-4 w-64 py-5 px-3 mt-5 rounded-md hidden lg:block'>
        <div className=''>
        <p className='text-2xl font-bold pb-2'>Contribute to Stark</p>
        <p className='font-normal'>Got any accessibilty resources or news?</p>
        <button className='bg-primary text-white font-semibold w-full py-2 rounded-md mt-6'>Submit a Resource</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar_mobile
